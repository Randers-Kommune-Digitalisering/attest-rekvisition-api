const Node = {
  "id": "9dbfefabe85c0d23",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "AD oplysninger",
  "rules": [
    {
      "t": "set",
      "p": "cpr",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "cpr.clientId",
      "pt": "msg",
      "to": "CPR_CLIENTID",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "cpr.clientSecret",
      "pt": "msg",
      "to": "CPR_CLIENTSECRET",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 160,
  "wires": [
    [
      "2d1ad78b0f0ad1f1"
    ]
  ]
}

module.exports = Node;