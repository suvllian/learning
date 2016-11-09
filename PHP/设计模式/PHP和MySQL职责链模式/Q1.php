<?php
class Q1 extends Handler 
{
	public function setSuccessor($nextService)
	{
		$this->successor = $nextService;
	}

	public function handleRequest($request)
	{
		$this->handle = "q1";
		if($request->getService()==$this->handle)
		{
			//进行处理
		}elseif($this->successor!=NULL)
		{
			$this->successor->handleRequest($request);
		}
	}
}