const Node = {
  "id": "1ea258bc444412f2",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "531b564a907d7e8f",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.sql",
      "pt": "msg",
      "to": "sql",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "stdout.affectedRows",
      "pt": "msg",
      "to": "payload.affectedRows ? payload.affectedRows : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "error ~> $exists() ? false : true",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "error ~> $exists() ? error.message",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 260,
  "wires": [
    [
      "7249a5f746f93ec8"
    ]
  ]
}

module.exports = Node;