const addParamsToUrl = (url, params) => {
  let paramArr = []
  for (const key in params) {
    paramArr.push(`${key}=${encodeURIComponent(params[key])}`)
  }

  let paramStr = paramArr.join('&')

  return url.includes('?') ? `${url}&${paramStr}` : `${url}?${paramStr}`
}

const jsonp = (url, params = {}) => {
  return new Promise((resolve) => {
    const callback = 'jsonp_' + Math.random().toString(36).substr(2)
    let response
    params.callback = callback

    const script = document.createElement('script')
    script.src = addParamsToUrl(url, params)
    script.type = 'text/javascript'
    script.async = true 

    window[callback] = data => {
      response = data
    }

    const handler = event => {
      event.type === 'load' && response ? resolve(response) : resolve(null)
      window[callback] = null
      document.body.removeChild(script)
    }

    script.onload = handler
    script.onerror = handler

    document.body.appendChild(script)
  })
}