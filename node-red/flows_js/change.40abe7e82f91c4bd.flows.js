const Node = {
  "id": "40abe7e82f91c4bd",
  "type": "change",
  "z": "d35ec07551c9897c",
  "name": "Query params",
  "rules": [
    {
      "t": "set",
      "p": "today",
      "pt": "msg",
      "to": "$millis() ~> $fromMillis(\"[D01].[M01].[Y0001]\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvisitus.cpr_sd",
      "pt": "msg",
      "to": "rekvisitus.cpr ~> $replace(\"-\", \"\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 80,
  "wires": [
    [
      "fd47afcad6e98bb9"
    ]
  ]
}

module.exports = Node;