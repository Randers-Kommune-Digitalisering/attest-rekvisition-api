const Node = {
  "id": "2d1ad78b0f0ad1f1",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "Headers / Body",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Type\": \"application/x-www-form-urlencoded\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"grant_type\": \"client_credentials\",\t    \"client_id\": cpr.clientId,\t    \"client_secret\": cpr.clientSecret\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 160,
  "wires": [
    [
      "4c47f7dedd35c290"
    ]
  ]
}

module.exports = Node;