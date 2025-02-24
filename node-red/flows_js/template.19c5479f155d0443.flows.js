const Node = {
  "id": "19c5479f155d0443",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "826ac4afb5a7dcfc",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 670,
  "y": 1460,
  "wires": [
    [
      "c6c93833f1a4ed79"
    ]
  ]
}

Node.template = `
Her er en afvisning
`

module.exports = Node;