const Node = {
  "id": "bd7544f8ca7e758b",
  "type": "template",
  "z": "4882205932e440ad",
  "name": "Forespørgsel ↓\\n Hent tilladte DQ-numre",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 160,
  "wires": [
    [
      "f7e51ccd8fb9026f"
    ]
  ]
}

Node.template = `
SELECT * FROM roller
`

module.exports = Node;