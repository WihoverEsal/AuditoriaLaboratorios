const mysql = require('mysql');

module.exports = () => {
    var con = mysql.createConnection({
        host: "localhost",//"https://databases.000webhost.com"
        user: "root", //"id8922267_victoresal"
        password: "victor1723",
        database: "Inspeccion",//"id8922267_inspeccion",
        port: "3306"
    });
    /*con.connect(function(err){
        if(err) throw err;
        console.log("conected!");        
    });*/

    /*var sql= "select * from news";
        con.query(sql, function(err, result){
            if (err) throw err;
            console.log(result);        
    });*/
    
    return con;    
}