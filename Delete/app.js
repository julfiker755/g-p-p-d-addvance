const express = require('express')
const app = express()
const port = process.env.PORT || 2020
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
var cors = require('cors')


// middleware boss
app.use(cors())
app.use(express.json())
// pratic //HRiaLaGC3ReB5qxM
const uri = "mongodb+srv://pratic:HRiaLaGC3ReB5qxM@cluster0.cfrtdkt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true,deprecationErrors: true,}});

async function run() {
  try {
    const database = client.db("All").collection("data");
    app.get('/product',async(req,res)=>{
      const result=await database.find({}).toArray()
      res.send(result)
    })
    app.delete('/productdelete/:id',async(req,res)=>{
      const id=req.params.id
      const query={_id:new ObjectId(id)}
      const options = {
        projection: { _id: 0,name:1},
      };
      const result=await database.deleteOne(query,options)
      if(result.deletedCount > 0){
        res.send({
          success:true,
          message:'Your product removed'
        })
      }else{
        res.send({
          success:false,
          message:'Your user not removed'
        })
      }
      
    })

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})