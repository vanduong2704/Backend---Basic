import pool from "../config/connectDB"
let getHomepage = async (req, res) => {
    //logic 
    // A simple SELECT query
    let data = [];
    // connection.query(
    //     'SELECT * FROM `users` ',
    //     function (err, results, fields) {
    //         // results contains rows returned by server
    //         results.map((row) => {
    //             data.push({
    //                 id: row.id,
    //                 email: row.email,
    //                 address: row.address,
    //                 firstName: row.firstName,
    //                 lastName: row.lastName
    //             })
    //         });
    //         console.log('>>>> data inside:', data)
    //     });
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' });
    console.log(">>>> check row,", rows);
}
let getDetailPage = async (req,res) => {
    let userId = req.params.id;
    let [users] = await pool.execute(`select * from users where id = ?`,[userId]);
    return res.send(JSON.stringify(users));
}
module.exports = {
    getHomepage,getDetailPage
}