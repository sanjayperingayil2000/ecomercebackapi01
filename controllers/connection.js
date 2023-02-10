const {MongoClient} = require("mongodb");

const url="mongodb+srv://sanjaypp:sanjaypp@cluster0.0xwmmcg.mongodb.net/ecommerce01?retryWrites=true&w=majority"

const client= new MongoClient(url);

const findAllFromDb = async (collectionName) => {
    try {
        await client.connect();
        console.log("connection succesfull to db")
        const database = client.db("ecommerce01");
        const collection = database.collection(collectionName);
        const dbResponse = await collection.find().toArray();
        // console.log("db response",dbResponse)
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message;
    }
}

module.exports={findAllFromDb}