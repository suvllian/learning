const excel =  require('exceljs')
const workbook = new excel.Workbook()

// 设置工作簿属性
workbook.created = new Date();
workbook.modified = new Date();

// 为工作簿添加工作表
const sheet = workbook.addWorksheet("测试导出表");

// 设置表格属性
sheet.properties.defaultRowHeight = 25;
sheet.properties.showGridLines = false;

// 设置列
sheet.columns = [
  { header: "编号", key: "id", width: 25 },
  { header: "姓名", key: "name", width: 30 },
  { header: "年龄", key: "age", width: 30 },
  { header: "性别", key: "gender", width: 30 }
]

// 添加数据
sheet.addRow({ id: 1, name: "小明", age: 26, gender: "男" });
sheet.addRow({ id: 2, name: "小红", age: 27, gender: "女" });
sheet.addRow({ id: 3, name: "小话", age: 25, gender: "男" });

// 输出
const filepath = "./" + Date.now() + '.xlsx';
workbook.xlsx.writeFile(filepath).then(() => {
  console.log("download over.");
}).catch(err => {
  console.log("download error.", err)
})