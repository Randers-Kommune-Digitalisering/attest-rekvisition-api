const Node = {
  "id": "35f0e432fde06cb6",
  "type": "change",
  "z": "4d93234f3eda96ec",
  "name": "Retry config",
  "rules": [
    {
      "t": "set",
      "p": "config",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "config.retryAttempts",
      "pt": "msg",
      "to": "4",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "mail_api",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 80,
  "wires": [
    [
      "3db569e99e4304bb"
    ]
  ]
}

module.exports = Node;