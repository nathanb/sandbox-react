import {useEffect, useState} from "react"

export function useAppContext() {
  const [user, setUser] = useState(null)
  const [account, setAccount] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [backgroundUpdateData, setBackgroundUpdateData] = useState(0)
  const [busy, setBusy] = useState(false)

  function refresh() {
    setBusy(true)
    setTimeout(() => {
      console.log("AppContext.Provider: manual refresh")
      setBusy(false)
      setUser({username: "fred"})
      setAccount({accountId: "123F"})
      setAuthenticated(true)
    }, 1000)
  }

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

  return {user, account, authenticated, backgroundUpdateData, busy, setBusy, refresh}
}
