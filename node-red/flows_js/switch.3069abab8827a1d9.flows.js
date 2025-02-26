const Node = {
  "id": "3069abab8827a1d9",
  "type": "switch",
  "z": "6268f9208c4f680c",
  "name": "",
  "property": "cpr_token.expires_at",
  "propertyType": "global",
  "rules": [
    {
      "t": "gt",
      "v": "$millis()",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 80,
  "wires": [
    [
      "68d095f2da711764"
    ],
    [
      "9dbfefabe85c0d23"
    ]
  ]
}

module.exports = Node;