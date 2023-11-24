const mongoose = require('mongoose');
//const URI = 'mongodb://mongodb:27017/proyecto-final';
//const URI = 'mongodb://root:secret@mongodb:27017/proyecto-final';
const URI = 'mongodb://mongodb:27017,mongodb1:27018,mongodb2:27019/proyecto-final?replicaSet=myReplicaSet';
//const URI = 'mongodb+srv://rochadgps:DeTksWUEYf5V18Rt@cluster0.od6xiua.mongodb.net/';
//const URI = 'mongodb://localhost:27017/proyecto-final';
//const URI = 'mongodb://localhost:27017/proyecto-final';
//const URI = 'mongodb://root:admin@mongodb:27017/';
mongoose.connect(URI,{ useNewUrlParser: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))
module.exports = mongoose;