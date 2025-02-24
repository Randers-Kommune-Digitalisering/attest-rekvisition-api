const Node = {
  "id": "6917dc4892b5235b",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "join obj",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"warningCount\": payload.warningCount ~> $sum(),\t    \"error\": payload.error ~> $merge()\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 1820,
  "wires": [
    [
      "bc9b261c1e94e485"
    ]
  ]
}

module.exports = Node;