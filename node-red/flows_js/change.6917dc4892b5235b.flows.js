const Node = {
  "id": "6917dc4892b5235b",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
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
  "x": 940,
  "y": 1800,
  "wires": [
    [
      "bc9b261c1e94e485",
      "dc90ea4df41547f4"
    ]
  ]
}

module.exports = Node;