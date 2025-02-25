const Node = {
  "id": "d93454d8bc1eca83",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "stdout (join name)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "bestilling.rekvisitus.navn ~> $exists() ?\t{\t    \"message\": \"SD navn hentning succesfuld\",\t    \"rekvisitus\": bestilling.rekvisitus.navn\t}\t:\t{\t    \"message\": \"SD navn hentning\",\t    \"error\": error,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 240,
  "y": 1100,
  "wires": []
}

module.exports = Node;