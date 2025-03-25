const Node = {
  "id": "c1f4911bc97baeb2",
  "type": "switch",
  "z": "95ac886a1e266f93",
  "g": "a28adbce8cf5e836",
  "name": "",
  "property": "(sql ~> $contains(\"INSERT\")) or (sql ~> $contains(\"UPDATE\"))",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 330,
  "y": 380,
  "wires": [
    [
      "24afc296c9cc69c6",
      "512e45ee00186d53"
    ]
  ]
}

module.exports = Node;