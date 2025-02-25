const Node = {
  "id": "2a8787a59a4fb263",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
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
      "to": "Attestrekvisition modtaget",
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
  "x": 260,
  "y": 2000,
  "wires": [
    [
      "a77dcd410dc495d8"
    ]
  ]
}

module.exports = Node;