const Node = {
  "id": "802ea9c84898c144",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
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
  "outputs": 2,
  "x": 390,
  "y": 120,
  "wires": [
    [
      "1a99e08ccc5b36a4"
    ],
    [
      "17c1fa0819a71d63"
    ]
  ]
}

module.exports = Node;