//Topology class to handle the topology structure
const componentsModule=require('./Component.js');

class Topology{
    constructor(id,componentsJSON){
        this.id=id;
        this.components=[];
        this.addComponents(componentsJSON);
    }

//This function adds components to the topology, with the format defined below 
 addComponents(componentsJSON){
     for (var component of componentsJSON){
         let parametersNode=Object.keys(component).filter(key => key != 'type' && key != 'netlist' && key!= 'id');
             this.components.push(
               new componentsModule.Component(
                 component["type"],
                 component["id"],
                 component["netlist"],
                 component[parametersNode],
                 parametersNode
               )
             );
         
     }
 }
 
}

module.exports={
    Topology
};