const sql = require('mssql');  

module.exports = async function (context, req) {  
    try {  
        const pool = await sql.connect(process.env['SQLConnectionString']);  
        const result = await pool.request().query('SELECT * FROM UserSchema.UserTable');  
        context.res = {  
            body: result.recordset  
        };  
    } catch (err) {  
        context.log(err);  
        context.res = {  
            status: 500,  
            body: "Error querying the database"  
        };  
    }  
};