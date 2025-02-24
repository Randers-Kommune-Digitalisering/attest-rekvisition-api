const Node = {
  "id": "fa7d3412d5d4eb40",
  "type": "template",
  "z": "c6de71541d12d2dd",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 240,
  "wires": [
    [
      "26cc7c6ceb6080fa"
    ]
  ]
}

Node.template = `
Her er en tekst
`

module.exports = Node;