const Node = {
  "id": "60b74f5255a47b48",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "property": "payload.medarbejderCPR",
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
  "x": 790,
  "y": 120,
  "wires": [
    [
      "37ba7e2eaeee1129"
    ],
    [
      "1a7ebf719d9208b5"
    ]
  ]
}

module.exports = Node;