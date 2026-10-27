var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-marzipiano",
      "name": "exterior marzipiano",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.618100510837003,
        "pitch": 0.22670013699593028,
        "fov": 1.5333444524665025
      },
      "linkHotspots": [
        {
          "yaw": 0.5479335720980636,
          "pitch": 0.10943847604495005,
          "rotation": 0,
          "target": "1-interior-marzipiano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.674474814431349,
          "pitch": 0.053723163432348287,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">ARCHIGRAM</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">El grupo Archigram fue un colectivo grupo de Arquitectos fundado en 1960. Grandes influyentes de la cultura POP, sus obras únicamente fueron de carácter teórico y representativo buscando generar emociones diversas en el publico.</font></font>"
        }
      ]
    },
    {
      "id": "1-interior-marzipiano",
      "name": "Interior marzipiano",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32105693846792427,
          "pitch": 0.06070442868642445,
          "rotation": 0,
          "target": "0-exterior-marzipiano"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7362381553119821,
          "pitch": 0.3913554110324746,
          "title": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Cardiff</font></font>",
          "text": "<font dir=\"auto\" style=\"vertical-align: inherit;\"><font dir=\"auto\" style=\"vertical-align: inherit;\">Trata de una obra expositiva, propuesta para el \"Festival de la Commonwealth\" en el castillo de Cardiff en Reino Unido. Esta obra ejemplifica el sello de Archigram, Estructuras efímeras, modulares, portátiles y ligeras, las cuales desafian la idea tradicional de arquitectura.&nbsp;</font></font>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
