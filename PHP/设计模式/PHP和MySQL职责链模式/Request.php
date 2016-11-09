<?php
class Request
{
	private $Value;

	public function __construct($service)
	{
		$this->Value = $service;
	}

	public function getService()
	{
		return $this->Value;
	}
}