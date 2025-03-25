const Node = {
  "id": "97eac29788f66770",
  "type": "switch",
  "z": "98a8094ba7824c7e",
  "name": "error?",
  "property": "error",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 280,
  "y": 180,
  "wires": [
    [
      "972dd5ca73e323e9"
    ]
  ]
}

module.exports = Node;