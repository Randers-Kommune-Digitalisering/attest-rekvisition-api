const Node = {
  "id": "c7fd48929788f956",
  "type": "change",
  "z": "4882205932e440ad",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"error\": \"Der opstod en fejl\", \"message\": msg.error}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1300,
  "y": 120,
  "wires": [
    [
      "57ec9d572fd9f2ab"
    ]
  ]
}

module.exports = Node;