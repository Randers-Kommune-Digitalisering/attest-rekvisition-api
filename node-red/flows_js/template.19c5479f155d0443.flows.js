const Node = {
  "id": "19c5479f155d0443",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 2020,
  "wires": [
    [
      "d226d7864852a3f3"
    ]
  ]
}

Node.template = `
Hej {{bestilling.rekvirentNavn}},

Din bestilling af en eller flere attester på {{bestilling.rekvisitusCpr}}-XXXX er blevet afvist pga. manglende rolle.

Kontakt Personale og HR hvis du mener der er tale om en fejl.
`

module.exports = Node;