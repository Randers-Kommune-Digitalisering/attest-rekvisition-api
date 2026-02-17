const Node = {
  "id": "13f6927e1fd832bb",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "a28adbce8cf5e836",
  "name": "Set metric db_read",
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
  "y": 440,
  "wires": [
    [
      "abec6b880972dbe4"
    ]
  ]
}

module.exports = Node;