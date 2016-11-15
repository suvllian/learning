/*
*通过类名获取节点操作
*如果浏览器不支持getElementsByClassName方法
*则通过获取TagName逐个比较加入数组中得出结果
*/
function getElementsByClassName(node,classname){
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	}else{
		var results = new Array();
		var elems = node.getElementsByTagName("*");
		for(var i=0;i<elems.length;i++){
			if (elems[i].className.indexOf(classname)!=-1) {
				results[results.length] = elems[i];
			}
		}
		return results;
	}		
}

/****
*通过父级和子元素的class类 获取该同类子元素的数组
*/
function getClassObject(parent,className){
	//获取parent下的所有标签
	var obj = parent.getElementsByTagName("*");
	var pinS = [];
	for (var i = 0; i < obj.length; i++) {
		if(obj[i].className==className){
			pinS.push(obj[i]);
		}
	};
	return pinS;
}

/*
自定义实现的基本的获取节点操作封装：
支持Class、Id、标签
*/
var $ = function(node){
	var nodeName = node;
	var type     = nodeName.charAt(0);
	var nodeRealName = null;
	var domNode = null;

	switch(type){
		case '#':
			nodeRealName = nodeName.slice(1);
			domNode = document.getElementById(nodeRealName);
			break;	
		case '.':
			nodeRealName = nodeName.slice(1);
			domNode = getElementsByClassName(document,nodeRealName);
			break;
		default:
			domNode = document.getElementsByTagName(node);
			break;
	}
	return domNode;
}