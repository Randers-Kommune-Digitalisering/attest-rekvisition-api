const Node = {
  "id": "2d14475c604e8497",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "826ac4afb5a7dcfc",
  "name": "Byg mail",
  "rules": [
    {
      "t": "set",
      "p": "bestilling.rekvisitusCpr",
      "pt": "msg",
      "to": "(bestilling.rekvisitus.cpr ~> $substring(0, 6))",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "mail",
      "pt": "msg",
      "to": "{}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "mail.title",
      "pt": "msg",
      "to": "Din bestilling af attest er blevet afvist",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "mail.to",
      "pt": "msg",
      "to": "bestilling.rekvirentEmail",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "mail.from",
      "pt": "msg",
      "to": "MAIL_THIS",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 1500,
  "wires": [
    [
      "19c5479f155d0443"
    ]
  ]
}

module.exports = Node;