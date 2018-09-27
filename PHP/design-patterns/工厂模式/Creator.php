<?php
abstract class Creator
{
	protected abstract function factoryMethod();

	public function startFactory()
	{
		$FactoryMethod = $this->factoryMethod();
		return $FactoryMethod;
	}
}
?>