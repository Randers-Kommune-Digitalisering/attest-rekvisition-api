const Node = {
  "id": "f8e651e9c80a3529",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
  "name": "stdout (join mail)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "bestilling.rekvirentEmail ~> $exists() ?\t{\t    \"azure\": \"Mail hentning succesfuld\",\t    \"rekvirent\": {\t        \"dq\": bestilling.rekvirentDQ,\t        \"navn\": bestilling.rekvirentNavn,\t        \"mail\": bestilling.rekvirentEmail\t    }\t}\t:\t{\t    \"azure\": \"Fejl ved mail hentning\",\t    \"rekvirent\": {\t        \"dq\": bestilling.rekvirentDQ,\t        \"navn\": bestilling.rekvirentNavn\t    },\t    \"message\": error.message,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 950,
  "y": 900,
  "wires": []
}

module.exports = Node;