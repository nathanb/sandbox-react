import request from "superagent"

export function ajax({url, credentials, method, data, query, type, headers}) {
  return new Promise((resolve, reject) => {
    let req = request(method || "GET", url)
      .type(type || "json")
      .accept(type || "json")
      .query(query || {})

    if (credentials)
      req = req.auth(credentials.username, credentials.password)

    //set custom headers
    if (headers && typeof headers === "object") {
      //INFO: trusts that we're not setting type, method, or other known reserved headers being used here.
      let hkeys = Object.keys(headers)
      hkeys.forEach(k => {
        req.set(k, headers[k])
      })
    }

    if (data)
      req.send(data)

    req.then(resolve, reject)
  })
}

export default ajax
