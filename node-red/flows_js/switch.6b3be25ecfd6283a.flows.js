const Node = {
  "id": "6b3be25ecfd6283a",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "property": "payload.attestSubType",
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
  "x": 1190,
  "y": 120,
  "wires": [
    [
      "80309b300c37b7dc"
    ],
    [
      "abfba4dc51c1df81"
    ]
  ]
}

module.exports = Node;