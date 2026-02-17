const Node = {
  "id": "4e0fe206aca4ebde",
  "type": "change",
  "z": "95ac886a1e266f93",
  "g": "a28adbce8cf5e836",
  "name": "Set metric is_available",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "error ~> $exists() ? 0 : 1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "dependency_name",
      "pt": "msg",
      "to": "db",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 480,
  "wires": [
    [
      "eea0380a2f5cfebd"
    ]
  ]
}

module.exports = Node;