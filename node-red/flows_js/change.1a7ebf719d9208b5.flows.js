const Node = {
  "id": "1a7ebf719d9208b5",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"error\": \"payload must contain property medarbejderCPR\"}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 755,
  "y": 180,
  "wires": [
    [
      "88ca7aafba02df88"
    ]
  ],
  "l": false
}

module.exports = Node;