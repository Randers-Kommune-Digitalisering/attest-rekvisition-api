const Node = {
  "id": "3d80fcb793d070fe",
  "type": "template",
  "z": "4882205932e440ad",
  "name": "Forespørgsel ↓\\n Tilføj tilladt DQ-nummer",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 240,
  "wires": [
    [
      "9ec5f52b6641e5b8"
    ]
  ]
}

Node.template = `
INSERT INTO roller (brugerDQ, rolle) VALUES ('{{dq}}', 1)
`

module.exports = Node;