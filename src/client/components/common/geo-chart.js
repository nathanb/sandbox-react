import React,{useState, useEffect, useRef} from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"
import * as topojson from "topojson-client"
import Alert from "./alert"
import inflection from "inflection"
import * as d3f from "d3-format"
import _reduce from "lodash/reduce"
import _get from "lodash/get"

//this component is cherry picked from another project I've done. I converted it to hook based React and then adapted it just for this example.
const GeoChart = ({sourceData, groupKey, metricKey, colorScheme, title}) => {
  const [alert, setAlert] = useState({message: null, type: "info"})
  const canvasRef = useRef(null)

  //creating these as variables since we're only appending
  let us = null
  let data = null

  async function loadGeo() {
    let geoResponse = await fetch("/counties-albers-10m.json") //us geo data
    if (geoResponse.ok) {
      us = await geoResponse.json()
      data = new Map(sourceData.map(d => [_get(d, groupKey, ""), _get(d, metricKey, 0)]))
      data.title = title
      createChart()
    } else {
      setAlert({message: geoResponse.errorMessage})
    }
  }

  function createChart() {
    const format = d3f.format(".1%")
    let path = d3.geoPath()

    //determine darkest color/value
    let metric = metricKey
    let sumAll = _reduce(sourceData, (a, v) => v[metric] + a, 0)
    let avg = sumAll / sourceData.length
    let gtAvgData = sourceData.filter(v => v[metric] > avg)
    let sumGTAvg = _reduce(gtAvgData, (a, v) => v[metric] + a, 0)
    let gtAvg = sumGTAvg / gtAvgData.length
    gtAvgData = null

    let color = d3.scaleQuantize([0, gtAvg], d3[colorScheme][9]) //nine boxes of colors broken down via the data.
    let legend = g => {
      let x = d3.scaleLinear()
        .domain(d3.extent(color.domain()))
        .rangeRound([0, 260])

      g.selectAll("rect")
        .data(color.range().map(d => color.invertExtent(d)))
        .join("rect")
        .attr("height", 8)
        .attr("x", d => x(d[0]))
        .attr("width", d => x(d[1]) - x(d[0]))
        .attr("fill", d => color(d[0]))

      g.append("text")
        .attr("x", x.range()[0])
        .attr("y", -6)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(title)

      g.call(d3.axisBottom(x)
        .tickSize(20)
        .tickFormat(d => format(d))
        .tickValues(color.range().slice(1).map(d => color.invertExtent(d)[0])))
        .select(".domain")
        .remove()
    }

    let svg = d3.select(canvasRef.current)
      .attr("viewBox", "0 0 960 600")
      .style("width", "100%")
      .style("height", "auto")

    svg.append("g")
      .attr("transform", "translate(600,40)")
      .call(legend)

    let breakdownFeature = us.objects.counties

    //fill for the data; state or county.
    svg.append("g")
      .selectAll("path")
      .data(topojson.feature(us, breakdownFeature).features)
      .join("path")
      .attr("fill", d => color(data.get(d.id) || 0))
      .attr("d", path)
      .append("title")
      .text(d => `${d.properties.name}, ${format(data.get(d.id))}`)

    //this is the white outline around the states.
    svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path)
  }

  //onload
  useEffect(() => {
    if (sourceData)
      loadGeo()
    //no hidden dom or data; this will self clean as it removes DOM
  },[sourceData])
  return (
    <div>
      {alert.message ? (<Alert message={alert.message} type={alert.type} />) : null}
      <svg ref={canvasRef} className="geo"></svg>
    </div>
  )
}

GeoChart.propTypes = {
  sourceData: PropTypes.array.isRequired //Map
  ,byCounty: PropTypes.bool.isRequired
  ,metricKey: PropTypes.string.isRequired
  ,colorScheme: PropTypes.string.isRequired
  ,title: PropTypes.string
}

GeoChart.defaultProps = {
  byCounty: false
  ,colorScheme: "schemeBlues" //see https://github.com/d3/d3-scale-chromatic/blob/master/README.md#schemeBlues
  ,title: ""
}

export default GeoChart
