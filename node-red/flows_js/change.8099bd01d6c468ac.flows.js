const Node = {
  "id": "8099bd01d6c468ac",
  "type": "change",
  "z": "d35ec07551c9897c",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvisitus",
      "pt": "msg",
      "to": "{\t   \"cpr\": rekvisitus ~> $exists() ? rekvisitus : null,\t   \"navn\": null\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 240,
  "wires": [
    []
  ]
}

module.exports = Node;