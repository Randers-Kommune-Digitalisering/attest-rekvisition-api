const Node = {
  "id": "75ae852e13e1dae8",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "Adviseret?",
  "rules": [
    {
      "t": "set",
      "p": "erAdviseret",
      "pt": "msg",
      "to": "payload.success = true ? 1 : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "adviseretAt",
      "pt": "msg",
      "to": "erAdviseret = 1 ? \"CURRENT_TIMESTAMP\" : \"\\\"0000-00-00 00:00:00\\\"\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "bestillinger",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 2180,
  "wires": [
    [
      "516113c348ac2de9"
    ]
  ]
}

module.exports = Node;