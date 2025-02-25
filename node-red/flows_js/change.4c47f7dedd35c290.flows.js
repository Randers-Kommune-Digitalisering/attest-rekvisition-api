const Node = {
  "id": "4c47f7dedd35c290",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "KEYCLOAK_TOKEN_URL",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 160,
  "wires": [
    [
      "c053b042a352c997",
      "4cc1f4d4e930ce8c"
    ]
  ]
}

module.exports = Node;