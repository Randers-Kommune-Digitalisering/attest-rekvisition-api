const Node = {
  "id": "9ec0b237affee70b",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "CPR request",
  "rules": [
    {
      "t": "set",
      "p": "base_url",
      "pt": "msg",
      "to": "CPR_SERVICE_URL",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "base_url & \"PersonBaseDataExtendedService/lookup/name/\" & rekvisitus.cpr",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 300,
  "wires": [
    [
      "5098836e252e02bb"
    ]
  ]
}

module.exports = Node;