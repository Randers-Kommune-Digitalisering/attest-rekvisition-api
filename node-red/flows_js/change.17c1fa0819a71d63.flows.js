const Node = {
  "id": "17c1fa0819a71d63",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"error\": \"payload must be an JSON object\"}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 355,
  "y": 180,
  "wires": [
    [
      "5d01519eb651a115"
    ]
  ],
  "l": false
}

module.exports = Node;