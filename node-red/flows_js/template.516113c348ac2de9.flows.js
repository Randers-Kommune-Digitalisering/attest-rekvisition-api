const Node = {
  "id": "516113c348ac2de9",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "Forespørgsel ↓\\n Opdater bestilling i tabel",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 550,
  "y": 2180,
  "wires": [
    [
      "c52f360190f59f28"
    ]
  ]
}

Node.template = `
UPDATE
    {{tablename}}
SET
    erAdviseringAfsendt = {{erAdviseret}},
    adviseringAfsendt = {{{adviseretAt}}}
WHERE 
    cpr = {{bestilling.rekvisitus.cpr}}
AND rekvirentDQ = {{bestilling.rekvirentDQ}}
AND erAdviseringAfsendt = 0
`

module.exports = Node;