## Node导入导出excel

## 一、调研需求

* Node/egg适用
* 导出的Excel样式可定制（模板化）
* 导出的Excel可以通过公式进行数据计算（如对列求和等）

## 二、现有解决方案

* [node-xlsx](https://github.com/mgcrea/node-xlsx)：简单的解析和导出，仅支持xlsx格式文件。
* [exceljs](https://github.com/guyonroche/exceljs#readme)：功能完善，支持解析和导出excel，但不支持模板化。
* [ejsExcel](https://github.com/sail-sail/ejsExcel)：支持定制模板(类似ejs模板)，支持对数据进行计算，支持复杂导出，功能齐全。
* [xlsx-template](https://github.com/optilude/xlsx-template)：支持定制模板，但不支持对数据进行计算。
* [js-xlsx](https://github.com/SheetJS/js-xlsx)：支持解析多种格式表格，还能解析html中的table，功能强大，支持将表格转换成txt、html、json等形式。

## 三、API and Basic usage

### 3.1 ejsExcel

[basic usage](./ejs-excel)

支持复杂导出，功能齐全，可读取excel模板(类似ejs)，根据模板导出，导出的Excel可以通过公式进行数据计算。**满足需求**

#### getExcelArr(buffer)
读取excel数据

``` javascript
const ejsExcel = require("ejsExcel");
const fs = require("fs");
// 获得Excel模板的buffer对象
const exlBuf = fs.readFileSync("./index.xlsx");

// getExcelArr 返回Promise对象
ejsExcel.getExcelArr(exlBuf).then(function(exlJson) {
	console.log(exlJson);
}).catch(function(err){
	console.error(err);
});
```

#### renderExcel(buffer, data)
将数据渲染到模板中

``` javascript
const ejsexcel = require("ejsExcel");
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

(async function() {
	// 获得Excel模板的buffer对象
	const exlBuf = await readFileAsync("./template.xlsx");
	// 数据源
	const data = [
		[{"dpt_des":"开发部","doc_dt":"2013-09-09","doc":"a001"}],
		[
			{"pt":"pt1","des":"des1","due_dt":"2013-08-07","des2":"2013-12-07"},
			{"pt":"pt1","des":"des1","due_dt":"2013-09-14","des2":"des21"}
		]
	]
	
	// 用数据源(对象)data渲染Excel模板
	const exlBuf2 = await ejsexcel.renderExcel(exlBuf, data);
	
	await writeFileAsync("./test20.xlsx", exlBuf2);
	console.log("生成test20.xlsx");

})();

```

### 3.2 node-xlsx

[basic usage](./node-xlsx)

该工具库仅提供`parse`和`build`两个API，支持简单的解析和导出，仅支持xlsx格式文件。

### 3.3 exceljs
[basic usage](./exceljs)

功能完善，文档简单，不支持模板。

### 3.4 js-xlsx

## 四、结论
* 简单的excel读取和导出使用node-xlsx
* 模板化excel导出使用xlsx-template、ejsexcel
* 复杂的excel导出使用js-xlsx、ejsexcel，PMS开发中推荐使用ejsexcel
