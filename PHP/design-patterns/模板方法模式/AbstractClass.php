<?php
//AbstractClass.php
abstract class AbstractClass
{
	protected $pix;
	protected $cap;

	public function templateMethod($PixNow,$CapNow)
	{
		$this->pix = $PixNow;
		$this->cap = $CapNow;
		$this->addPix($this->pix);
		$this->addCaption($this->cap);
	}

	abstract protected function addPix($pix);
	abstract protected function addCaption($cap);
}