var _ = exports

_.type = function(obj) {
	return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}

_.isArray = function(el) {
	return _.type(el) === 'Array'
}

_.slice = function(arrayLike, index) {
	return Array.prototype.slice.call(arrayLike, index)
}

_.truthy = function(value) {
	return !!value
}

_.isString = function(el) {
	return _.type(el) === 'String'
}

_.each = function(array, fn) {
	array.foreach((item, index) => {
		fn(item, index)
	})
}

_.toArray = function(listLike) {
	if (!listLike) return []
	let list = []
  for (let i = 0, len = listLike.length; i < len; i++) {
  	list.push(listLike[i])
  }
  return list
}

_.setAttr = function(node, key, value) {
	switch(key) {
		case 'style':
		  node.style.cssText = value
		  break
		case 'value':
		  let tagName = node.tagName || ''
		  tagName = tagName.toLowerCase()
		  if (tagName === 'input' || tagName === 'textarea') {
		  	node.value = value
		  } else {
		  	node.setAttribute(key, value)
		  }
		  break
		default: 
		  node.setAttribute(key, value)
		  break
	}
}