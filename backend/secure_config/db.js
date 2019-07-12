const mongoose = require("mongoose");
const dbUrl = "mongodb://parthuest:SecureData@cluster0-shard-00-00-3dmhp.mongodb.net:27017,cluster0-shard-00-01-3dmhp.mongodb.net:27017,cluster0-shard-00-02-3dmhp.mongodb.net:27017/Studium?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect(dbUrl, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Mongodb Connected")
    }
})

mongoose.Promise = global.Promise