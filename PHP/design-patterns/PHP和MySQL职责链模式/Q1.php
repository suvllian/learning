<?php
require_once("./../myfun/db.class.php");  

header('Access-Control-Allow-Origin:*');   
header('Access-Control-Allow-Headers:x-requested-with,content-type');  
header('Content-Type:application/json');

class GetData extends Handler 
{
	public function setSuccessor($nextService)
	{
		$this->successor = $nextService;
	}

	public function handleRequest($request)
	{
		$this->handle = "data";
		if($request->getService()==$this->handle)
		{
			//进行处理
			$cookieName = md5("xunlan");
			$cookieContent = md5("allow");

			$page = $_GET['page']-0;


			if (empty($_COOKIE[$cookieName])) {
			    setCookie($cookieName,$cookieContent,time()+86400);
			}

			$pageNumber = ($page-1)*16;
			$sql = "select * from image_info limit ".$pageNumber.",16";
			$result = $db->fetchAll($sql);
			echo json_encode($result);

		}
		elseif($this->successor!=NULL)
		{
			$this->successor->handleRequest($request);
		}
	}
}