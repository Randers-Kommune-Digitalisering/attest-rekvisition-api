const Node = {
  "id": "95ac886a1e266f93",
  "type": "subflow",
  "name": "DB Try Connect (2)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 140,
      "wires": [
        {
          "id": "1c67a711ef9e946d"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 1160,
      "y": 80,
      "wires": [
        {
          "id": "cb0c5418cfeeafcc",
          "port": 0
        }
      ]
    },
    {
      "x": 1010,
      "y": 200,
      "wires": [
        {
          "id": "4a9940d7e63f98e5",
          "port": 1
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "outputLabels": [
    "Success",
    "Error"
  ],
  "status": {
    "x": 1160,
    "y": 400,
    "wires": [
      {
        "id": "ec2eee4c3a7997ee",
        "port": 0
      }
    ]
  }
}

module.exports = Node;