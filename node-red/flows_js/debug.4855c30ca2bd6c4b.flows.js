const Node = {
  "id": "4855c30ca2bd6c4b",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "stdout (join name)",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "rekvisitus.navn ~> $exists() and rekvisitus.navn != null ?\t{\t    \"message\": \"SD navn hentning succesfuld\",\t    \"rekvisitus\": rekvisitus.navn\t}\t:\t{\t    \"message\": \"SD navn hentning fejl\",\t    \"warning\": error ~> $type() = \"string\" ? $replace(error, \"TypeError: \", \"\") : error,\t    \"statusCode\": statusCode = null ? payload.statusCode : statusCode\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 620,
  "y": 1060,
  "wires": []
}

module.exports = Node;