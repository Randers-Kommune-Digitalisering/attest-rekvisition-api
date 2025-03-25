const Node = {
  "id": "973960952916811a",
  "type": "change",
  "z": "4882205932e440ad",
  "name": "Afvist?",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0]",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload.erAfvist",
      "pt": "msg",
      "to": "dq in payload.brugerDQ = false ? 1 : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "afvistAt",
      "pt": "msg",
      "to": "erAfvist = 1 ? \"CURRENT_TIMESTAMP\" : \"\\\"0000-00-00 00:00:00\\\"\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 80,
  "wires": [
    [
      "3b2ef6dd9b410f47"
    ]
  ]
}

module.exports = Node;