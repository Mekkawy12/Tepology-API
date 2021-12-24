const API=require('./API_Classes/apiOperations.js');
const express=require('express');
const bodyParser=require('body-parser')

const api=new API.API();
const app=express();


app.use(bodyParser.json());

//Read the topology
app.get('/api/:id.json',(req,res)=>{
   const contents=api.readTopology(req.params["id"]);
   if(contents==='err'){
        res.status(404).send();
   }else{
       res.send(contents);
   }
   
});

//Read all topologies
app.get('/api/topologies',(req,res)=>{
    const contents=api.queryTopologies();
    res.send(contents);
});


//Delete topology
app.delete('/api/:topoId',(req,res)=>{
  const deleted=api.deleteTopology(req.params['topoId']);
  res.send(deleted);
});


//Get components by topology id
app.get('/api/devices/:tepoId',(req,res)=>{
     const contents = api.queryDevicesByTopologyId(req.params["tepoId"]);
     if (contents === false) {
       res.status(404).send();
     } else {
       res.send({components:contents});
     }
});

//Get Topology by netlist id
app.get('/api/:topoId/:netId',(req,res)=>{
    const components = api.queryDevicesWithNetListNodes(
      req.params["topoId"],
      req.params["netId"]
    );
    res.send(components);
});

//Write a topology
app.post('/api/:tepoId',(req,res)=>{
    
    const created=api.writeTopology(req.params['tepoId']);
    if(created){
        res.send(created);
    }else{
        res.send(created);
    }
    
});

const port= process.env.PORT || 8080;
app.listen(port,()=> console.log(`Listening on port ${port}`));