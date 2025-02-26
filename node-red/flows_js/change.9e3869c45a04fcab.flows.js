const Node = {
  "id": "9e3869c45a04fcab",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"error\": \"payload must contain property attestType\"}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 955,
  "y": 180,
  "wires": [
    [
      "ea6a259f7aac435c"
    ]
  ],
  "l": false
}

module.exports = Node;