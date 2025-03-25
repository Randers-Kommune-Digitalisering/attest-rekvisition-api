const Node = {
  "id": "512e45ee00186d53",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "a28adbce8cf5e836",
  "name": "Set metric db_write_rows",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.affectedRows",
      "tot": "jsonata"
    },
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
  "x": 550,
  "y": 400,
  "wires": [
    [
      "fd5e271d594e6174"
    ]
  ]
}

module.exports = Node;