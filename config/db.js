const mysql = require('mysql');

// إعداد معلومات الاتصال
const connection = mysql.createConnection({
  host: 'localhost', // اسم خادم قاعدة البيانات
  user: 'root', // اسم المستخدم
  password: '', // كلمة المرور
  database: 'cars' // اسم قاعدة البيانات
});

// إنشاء الاتصال
connection.connect((error) => {
  if (error) {
    console.error('حدث خطأ في الاتصال بقاعدة البيانات: ' + error.stack);
    return;
  }
  console.log('تم الاتصال بنجاح بقاعدة البيانات!');
});

// قم بتصدير الاتصال لاستخدامه في ملفات أخرى
module.exports = connection;