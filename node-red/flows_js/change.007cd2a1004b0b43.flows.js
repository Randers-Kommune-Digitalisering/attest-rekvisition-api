const Node = {
  "id": "007cd2a1004b0b43",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "Set token",
  "rules": [
    {
      "t": "set",
      "p": "payload.expires_at",
      "pt": "msg",
      "to": "$millis() + ( payload.expires_in * 1000 )",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "cpr_token",
      "pt": "global",
      "to": "payload",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 160,
  "wires": [
    [
      "a0f65567835af33c"
    ]
  ]
}

module.exports = Node;