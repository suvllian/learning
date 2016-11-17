/*
动态加载script代码
*/
function loadScriptString(code){
	var script = document.createElement("script");
	script.type = "text/javascript";
	try{
		script.appendChild(document.createTextNode(code));
	}catch(ex){
		script.text = code;
	}
	document.body.appendChild(script);
}
/*
动态加载css代码
*/
function loadStyleString(code){
	var style = document.createElement("style");
	style.type = "text/css";
	try{
		style.appendChild(document.createTextNode(code));
	}catch(ex){
		style.styleSheet.cssText = code;
	}

	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style)
}
/*
动态加载外部script
*/
function loadScripts(url){
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}
/*
动态加载外部css
*/
function loadStyles(url){
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}