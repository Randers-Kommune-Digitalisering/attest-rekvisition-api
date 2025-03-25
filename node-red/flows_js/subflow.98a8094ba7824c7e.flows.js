const Node = {
  "id": "98a8094ba7824c7e",
  "type": "subflow",
  "name": "DB Connect (2)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "47f52436c99917dd"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1250,
      "y": 100,
      "wires": [
        {
          "id": "595f1a3e977540d4",
          "port": 0
        },
        {
          "id": "1bbf9ae214b9383a",
          "port": 0
        },
        {
          "id": "15abc1ec2daffa9e",
          "port": 0
        },
        {
          "id": "f741fe4cb93fbf48",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1260,
    "y": 260,
    "wires": [
      {
        "id": "15abc1ec2daffa9e",
        "port": 0
      },
      {
        "id": "f6eb137e9c19e32d",
        "port": 0
      }
    ]
  }
}

module.exports = Node;