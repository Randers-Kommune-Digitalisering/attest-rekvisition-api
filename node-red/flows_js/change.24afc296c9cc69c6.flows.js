const Node = {
  "id": "24afc296c9cc69c6",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "a28adbce8cf5e836",
  "name": "Set metric db_write",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "error ~> $exists() ? \"error\" : \"success\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "table_name",
      "pt": "msg",
      "to": "tablename ~> $exists() ? tablename",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 530,
  "y": 360,
  "wires": [
    [
      "21f00b554f1af7f6"
    ]
  ]
}

module.exports = Node;