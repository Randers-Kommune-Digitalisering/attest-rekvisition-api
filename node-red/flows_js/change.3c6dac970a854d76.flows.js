const Node = {
  "id": "3c6dac970a854d76",
  "type": "change",
  "z": "4d93234f3eda96ec",
  "name": "Mail request",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"from\": mail.from,\t    \"to\": mail.to,\t    \"title\": mail.title,\t    \"body\": mail.body,\t    \"attachments\": mail.attachments\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 80,
  "wires": [
    [
      "fa58a55166f248af"
    ]
  ]
}

module.exports = Node;