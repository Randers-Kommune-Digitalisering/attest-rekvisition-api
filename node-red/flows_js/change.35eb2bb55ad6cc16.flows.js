const Node = {
  "id": "35eb2bb55ad6cc16",
  "type": "change",
  "z": "95ac886a1e266f93",
  "name": "Set retry config",
  "rules": [
    {
      "t": "set",
      "p": "config",
      "pt": "msg",
      "to": "config ? config : {}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "config.retryAttempts",
      "pt": "msg",
      "to": "2",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 140,
  "wires": [
    [
      "4a9940d7e63f98e5"
    ]
  ]
}

module.exports = Node;