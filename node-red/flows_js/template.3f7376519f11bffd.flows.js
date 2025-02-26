const Node = {
  "id": "3f7376519f11bffd",
  "type": "template",
  "z": "c715449c21b1a61f",
  "name": "Forespørgsel ↓\\n Opdater bestilling i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 550,
  "y": 2440,
  "wires": [
    [
      "e7a8158b0f9bdc4c",
      "977ca975fa241d5f"
    ]
  ]
}

Node.template = `
DELETE FROM
    bestillinger
WHERE 
    cpr = '{{{cpr}}}'
OR  cpr = '{{cpr2}}'
`

module.exports = Node;