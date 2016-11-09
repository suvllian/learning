<?php
//文件名Decorator.php
//功能是维护组件接口IComponment的一个引用
include_once("IComponment.php");
abstract class Decorator extends IComponment
{
	public function getSite(){}
	public function getPrice(){}
}
