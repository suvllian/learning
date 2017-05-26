let _ = require('./util')
let patch = require('./patch')
let listDiff = require('list-diff2')

function diff (oldTree, newTree) {
	let index = 0, patches = {}
	dfsWalk(oldTree, newTree, index, patches)
	return patches
}

function dfsWalk(oldNode, newNode, index, patches) {
	let currentPatch = []

	if (newNode === null) {

	} else if (_.isString(oldNode) && _.isString(newNode)) { // 字符串
		(newNode !== oldNode) ?	currentPatch.push({ type: patch.TEXT, content: newNode }) : ''
	} else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
		let propsPatches = diffProps(oldNode, newNode)
		propsPatches ? currentPatch.push({ type: patch.PROPS, props: propsPatches }) : ''
    (!isIgnoreChildren(newNode)) ? diffChildren(oldNode.children, newNode.children,
    	index, patches, currentPatch) : ''
	} else {
		currentPatch.push({ type: patch.REPLACE, node: newNode })
	}

	currentPatch.length ? (patches[index] = currentPatch) : ''
}

function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
	let diffs = listDiff(oldChildren, newChildren, 'key')
	newChildren = diffs.children

	if (diffs.moves.length) {
		let reorderPatch = { type: patch.REORDER, moves: diffs.moves }
		currentPatch.push(reorderPatch)
	}

	let leftNode = null,
	  currentNodeIndex = index
	_.each(oldChildren, (child, index) => {
		let newChild = newChildren[index]
		currentNodeIndex = (leftNode && leftNode.count) ? 
		  currentNodeIndex + leftNode.count + 1 :
		  currentNodeIndex + 1 
		dfsWalk(child, newChild, currentNodeIndex, patches)
		leftNode = child
	})
}

/*
 * 找出当前节点不同的属性或新增的属性，添加到对象中返回。
 */
function diffProps (oldNode, newNode) {
	let key, value, 
	  count = 0,
	  propsPatches = {},
	  oldProps = oldNode.props,
	  newProps = newNode.props;

	for (key in oldProps) {
		value = oldProps[key]
		if (newProps[key] !== value) {
			count++
			propsPatches[key] = newProps[key]
		}
	}

	for (key in newProps) {
		value = newProps[key]
    if (!oldProps.hasOwnProperty(key)) {
    	count++
    	propsPatches[key] = newProps[key]
    }
	}

	if (count === 0) {
		return null
	}

	return propsPatches
}

function isIgnoreChildren(node) {
	return (node.props && node.props.hasOwnProperty('ignore'))
}