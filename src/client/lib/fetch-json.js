import _defaults from 'lodash/defaults'

export async function fetchJson(url, options = {}) {
  let result = {}
  try {
    let args = _defaults(options, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
    if (typeof options.json !== 'undefined') { args.body = JSON.stringify(options.json) }

    let response = await fetch(url, args)

    result.response = response
    result.status = response.status
    result.ok = response.ok
    result.json = await response.json()

    // we could consistently handle soft errors here. For example:
    result.errorMessage = result.json.error
  } catch (err) {
    result.error = err
    result.errorMessage = err.message
  }
  return result
}

export default fetchJson
