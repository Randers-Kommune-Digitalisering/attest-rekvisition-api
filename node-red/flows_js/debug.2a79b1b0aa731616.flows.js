const Node = {
  "id": "2a79b1b0aa731616",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "stdout (db)",
  "active": true,
  "tosidebar": true,
  "console": false,
  "tostatus": false,
  "complete": "{\t    \"message\": payload.warningCount > 0 ? \"Advarsel ved opdatering af bestillings adviseringsstatus\" : \"Bestilling opdateret adviseringsstatus\",\t    \"success\": error ~> $exists() ? false : true,\t    \"affectedRows\": payload.affectedRows,\t    \"error\": error.message,\t    \"bestilling\": bestilling ~> | $.rekvisitus | { \"cpr\": (cpr ~> $split(\"-\"))[0] & \"-XXXX\" } | \t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1010,
  "y": 2180,
  "wires": []
}

module.exports = Node;