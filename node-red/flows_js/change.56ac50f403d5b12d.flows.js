const Node = {
  "id": "56ac50f403d5b12d",
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
  "y": 700,
  "wires": [
    [
      "1ab0238e9b272491",
      "ed1c0d7982ecb0d9"
    ]
  ]
}

module.exports = Node;