const Node = {
  "id": "875672e15b910122",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "cpr2",
      "pt": "msg",
      "to": "(cpr ~> $substring(0, 6)) & \"-\" & (cpr ~> $substring(6, 10)) ",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 330,
  "y": 2440,
  "wires": [
    [
      "3f7376519f11bffd"
    ]
  ]
}

module.exports = Node;