const Node = {
  "id": "7727ab903dbee934",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "cpr",
      "pt": "msg",
      "to": "cpr ~> $replace(\"-\", \"\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 2440,
  "wires": [
    [
      "3f7376519f11bffd"
    ]
  ]
}

module.exports = Node;