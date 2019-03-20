function loadWebAssembly(filepath, imports = {}) {
  return fetch(filepath)
    .then(res => {
      console.log({ res })

      // 请求回来的是wasm模块，转换成arraybuffer
      if (res.ok) {
        return res.arrayBuffer();
      }

      throw new Error(`Unable to fetch Web Assembly file ${url}.`);
    })
    .then(bytes => {
      console.log('table:  ---------------------- ')
      console.log({ bytes })
      
      // 编译
      return WebAssembly.compile(bytes)
    })
    .then(modules => {
      console.log('modules:  ---------------------- ')
      console.log({ modules })

      imports.env = imports.env || {}
      Object.assign(imports.env, {
        memoryBase: 0,
        tableBase: 0,
        memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
        table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' })
      })

      return new WebAssembly.Instance(modules, imports)
    })
}
