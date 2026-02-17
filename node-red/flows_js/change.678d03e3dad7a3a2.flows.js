const Node = {
  "id": "678d03e3dad7a3a2",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "893544c31beff83e",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"dependency_name\": dependency_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 880,
  "wires": [
    [
      "f665aee461c2c37d",
      "e5a6e69e16295d39"
    ]
  ]
}

module.exports = Node;