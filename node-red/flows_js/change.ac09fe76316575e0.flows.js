const Node = {
  "id": "ac09fe76316575e0",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "893544c31beff83e",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 620,
  "wires": [
    [
      "7b3ac4eb61c4e1a8",
      "e0d9119551a7630e"
    ]
  ]
}

module.exports = Node;