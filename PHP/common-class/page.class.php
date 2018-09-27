<?php
//数据库封装类的路径
include_once("ConnectClient.php");
class Paging
{
	private $pageSize  = NULL;  //分页大小
	private $pageNow   = NULL;	//当前页数
	private $pageCount = NULL;	//总页数
	private $dataCount = NULL; 	//数据总数
	
	private $sqlHelper = NULL;	//数据库类对象
	private $condition = NULL;	//表查询的限制条件
	private $tableName = NULL; 	//表名
	private $result    = NULL;  //分页查询的结果

	private $firstUrl  = NULL;	//首页链接
	private $backUrl   = NULL;	//上一页链接
	private $nextUrl   = NULL;	//下一页链接
	private $lastUrl   = NULL;	//最后一页链接


	public function __construct($pageNow,$pageSize,$tableName,$condition=null)
	{
		$this->pageNow = $pageNow;
		$this->pageSize = $pageSize;
		$this->tableName = $tableName;
		$this->condition = $condition;

		$this->sqlHelper = new ConnectClient();

		$this->setPageCount();
		$this->setArrayList(); 
	}

	//得到总页数
	private function setPageCount()
	{
		$sql = "SELECT COUNT(*) FROM ".$this->tableName;
		$dataCount = $this->sqlHelper->query($sql);
		$this->dataCount = $dataCount;
		$this->pageCount = ceil($dataCount[0][0] / $this->pageSize);
	}

	//设置每一页中显示的数据
	private function setArrayList()
	{
		$sql = "SELECT * FROM ".$this->tableName." ".$this->condition." LIMIT ".($this->pageSize * ($this->pageNow - 1)).",".$this->pageSize;
 
        $this->result = $this->sqlHelper->query($sql);
	}

	//返回结果集
	public function getArrayList()
	{
		return $this->result;
	}
	//得到总页数
	public function getPageCount()
	{
		return $this->pageCount;
	}
	//得到分页大小
	public function getPageSize()
	{
		return $this->pageSize;
	}
	//得到当前页数
	public function getPageNow()
	{
		return $this->pageNow;
	}
	//得到总数据数量
	public function getDataCount()
	{
		return $this->dataCount;
	}


	public function getPageHTML($url,$numCount,$condent)
	{
		//分页块的开头
		$pageDivStart = '<div class="text-center">'."\r\n".'<ul>'."\r\n";
		//分页块中间部分
		$pageDivContent = "";
		//分页块的结尾
		$pageDivEnd = '</ul>'."\r\n".'</div>'."\r\n";
		//显示页面信息
		$pageInfo = "<span>第".$this->pageNow."页 / 共".$this->pageCount."页</span>";
		//页面跳转
        //$pageGo = '<span>跳至<input type="text" name="pageNow" />页<input type="submit" value="GO" /></span>';
        $pageGo = '';

		//当前页为首页 
		if($this->pageNow==1)
		{
			$this->firstUrl = '<span>首页</span>';
            $this->backUrl = '<span>上一页</span>';
        }else{
            $this->firstUrl = '<span><a href="'.$url.'?pageNow=1'.$condent.'">首页</a></span>';
            $this->backUrl = '<span><a href="'.$url.'?pageNow='.($this->pageNow - 1). $condent . '">上一页</a></span>';
        }

		//当前页为最后一页
		if($this->pageNow == $this->pageCount){
		    $this->lastUrl = '<span>尾页</span>';
            $this->nextUrl = '<span>下一页</span>';
        }else{
            $this->lastUrl = '<span><a href="'.$url.'?pageNow='.$this->pageCount.$condent.'">尾页</a></span>';
            $this->nextUrl = '<span><a href="'.$url.'?pageNow='.($this->pageNow +1 ).$condent.'">下一页</a></span>';
        }

		$mindPage = floor($numCount / 2);
		 
		for($i = $this->pageNow - $mindPage; $i <= $this->pageNow + $mindPage; $i++){
		    if($i < 10 || $i > $this->pageCount)
		        continue;
		    if($i == $this->pageNow){
		        $pageDivContent .= ('<span>'. $i . '</span>');
		    } else {
		        $pageDivContent .= ('<span><a href="' . $url . '?pageNow=' . $i . $condent . '">' . $i . '</a></span>');
		    }
		}

		//最终的效果
        $html = $pageDivStart .$this->firstUrl.$this->backUrl.$pageDivContent.$this->nextUrl.$this->lastUrl. $pageGo. $pageInfo. $pageDivEnd;
         
        return $html;
	}
}