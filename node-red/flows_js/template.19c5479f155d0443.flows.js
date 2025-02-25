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
  "y": 1500,
  "wires": [
    [
      "c6c93833f1a4ed79"
    ]
  ]
}

Node.template = `
Hej {{bestilling.rekvirentNavn}},

Din bestilling af en eller flere attester på {{bestilling.rekvisitusCpr}}-XXXX er blevet afvist pga. manglende rolle.

Kontakt Personale og HR hvis du mener der er tale om en fejl.
`

module.exports = Node;