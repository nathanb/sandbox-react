import React, {useEffect, useState} from "react"
import DefaultLayout from "../start-context/default-layout"
import GeoChart from "../common/geo-chart"
import Alert from "../common/alert"
import * as d3 from "d3"

//from sample on https://observablehq.com/@d3/choropleth
const TestChartPage = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  async function loadData() {
    let response = await fetch("/unemployment-x.csv")
    if (response.ok) {
      let csv = await response.text()
      //this is wonky; sorry; I'm just pulling the example. This can definitely be cleaned up.
      setData(d3.csvParse(csv, ({id, rate}) => {return {id, rate: (+rate)/100}}))
    } else {
      setError(`Failed to load data CSV; Response code: ${response.statusCode}`)
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <DefaultLayout>
      <h1>Test Geo Chart</h1>
      <Alert message={error}/>
      <GeoChart
        sourceData={data}
        title="Test chart"
        groupKey="id"
        metricKey="rate"
        byCounty={true}
        title="Unemployment rate (%)"
      />
    </DefaultLayout>
  )
}

export default TestChartPage
