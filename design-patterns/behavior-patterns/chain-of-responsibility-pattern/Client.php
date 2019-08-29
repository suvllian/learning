<?php
function __autoload($ClassName)
{
	include $ClassName.".php";
}

class Client
{
	private $queryNow;

	public function __construct()
	{
		if (isset($_GET['deal'])) {
			$this->queryNow = $_GET['deal'];
		}

		$data     = new GetData();
		$visitors = new GetVisitors();
		$vote     = new DealVote();

		//设置后继
		$data->setSuccessor($visitors);
		$visitors->setSuccessor($vote);

		//生成处理器加载请求
		$LoadUp = new Request($this->queryNow);
		$data->handleRequest($LoadUp);
	}
}

$MakeRequest = new Client();