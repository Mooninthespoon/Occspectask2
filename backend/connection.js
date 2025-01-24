import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URL||"";
const client = new MongoClient(uri, {
    serverApi:{
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors: true,
    },
});

try{
    await client.connect();

    await client.db("rigetzooadventures")
} catch(err){
    console.error(err);
}

let db = client.db("rigetzooadventures")

export default db;

