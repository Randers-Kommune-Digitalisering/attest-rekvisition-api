const Node = {
  "id": "c8c2470ebf5cadc7",
  "type": "template",
  "z": "4882205932e440ad",
  "name": "Forespørgsel ↓\\n Hent rolle med DQ-nr.",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 100,
  "wires": [
    [
      "63aa68b5a39864f9"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    {{tablename}}
WHERE
    UPPER(brugerDQ) LIKE UPPER('%{{dq}}%')
AND (rolle = '1' OR rolle = '2');
`

module.exports = Node;