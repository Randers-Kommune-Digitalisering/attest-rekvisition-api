const Node = {
  "id": "7b95aa352086870f",
  "type": "change",
  "z": "4882205932e440ad",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload @ $res . {\t    \"dq_nr\": $res.brugerDQ,\t    \"rolle\": $res.rolle,\t    \"kan_bestille\": ($res.rolle = '1' or $res.rolle = '2')\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1100,
  "y": 80,
  "wires": [
    [
      "3b2ef6dd9b410f47"
    ]
  ]
}

module.exports = Node;