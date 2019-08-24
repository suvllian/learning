<?php
//ConcreteClass.php
include_once("AbstractClass.php");
class ConcreteClass extends AbstractClass
{
	protected function addPix($pix)
	{
		$this->pix = $pix;
		$this->pix = "".$this->pix;
		$formatter = "<img src=$this->pix><br/>";
		echo $formatter;
	}

	protected function addCaption($cap)
	{
		$this->cap = $cap;
		echo "<em>Caption:</em>".$this->cap."<br/>";
	}
}
