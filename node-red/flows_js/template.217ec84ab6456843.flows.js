const Node = {
  "id": "217ec84ab6456843",
  "type": "template",
  "z": "4882205932e440ad",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 340,
  "y": 160,
  "wires": [
    [
      "3b2ef6dd9b410f47"
    ]
  ]
}

Node.template = `
Indsæt DQ-nummer i adressen efter "/dquser/", f.eks. <a href="/dquser/dq12345">/dquser/dq12345</a>
`

module.exports = Node;