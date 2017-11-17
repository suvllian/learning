<?php
$data = array('type'=>'jsonp');  
$callback = isset($_GET['callback']) ? trim($_GET['callback']) : '';    
echo $callback.'('.json_encode($data).')';