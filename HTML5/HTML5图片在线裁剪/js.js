define(function(require,exports,module){
	'use strict';

	var postFile = {
		init:function(options){
			var t = this;
            t.regional = document.getElementById('label');
            t.getImage = document.getElementById('get_image');
            t.clipPic = document.getElementById('edit_pic');
            t.coverBox = document.getElementById('cover_box');
            t.achieve = document.getElementById('show_edit');
            
            t.clipPos = options.clipPos;

            t.bgPagePos = {
            	x:0,
            	y:0,
            	height:0,
            	width:0
            };

            document.getElementById("post_file").addEventListener("change",
            	t.handleFiles,false);

            document.getElementById("save_button").onclick = function(){
            	//绘制裁剪后的图形
            	t.clipPic.height = t.clipPos.height;
            	t.clipPic.width = t.clipPos.width;

            	var myCanvas = t.clipPic.getContext('2d');
            	var image = new Image();
            	image.src = t.imgUrl;

            	image.onload = function(){
            		myCanvas.drawImage(image,t.clipPos.x, t.clipPos.y, t.clipPos.height, t.clipPos.width, 
            			0, 0, t.clipPos.height, t.clipPos.width);
            	
            		document.getElementById('show_pic').getElementsByTagName('img')[0].src = t.clipPic.toDataURL();

            	}
            };
             t.drag();
		},

		handleFiles:function(){
			var fileList = this.files[0];
                  var oFReader = new FileReader();
                  //读取文件内容
                  oFReader.readAsDataURL(fileList);

                  oFReader.onload = function(event){
                        //把预览图片URL传给函数
                        postFile.paintImage(event.target.result);
                  };
		},

            paintImage:function(url){
                  var t = this;

                  var createCanvas = t.getImage.getContext("2d");
                  var img = new Image();
                  img.src = url;

                  img.onload = function(){
                      //等比例缩放图片(如果图片宽高都比容器小，则绘制的图片宽高 = 原图片的宽高。)
                      //如果图片的宽度或者高度比容器大，则宽度或者高度 = 容器的宽度或者高度，另一高度或者宽度则等比例缩放

                      //t.bgPagePos.width：绘制后图片的宽度;
                      //t.bgPagePos.height：绘制后图片的高度;
                      //t.bgPagePos.x：绘制后图片的X轴;
                      //t.bgPagePos.y：绘制后图片的Y轴
                      if(img.width<t.regional.offsetWidth&&img.height<t.regional.offsetWidth){
                          t.bgPagePos.width = img.width;
                          t.bgPagePos.height = img.height;
                      } else {
                          var pWidth = img.width / (img.height / t.regional.offsetHeight);
                          var pHeight = img.height / (img.width / t.regional.offsetWidth);

                          t.bgPagePos.width = img.width > img.height ? t.regional.offsetWidth : pWidth;
                          t.bgPagePos.height = img.height > img.width ? t.regional.offsetHeight : pHeight;
                      }

                      //图片的坐标
                      t.bgPagePos.x = (t.regional.offsetWidth - t.bgPagePos.width) / 2 + 'px';
                      t.bgPagePos.y = (t.regional.offsetHeight - t.bgPagePos.height) / 2 + 'px';
                      
                      t.getImage.height = t.bgPagePos.height;
                      t.getImage.width = t.bgPagePos.width;
                      t.getImage.style.left = t.bgPagePos.x;
                      t.getImage.style.top = t.bgPagePos.y;

                      createCanvas.drawImage(img,0,0,t.bgPagePos.width,t.bgPagePos.height);//没用直接插入背景图片而用canvas绘制图片，是为了调整所需框内图片的大小
                      
                      t.imgUrl = t.getImage.toDataURL();//储存canvas绘制的图片地址

                      t.clipImg();
                  }
            },

            clipImg:function(){
                  var t = this;

                  //绘制遮罩层：
                  t.coverBox.height = t.bgPagePos.height;
                  t.coverBox.width = t.bgPagePos.width;
                  t.coverBox.style.display = 'block';
                  t.coverBox.style.left = t.bgPagePos.x;
                  t.coverBox.style.top = t.bgPagePos.y;

                  var cover = t.coverBox.getContext("2d");
                  cover.fillStyle = "rgba(0, 0, 0, 0.5)";
                  cover.fillRect (0,0, t.bgPagePos.width, t.bgPagePos.height);
                  cover.clearRect(t.clipPos.x, t.clipPos.y, t.clipPos.height, t.clipPos.width);

                  t.achieve.style.background = 'url(' + t.imgUrl + ')' + -t.clipPos.x + 'px ' + -t.clipPos.y + 'px no-repeat';
                  t.achieve.style.height = t.clipPos.height + 'px';
                  t.achieve.style.width = t.clipPos.width + 'px';
            },

            drag: function() {
                  var t = this;
                  var draging = false;
                  var _startPos = null;

                  t.coverBox.onmousemove = function(e) {
                      e = e || window.event;

                      if ( e.pageX == null && e.clientX !=  null ) {

                          var doc = document.documentElement, body = document.body;

                          e.pageX = e.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft  || body && body.clientLeft || 0);
                          e.pageY = e.clientY + (doc && doc.scrollTop  ||  body && body.scrollTop);
                      }

                      //获取鼠标到背景图片的距离
                      var _mousePos = {
                          left: e.pageX - ( t.regional.offsetLeft + this.offsetLeft ),
                          top: e.pageY - ( t.regional.offsetTop + this.offsetTop )
                      }

                      //判断鼠标是否在裁剪区域里面：
                      if ( _mousePos.left > t.clipPos.x && _mousePos.left < t.clipPos.x + t.clipPos.width && _mousePos.top > t.clipPos.y && _mousePos.top < t.clipPos.y + t.clipPos.height ) {
                          this.style.cursor = 'move';
                          
                          this.onmousedown = function(){
                              draging = true;
                              //记录上一次截图的坐标
                              t.ex = t.clipPos.x; 
                              t.ey = t.clipPos.y;

                              //记录鼠标按下时候的坐标
                              _startPos = {
                                  left: e.pageX - ( t.regional.offsetLeft + this.offsetLeft ),
                                  top: e.pageY - ( t.regional.offsetTop + this.offsetTop )
                              }
                          }

                          if (draging) {
                              //移动时裁剪区域的坐标 = 上次记录的定位 + (当前鼠标的位置 - 按下鼠标的位置)，裁剪区域不能超出遮罩层的区域;
                              if ( t.ex + ( _mousePos.left - _startPos.left ) < 0 ) {
                                  t.clipPos.x = 0;
                              } else if ( t.ex + ( _mousePos.left - _startPos.left ) + t.clipPos.width > t.bgPagePos.width ) {
                                  t.clipPos.x = t.bgPagePos.width - t.clipPos.width;
                              } else {
                                  t.clipPos.x = t.ex + ( _mousePos.left - _startPos.left );
                              };

                              if (t.ey + ( _mousePos.top - _startPos.top ) < 0) {
                                  t.clipPos.y = 0;
                              } else if ( t.ey + ( _mousePos.top - _startPos.top ) + t.clipPos.height > t.bgPagePos.height ) {
                                  t.clipPos.y = t.bgPagePos.height - t.clipPos.height;
                              } else {
                                  t.clipPos.y = t.ey + ( _mousePos.top - _startPos.top );
                              }

                              t.clipImg();
                          }

                          document.body.onmouseup = function() {
                              draging = false;
                              document.onmousemove = null;
                              document.onmouseup = null;
                          }
                      } else{
                          this.style.cursor = 'auto';
                      }
                  };
              }

	     }
      return postFile;
});