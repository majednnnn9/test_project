const mysql = require('mysql');

// إعداد معلومات الاتصال
// const connection = mysql.createConnection({
//   host: 'boyjhxrxwfbza4rdyzm7-mysql.services.clever-cloud.com', // اسم خادم قاعدة البيانات
//   user: 'uqd5wvj9z0in3ysf', // اسم المستخدم
//   password: 'V1oRdmlpVok7s2qg2BZp', // كلمة المرور
//   database: 'boyjhxrxwfbza4rdyzm7' // اسم قاعدة البيانات
// });
const connection = mysql.createConnection({
    host: process.env.host, // اسم خادم قاعدة البيانات
    user: process.env.user, // اسم المستخدم
    password: process.env.password, // كلمة المرور
    database: process.env.database // اسم قاعدة البيانات
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