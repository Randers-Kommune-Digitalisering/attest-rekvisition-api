const Node = {
  "id": "beced7509e0479c3",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "",
  "property": "erAfvist",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "0",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 250,
  "y": 1980,
  "wires": [
    [
      "2a8787a59a4fb263"
    ],
    [
      "2d14475c604e8497"
    ]
  ]
}

module.exports = Node;