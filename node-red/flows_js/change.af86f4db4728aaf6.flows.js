const Node = {
  "id": "af86f4db4728aaf6",
  "type": "change",
  "z": "4882205932e440ad",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(payload ~> $type()) = \"array\" ? payload[0] : payload",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(payload ~> $type()) = \"object\" ? payload : {}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.brugerDQ",
      "pt": "msg",
      "to": "payload.brugerDQ != null ? payload.brugerDQ : dq",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload.rolle",
      "pt": "msg",
      "to": "payload.rolle != null ? payload.rolle : 0",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1100,
  "y": 80,
  "wires": [
    [
      "b0a29e207c71f693"
    ]
  ]
}

module.exports = Node;