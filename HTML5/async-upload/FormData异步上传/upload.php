<?php
header('Access-Control-Allow-Origin:*');   
header('Access-Control-Allow-Headers:x-requested-with,content-type');  
	if ($_POST["name"]) {
		setcookie("name",$_POST["name"], time()+3600);
	}
	if (is_uploaded_file($_FILES['myfile']['tmp_name'])) {
		//把文件转存到你希望存放的目录
		$uploaded = $_FILES['myfile']['tmp_name'];
		
		//每个用户动态创建一个文件夹
		$userpath = $_SERVER['DOCUMENT_ROOT']."/up/";
		//判断该用户是否已经有文件夹
		if(!file_exists($userpath)){
			mkdir($userpath);
		}
		
		//或者对文件名进行修改，但是需要使用字符串处理截得文件后缀名
		$truename = $_FILES['myfile']['name'];
		$moveto   = $userpath."/".time().substr($truename,strrpos($truename,"."));
		
		if(move_uploaded_file($uploaded,iconv("utf-8", "gb2312", $moveto))){
			echo "上传文件成功";
		}else{
			echo "上传文件失败";
		}
	}else{
		echo "上传文件失败";
	}
?>