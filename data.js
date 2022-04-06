var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.29481403936042483,
        "pitch": 0.03835702916343564,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.03096995772343547,
          "pitch": -0.16723211949052796,
          "rotation": 18.84955592153877,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1053754008439558,
          "pitch": 0.27955683487625826,
          "title": "Welcome!",
          "text": "This is the Faculty of Engineering in NUS!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21346719312854034,
        "pitch": -0.1029268491261206,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.011612037765141636,
          "pitch": -0.01294722741105403,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.776142166306668,
          "pitch": -0.05549644913523011,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2988991193199855,
          "pitch": 0.023770399614935656,
          "title": "Wow!",
          "text": "Big building!"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.4071405143279172,
        "pitch": 0.1286585614076543,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -3.1233355780930463,
          "pitch": 0.005781744346819551,
          "rotation": 4.71238898038469,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7559035123231048,
          "pitch": 0.1836979359961255,
          "title": "Mmmm...",
          "text": "Something smells good here!"
        },
        {
          "yaw": -2.9678161028017023,
          "pitch": 0.3427683772332557,
          "title": "Study!",
          "text": "Hard at work &gt;:"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
