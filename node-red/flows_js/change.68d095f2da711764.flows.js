const Node = {
  "id": "68d095f2da711764",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "Retrieve token",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "cpr_token",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 80,
  "wires": [
    [
      "e9f1108fcfab7502"
    ]
  ]
}

module.exports = Node;