var _ = require('./util')

/**
 * Virtual-dom Element.
 * @param {String} tagName
 * @param {Object} props - Element's properties,
 *                       - using object to store key-value pair
 * @param {Array<Element|String>} - This element's children elements.
 *                                - Can be Element instance or just a piece plain text.
 */
function Element(tagName, props, children) {
	if (!(this instanceof Element)) {
		if (!_.isArray(children) && children != null) {
			children = _.slice(arguments, 2).filter(_.truthy)
		}
		return new Element(tagName, props, children)
	}

	if (_.isArray(props)) {
		children = props 
		props = {}
	}

	this.tagName = tagName
	this.props = props || {}
	this.children = children || []
	this.key = props ? props.key : undefined

	let count = 0
	_.each(this.children, (child, i) => {
		if (child instanceof Element) {
			count += child.count
		} else {
			children[i] = '' + child
		}
		count++
	})

	this.count = count
}

Element.prototype.render = function() {
	let el = document.createElement(this.tagName)
	let props = this.props 
	for (let propName in props) {
		let propValue = props[propName]
		_.setAttr(el, propName, propValue)
	}

	_.each(this.children, (child) => {
		let childEl = (child instanceof Element) ? child.render() : document.createTextNode(child)
		el.appendChild(childEl)
	})

	return el
}

module.exports = Element