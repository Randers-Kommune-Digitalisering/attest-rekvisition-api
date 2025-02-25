const Node = {
  "id": "b474f11560c328eb",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "stdout (join name)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "bestilling.rekvisitus.navn ~> $exists() ?\t{\t    \"message\": \"CPR navn hentning succesfuld\",\t    \"rekvisitus\": bestilling.rekvisitus.navn\t}\t:\t{\t    \"message\": \" CPR navn hentning fejl\",\t    \"error\": error,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 820,
  "y": 1120,
  "wires": []
}

module.exports = Node;