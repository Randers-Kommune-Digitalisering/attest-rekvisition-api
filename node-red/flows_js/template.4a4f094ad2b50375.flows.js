const Node = {
  "id": "4a4f094ad2b50375",
  "type": "template",
  "z": "4882205932e440ad",
  "name": "Forespørgsel ↓\\n Slet tilladt DQ-nummer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 320,
  "wires": [
    [
      "9ec5f52b6641e5b8"
    ]
  ]
}

Node.template = `
DELETE FROM roller WHERE brugerDQ = '{{dq}}'
`

module.exports = Node;