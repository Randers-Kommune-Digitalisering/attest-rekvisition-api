const Node = {
  "id": "e3eb6d47750f5b15",
  "type": "switch",
  "z": "98a8094ba7824c7e",
  "name": "is JSON?",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "json",
      "vt": "json"
    },
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 720,
  "y": 100,
  "wires": [
    [
      "595f1a3e977540d4"
    ],
    [
      "8c2241ff79a09a15"
    ],
    [
      "1bbf9ae214b9383a"
    ]
  ]
}

module.exports = Node;