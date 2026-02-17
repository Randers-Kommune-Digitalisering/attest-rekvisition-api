const Node = {
  "id": "1ca23aa8b13f51e1",
  "type": "change",
  "z": "98a8094ba7824c7e",
  "g": "02d5b2578d868026",
  "name": "clean",
  "rules": [
    {
      "t": "delete",
      "p": "host",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "port",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "database",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "username",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "password",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 100,
  "wires": [
    [
      "e3eb6d47750f5b15"
    ]
  ]
}

module.exports = Node;