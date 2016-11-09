<?php
include_once("IState.php");
class Onstate implements IState
{
	private $context;

	public function __construct(Context $ContextNow)
	{
		$this->context = $ContextNow;
	}

	public function turnLightOn()
	{
		echo "Light is Already on;<br/>";
	}

	public function turnLightOff()
	{
		echo "Lights Off<br/>";
		$this->context->setState($this->context->getOffState());
	}
}