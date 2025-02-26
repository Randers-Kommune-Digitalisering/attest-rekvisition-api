const Node = {
  "id": "abfba4dc51c1df81",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"error\": \"payload must contain property attestSubType\"}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1155,
  "y": 180,
  "wires": [
    [
      "2d52c1af2c645535"
    ]
  ],
  "l": false
}

module.exports = Node;