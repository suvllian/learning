var _errorMsg = document.getElementById("error-text");

var _postFileBtn = document.getElementById("postFile");

_postFileBtn.onchange = function(){
	/*文件名*/
	var _value = this.value;
	console.log(_value);

	/*设置可上传的格式*/
	var upLoadType = '.jpg,.gif,.bmp,.png';

	/*文件后缀转小写*/
	var fileExt = _value.substr(_value.lastIndexOf(".")).toLowerCase();

	/*查找后缀名是否符合条件，如果符合返回>=0，如果不符合则返回负数;*/
	var result = upLoadType.indexOf(fileExt);

	if(this.files.length === 0){return;}

	var _fileObject = this.files[0];
	console.log(_fileObject);

	if (_fileObject.size/1024<100) {
		_errorMsg.innerHTML = "<font style='color=green'>Right</font>";
		_errorMsg.style.display = "inline-block";
	};
	if (result<0) {
		_errorMsg.innerHTML = "请输入正确的格式:"+upLoadType;
		_errorMsg.style.display = "inline-block";
	}else{
		_errorMsg.innerHTML = "<font style='color=green'>Right</font>";
		_errorMsg.style.display = "inline-block";	
	};

	var _fileReader = new FileReader();

	/*当图像文件加载后,转换成一个data:URL,传递到onload回调函数中*/
	_fileReader.readAsDataURL(_fileObject);
	_fileReader.onload = function(oFREvent){
		document.getElementById("uploadPreview").src = oFREvent.target.result;
	};
};