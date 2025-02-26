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
  "x": 530,
  "y": 2440,
  "wires": [
    [
      "e7a8158b0f9bdc4c"
    ]
  ]
}

Node.template = `
DELETE FROM
    bestillinger
WHERE 
    cpr = '{{cpr}}'
`

module.exports = Node;