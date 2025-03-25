const Node = {
  "id": "9370dca10a0b7593",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "893544c31beff83e",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": payload,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 780,
  "wires": [
    [
      "cb9c9917c6d55e03",
      "4aae77f75c257f4a"
    ]
  ]
}

module.exports = Node;