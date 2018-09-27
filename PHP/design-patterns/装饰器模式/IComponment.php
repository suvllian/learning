<?php
//文件名IComponment.php
abstract class IComponment
{
	protected $site;
	abstract public function getSite();
	abstract public function getPrice(); 
}