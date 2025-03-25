const Node = {
  "id": "1779e20742616eb2",
  "type": "template",
  "z": "4882205932e440ad",
  "name": "Forespørgsel ↓\\n Hent tilladt DQ-numre",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 100,
  "wires": [
    [
      "63aa68b5a39864f9"
    ]
  ]
}

Node.template = `
SELECT * FROM roller WHERE brugerDQ = '{{dq}}'
`

module.exports = Node;