var fs = require('fs')
var level = require('level')
var db = level(process.argv[2])
var batch = db.batch()


fs.readFile(process.argv[3], function(err, data){
    if (err) throw err
    var array = data.toString().split('\n')
    for (i in array){
        var obj = array[i].split(',')
        if (obj[0] === 'put'){
            batch.put(obj[1], obj[2])
        }
        else{
            batch.del(obj[1])
        }
    }
    batch.write()
})
