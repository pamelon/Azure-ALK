const sql = require('mssql');

module.exports = async function (context, req) {
    try {
        // Create a new SQL Server connection pool
        const pool = await sql.connect({
            user: '{User}',
            password: '{Password}',
            server: '{Server-Name}.database.windows.net',
            database: '{DB-Name}',
            encrypt: true
        });

        // Execute a SQL query
        const result = await pool.request().query('SELECT * FROM UserSchema.UserTable');

        // Log the query results
        context.log(result.recordset);

        // Close the connection pool
        await sql.close();

        // Return the query results
        context.res = {
            body: result.recordset
        };
    } catch (err) {
        // Log any errors
        context.log.error(err);

        // Return an error message
        context.res = {
            status: 500,
            body: "An error occurred while processing your request"
        };
    }
};
