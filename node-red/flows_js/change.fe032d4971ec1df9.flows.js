const Node = {
  "id": "fe032d4971ec1df9",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "f111898069b32afc",
  "name": "Formatér bestilling \\n inden lagring",
  "rules": [
    {
      "t": "set",
      "p": "bestilling",
      "pt": "msg",
      "to": "{\t   \"rekvirentNavn\": (bestilling.sagsbehandler ~> $split(\" - \"))[0] ~> $trim(),\t   \"rekvirentDQ\": (bestilling.sagsbehandler ~> $split(\" - \"))[1] ~> $trim(),\t   \"rekvisitus\": { \"cpr\": bestilling.medarbejderCPR },\t   \"attestType\": $attestTypes := bestilling.attestType ~> $split(\",\") ~> $map($trim ~> $number),\t   \"attestSubType\": bestilling.attestSubType\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "bestilling.attestSubType",
      "pt": "msg",
      "to": "bestilling.attestSubType[attestType in $$.bestilling.attestType]\t~> | $ | { \"subType\": subType ~> $number } |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 400,
  "wires": [
    [
      "95ab33f2dec2f897",
      "3b54a0c92128cdc0"
    ]
  ]
}

module.exports = Node;