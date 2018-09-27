<?php
include_once("IStrategy.php");
class Context
{
	private $strategy;

	public function __construct(IStrategy $strategy)
	{
		$this->strategy = $strategy;
	}

	public function algorithm()
	{
		$this->strategy->algorithm();
	}
}