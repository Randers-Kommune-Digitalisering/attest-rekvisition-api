const Node = {
  "id": "37ba7e2eaeee1129",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "property": "payload.attestType",
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
  "x": 990,
  "y": 120,
  "wires": [
    [
      "6b3be25ecfd6283a"
    ],
    [
      "9e3869c45a04fcab"
    ]
  ]
}

module.exports = Node;