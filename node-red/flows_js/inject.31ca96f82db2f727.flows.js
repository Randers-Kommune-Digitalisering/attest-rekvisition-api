const Node = {
  "id": "31ca96f82db2f727",
  "type": "inject",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "Test",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{\"sagsbehandler\":\"Test rekvirent - DQA8932\",\"medarbejderCPR\":\"123456-7890\",\"attestType\":\"0, 2\",\"attestSubType\":[{\"attestType\":0,\"subType\":\"3\"},{\"attestType\":2,\"subType\":\"0\"}],\"samtykke\":\"true\"}",
  "payloadType": "json",
  "x": 150,
  "y": 160,
  "wires": [
    [
      "0cdf9b5f553b73a7"
    ]
  ]
}

module.exports = Node;