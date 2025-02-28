const Node = {
  "id": "1fae942cc7746469",
  "type": "change",
  "z": "4d93234f3eda96ec",
  "name": "Success = false",
  "rules": [
    {
      "t": "set",
      "p": "payload.success",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 140,
  "wires": [
    [
      "76a3dfb39fd280cf"
    ]
  ]
}

module.exports = Node;