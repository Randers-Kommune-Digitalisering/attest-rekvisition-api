const Node = {
  "id": "1a99e08ccc5b36a4",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "property": "payload.sagsbehandler",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 590,
  "y": 120,
  "wires": [
    [
      "60b74f5255a47b48"
    ],
    [
      "9c588fdffaa7d729"
    ]
  ]
}

module.exports = Node;