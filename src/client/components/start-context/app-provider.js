import React, {useState, useEffect} from "react"
import AppContext from "./app-context"

const AppProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [account, setAccount] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [backgroundUpdateData, setBackgroundUpdateData] = useState(0)
  const [busy, setBusy] = useState(false)


  useEffect(() => {
    const intervalId = setInterval(() => {
      let updated = Math.round(Math.random() * 100)
      setBackgroundUpdateData(updated)
      console.log(`AppContext.Provider: interval, data changed to: ${updated}`)
    }, 5000)

    //disposal cleanup
    return () => {
      console.log("AppContext.Provider: cleanup")
      clearInterval(intervalId)
    }
  }, [])
  return (
    <AppContext.Provider value={{
      user
      ,account
      ,authenticated
      ,backgroundUpdateData
      ,busy
      ,setBusy: (v) => {setBusy(v)}
      ,refresh: () => {
        //do the refresh work..
        setBusy(true)
        setTimeout(() => {
          console.log("AppContext.Provider: manual refresh")
          setBusy(false)
          setUser({username: "fred"})
          setAccount({accountId: "123F"})
          setAuthenticated(true)
        }, 1000)
      }
    }}>
      {children}
    </AppContext.Provider>
  )
}

// class AppProvider extends React.Component {
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       user: null
//       ,account: null
//       ,authenticated: false
//       ,backgroundUpdateData: 0
//     }
//
//     this.randomData = this.randomData.bind(this)
//   }
//   randomData() {
//     let updated = Math.round(Math.random() * 100)
//     this.setState({backgroundUpdateData: updated})
//     console.log(`AppContext.Provider: interval, data changed to: ${this.state.backgroundUpdateData}`)
//   }
//   componentDidMount() {
//     this.intervalId = setInterval(this.randomData, 5000)
//   }
//   componentWillUnmount() {
//     if (this.intervalId)
//       clearInterval(this.intervalId)
//   }
//   render() {
//     return (
//       <AppContext.Provider value={{
//         context: {user: this.state.user, account: this.state.account, authenticated: this.state.authenticated, backgroundUpdateData: this.state.backgroundUpdateData}
//         ,refresh: () => {
//           //do the refresh work..
//           setTimeout(() => {
//             console.log("AppContext.Provider: manual refresh")
//             this.setState({user: "fred", account: {id: "123F"}, authenticated: true})
//           }, 1000)
//         }
//       }}>
//         {this.props.children}
//       </AppContext.Provider>
//     )
//   }
// }

export default AppProvider
