<?php
class Client
{
	public function insertData()
	{
		$context = new Context(new DataEntry());
		$context->algorithm();
	}

	public function findData()
	{
		$context = new Context(new DataSearch());
		$context->algorithm();
	}

	public function showAll()
	{
		$context = new Context(new DataDisplay());
		$context->algorithm();
	}

	public function changeData()
	{
		$context = new Context(new DataUpdate());
		$context->algorithm();
	}

	public function Killer()
	{
		$context = new Context(new DataDelete());
		$context->algorithm();
	}
}
