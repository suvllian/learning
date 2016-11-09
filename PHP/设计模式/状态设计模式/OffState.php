<?php
include_once("IState.php");
class Offstate implements IState
{
	private $context;

	public function __construct(Context $ContextNow)
	{
		$this->context = $ContextNow;
	}

	public function turnLightOn()
	{
		echo "Lights On<br/>";
		$this->context->setState($this->context->getOnState());
	}

	public function turnLightOff()
	{
		echo "Light is Already off;<br/>";
	}
}