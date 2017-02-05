#在gulp中使用babel将ES6转换成ES5 
###一、安装npm  

###二、安装gulp  
``` bash  
npm install gulp --save
```  
###三、安装gulp插件  
``` bash  
npm install gulp-babel babel-preset-es2015 --save-dev
```     

一定要安装babel-preset-es2015插件，这样才能编译ES2015.   
本示例中的package.json文件已经配置好。直接命令行下输入“npm install”即可安装。  
 
###四、在项目根目录创建并配置gulpfile.js  
>  详见gulpfile.js文件  
 
###五、命令行输入“gulp”开始编译