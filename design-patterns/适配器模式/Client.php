<?php
include_once("EuroAdapter.php");
include_once("DollarCalc.php");

class Client
{
	private $requestNow;
	private $dollarRequest;

	public function __construct()
	{
		$this->requestNow = new EuroAdapter();
		$this->dollarRequest = new DollarCalc();

		$euro = "&#8364;";

		echo "Euros:$euro".$this->makeAdapterRequest($this->requestNow)."<br/>";
		echo "Dollars: $".$this->makeDollarRequest($this->dollarRequest);
	}

	private function makeAdapterRequest(ITarget $request)
	{
		return $request->requestCalc(40,50);
	}

	private function makeDollarRequest(DollarCalc $request)
	{
		return $request->requestCalc(40,50);
	}
}

$Worker = new Client();