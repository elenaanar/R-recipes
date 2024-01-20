const {MongoClient} = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
connectToServer: function (callback) {
    client.connect().then(r => {
        _db = r.db("R'recipes");
        console.log("Successfully connected to MongoDB.");
    })
}
}
