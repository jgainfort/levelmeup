var level = require('level')
var db = level(process.argv[2])

function getValue(n){
    var key = 'key' + n
    db.get(key, function(err, value){
        if (err) {
            if (!err.notFound) throw err
        } else console.log(key + '=' + value)

        if (n < 100) getValue(n+1)
    })
}

getValue(0)
