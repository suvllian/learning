const addParamsToUrl = (url, params) => {
  let paramArr = []
  for (const key in params) {
    paramArr.push(`${key}=${encodeURIComponent(params[key])}`)
  }

  let paramStr = paramArr.join('&')

  return url.includes('?') ? `${url}&${paramStr}` : `${url}?${paramStr}`
}