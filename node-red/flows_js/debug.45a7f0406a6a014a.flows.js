const Node = {
  "id": "45a7f0406a6a014a",
  "type": "debug",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "stdout (db)",
  "active": false,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"message\": payload.warningCount > 0 ? \"Advarsel ved indsættelse af bestilling\" : \"Bestilling indsat i tabel\",\t    \"success\": error ~> $exists() ? false : true,\t    \"error\": error.message,\t    \"bestilling\": bestilling\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 790,
  "y": 1760,
  "wires": []
}

module.exports = Node;