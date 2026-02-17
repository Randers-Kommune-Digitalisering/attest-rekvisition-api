const Node = {
  "id": "b0a29e207c71f693",
  "type": "change",
  "z": "4882205932e440ad",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"dq_nr\": payload.brugerDQ,\t    \"rolle\": payload.rolle,\t    \"kan_bestille\": (payload.rolle = '1' or payload.rolle = '2')\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1300,
  "y": 80,
  "wires": [
    [
      "d0ef4f546ad05ecc"
    ]
  ]
}

module.exports = Node;