const mysql = require('mysql2')
const { rootCertificates } = require('tls')

const pool = mysql.createPool({
    host:'192.168.29.46',
    user:'root',
    password:'root',
    database:'ecommercedb',
    connectionLimit:20

})

module.exports=pool