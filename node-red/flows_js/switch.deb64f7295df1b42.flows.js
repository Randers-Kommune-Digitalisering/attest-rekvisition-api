const Node = {
  "id": "deb64f7295df1b42",
  "type": "switch",
  "z": "95ac886a1e266f93",
  "g": "a28adbce8cf5e836",
  "name": "",
  "property": "sql ~> $contains(\"SELECT\")",
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
  "y": 440,
  "wires": [
    [
      "13f6927e1fd832bb"
    ]
  ]
}

module.exports = Node;