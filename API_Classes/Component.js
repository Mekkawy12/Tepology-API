//Componentls class to handle the topology structure
class Component {
  constructor(type, id, netlist, additionalParameters, parametersNode) {
    this["type"] = type;
    this["id"] = id;
    this[parametersNode] = additionalParameters;
    this["netlist"] = netlist;
  }

  //This function is for knowing if the component has a netlist node with the netlistNodeId
  hasNetlistNode(netlistNodeId) {
    let keys = Object.keys(this["netlist"]);
    for (var key of keys) {
      if (this["netlist"][key] == netlistNodeId) {
        return true;
      }
    }
    return false;
  }
}

module.exports = {
  Component,
};
