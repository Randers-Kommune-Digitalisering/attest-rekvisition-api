const Node = {
  "id": "a77dcd410dc495d8",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 1960,
  "wires": [
    [
      "d226d7864852a3f3"
    ]
  ]
}

Node.template = `
Her er en advisering af modtagelse
`

module.exports = Node;