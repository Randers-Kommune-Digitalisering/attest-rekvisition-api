const Node = {
  "id": "bd3191f24c7a2057",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "eed7fa19c41629c7",
  "name": "Forespørgsel ↓\\n Indsæt bestilling i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 1800,
  "wires": [
    [
      "e7338a1d27de82bd"
    ]
  ]
}

Node.template = `
INSERT INTO {{tablename}} (
    rekvirentNavn,
    rekvirentDQ,
    rekvirentEmail,
    cpr,
    navn,
    attestType,
    attestSubType,
    erAfvist,
    afvist
)
VALUES
(
    "{{bestilling.rekvirentNavn}}",
    "{{bestilling.rekvirentDQ}}",
    "{{bestilling.rekvirentEmail}}",
    "{{bestilling.rekvisitus.cpr}}",
    "{{bestilling.rekvisitus.navn}}",
     {{bestilling.attestType}},
     {{bestilling.attestSubType}},
     {{erAfvist}},
     {{{afvistAt}}}
)
`

module.exports = Node;