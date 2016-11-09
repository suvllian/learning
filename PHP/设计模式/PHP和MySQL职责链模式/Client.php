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
		if (isset($_POST['send'])) {
			$this->queryNow = $_POST['send'];
		}
		$q1 = new Q1();
		$q2 = new Q2();
		$q3 = new Q3();
		$q4 = new Q4();
		$q5 = new Q5();
		//设置后继
		$q1->setSuccessor($q2);
		$q2->setSuccessor($q3);
		$q3->setSuccessor($q4);
		$q4->setSuccessor($q5);		
		//生成处理器加载请求
		$LoadUp = new Request($this->queryNow);
		$q1->handleRequest($LoadUp);
	}
}
$MakeRequest = new Client();