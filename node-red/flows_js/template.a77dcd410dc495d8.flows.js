const Node = {
  "id": "a77dcd410dc495d8",
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
  "y": 1940,
  "wires": [
    [
      "d226d7864852a3f3"
    ]
  ]
}

Node.template = `
Hej {{bestilling.rekvirentNavn}},

Din bestilling af en eller flere attester på {{bestilling.rekvisitus.navn}} ({{bestilling.rekvisitusCpr}}-XXXX) er modtaget, og vil blive behandlet hurtigst muligt.

Bestillingen har en maksimal behandlingstid på 19 dage.

Kontakt Personale og HR hvis du har spørgsmål til bestillingen.
`

module.exports = Node;