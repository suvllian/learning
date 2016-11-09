<?php
include_once("OnState.php");
include_once("OffState.php");
class Context
{
	private $offState;
	private $onState;
	private $currentState;

	public function __construct()
	{
		$this->offState = new OffState($this);
		$this->onState = new OnState($this);
		$this->currentState = $this->offState;
	}

	public function turnOnLight()
	{
		$this->currentState->turnLightOn();
	}

	public function turnOffLight()
	{
		$this->currentState->turnLightOff();
	}

	public function setState(IState $state)
	{
		$this->currentState = $state;
	}

	public function getOnState()
	{
		return $this->onState;
	}

	public function getOffState()
	{
		return $this->offState;
	}
}