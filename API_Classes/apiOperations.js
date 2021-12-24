const Topology=require('./Toplogy.js');
const fs=require('fs');
const { stringify } = require('querystring');
const e = require('express');



class API{
    constructor(){
        this.topologies=[];
       
    }
    
    //Read the toplogy
    readTopology(topologyId,){
    let contents="";
    
    try {
        contents=JSON.parse(fs.readFileSync(`${topologyId}.json`,"utf-8"));
        
        this.topologies.push(new Topology.Topology(topologyId,contents['components']));
    } catch (error) {
        console.log(error);
        contents='err';
    }
    return contents;
    }
    
    //Query the whole list of topologies
    queryTopologies(){
        return this.topologies;
    }

   //Query all the components with the topologyId
    queryDevicesByTopologyId(topologyId){
        const topology=this.topologies.filter(top => top['id'] === topologyId);
        if(topology.length !== 0){
            return topology[0]["components"];
        }else{
            return false;
        }
    }


    //Write toplogies
    writeTopology(topologyId){
       
        const toplogy = this.topologies.filter(top => top['id'] === topologyId);
        let created=true;
        if (toplogy.length!==0){
            fs.writeFile(`${topologyId}.json`, JSON.stringify(toplogy[0]), (err) => {
              if (err !== null) {
                created = false;
              }
            });
        }else{
            created =false;
        }
        return created
    }


    //Delete any topology
    deleteTopology(topologyId){
        try {
            this.topologies=this.topologies.filter(top => top['id']!== topologyId);
            return true;
        } catch (error) {
            return false;
        }
    }

    //Query device with the netlist node id
    queryDevicesWithNetListNodes(topologyId,netId){
        let contents=[];
        const toplogy=this.topologies.filter(top => top['id'] === topologyId);
        
        if(toplogy.length===0){
            
            return [];
        }
        const components=toplogy[0]['components'];
        for(var component of components){
            if(component.hasNetlistNode(netId)){
                
                contents.push(component);
            }
        }
        return contents;
    }
    
}

module.exports={
    API
};
