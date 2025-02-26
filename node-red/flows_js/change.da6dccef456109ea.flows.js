const Node = {
  "id": "da6dccef456109ea",
  "type": "change",
  "z": "6268f9208c4f680c",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Bearer \" & payload.access_token,\t    \"content-type\": \"application/json\",\t    \"ConsistencyLevel\": \"eventual\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 300,
  "wires": [
    [
      "9ec0b237affee70b"
    ]
  ]
}

module.exports = Node;