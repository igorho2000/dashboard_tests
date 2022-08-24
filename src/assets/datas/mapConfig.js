export const MapPositions = {
    center: [121.536609, 25.044808],
    CityHall: [121.56384899783005,25.037454320016653],
    Dadaocheng: [121.51013649269608, 25.055775323336594],
    Yangmingshan: [121.55180953513364, 25.12898719167495],
    MainStation: [121.51701453118407,25.047950866969824],
    n: [121.53799903832744, 25.092301189452208],
    e:[ 121.5858901814368, 25.046019127628448],
    w:[121.48719722062226, 25.050157512489278],
    s:[121.52908519223917, 25.005905715593244]
}

export const MaxBounds = [
    [121.3870596781498, 24.95733863075891], // Southwest coordinates
    [121.6998231749096, 25.21179993640203] // Northeast coordinates
]

export const MapObjectConfig = {
    antialias: true,
    container: "mapboxBox",
    center: MapPositions.center,
    maxBounds: MaxBounds,
    zoom:12.5,
    minZoom: 11,
    maxZoom: 22,
    antialias: true, // 抗鋸齒
    projection: 'globe' // display the map as a 3D globe
}

// // Set the default atmosphere style
export const MapFogStyle = {
	'light': {
		'high-color': '#cbd2d3',
		'space-color': '#d8f2ff',
        'star-intensity': 0.0,
        "horizon-blend": 0.5
	},
	'dark': {
        "range": [2, 10],
		'space-color': '#0a0f2b',
        'high-color': '#02253a',
		'color': '#41455a',
        'star-intensity': 0.1,
        "horizon-blend": 0.5
	}
}

const BuildingsStyle = {
    'light': {
        'fill-extrusion-color': "#dee3e4",
        'fill-extrusion-opacity': 0.6
    },
    'dark': {
        'fill-extrusion-color': "#272627",
        'fill-extrusion-opacity': 0.8
    }
}

export const BuildingsIn3D = (mode) => {
    const Style = mode? BuildingsStyle[mode]: BuildingsStyle['light']
    return {
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        // 'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.5,
                ["get", "height"]
            ],
            'fill-extrusion-base': ['get', 'min_height'],
            ...Style
        }
    }
}

const TaipeiTownPaint = {
    'light': {
        "text-color":[
            "interpolate",["linear"],["zoom"],
            15, "#444",
            16, "#000"
        ]
    },
    'dark': {
        "text-color":[
            "interpolate",["linear"],["zoom"],
            15, "#aaa",
            16, "#fff"
        ],
        'text-halo-color': '#888',
        "text-halo-width": [
            "interpolate",["linear"],["zoom"],
            15, 0,
            16, 1
        ]
    }  
}

export const TaipeiTown = (mode) =>  {
    const PaintConfig = mode? TaipeiTownPaint[mode]: TaipeiTownPaint['light']
    return {
        id: 'taipei_town',
        source: 'taipei_town',
        type: 'symbol',
        layout: {
            "text-field": [
                "to-string",
                ["get", "TNAME"]
            ],
            "text-size": [
                "interpolate",["linear"],["zoom"],
                11, 10,
                13, 12,
                15.5, 14
            ],
            'text-allow-overlap': true
        },
        paint: {
            ...PaintConfig,
            "text-opacity": [
                "interpolate",["linear"],["zoom"],
                15.99, 1,
                16, 0
            ]
        }
    }
}


const TaipeiVillagePaint = {
    'light': {
        "text-color": "#5ba2a2"
    },
    'dark': {
        "text-color": "#85bdbd"
    }  
}

export const TaipeiVillage = (mode) =>  {
    const PaintConfig = mode? TaipeiVillagePaint[mode]: TaipeiVillagePaint['light']
    return {
        id: 'taipei_village',
        source: 'taipei_village',
        type: 'symbol',
        layout: {
            "text-field": [
                "to-string",
                ["get", "VNAME"]
            ],
            "text-size": 14
        },
        paint: {
            ...PaintConfig,
            "text-opacity": [
                "interpolate",["linear"],["zoom"],
                15.49,0,
                15.5,1
            ]
        }
    }
}

// Map layer config
export const lineWideStyle = {
    'line-width': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10.99,
        0,
        12,
        0.5,
        18,
        3
    ]
}

export const lineSuperWideStyle = {
    'line-width': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10.99,
        0,
        12,
        1,
        18,
        4
    ]
}

export const fillCommonStyle = {
    'fill-opacity': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10,
        0.3,
        22,
        0.15
    ]
}

export const circleCommonStyle = {
    'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        11.99,0,
        12,0.1,
        13.5,0.5,
        15,2.5,
        22,4
    ]
}

export const circleHeatmapStyle = {
    'circle-radius': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10.99,0,
        12.6,0.5,
        16,4
    ]
}

export const heatmapCommonStyle = {
    'heatmap-opacity': [
        "interpolate",
        ["linear"],
        ["zoom"],
        11, 0.6,
        13.5, 0.9
    ]
}
export const heatmapMonthStyle = {
    'heatmap-radius': 10,
    'heatmap-intensity': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10.99,0.5,
        11,0.8,
        15,1
    ]
}
export const heatmapDayStyle = {
    'heatmap-radius': 30,
    'heatmap-intensity': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10.99,0.1,
        11,0.4,
        15,1
    ]
}
export const heatmapHourStyle = {
    'heatmap-radius': 45,
    'heatmap-intensity': [
        "interpolate",
        ["linear"],
        ["zoom"],
        10.99,0,
        11,0.2,
        15,1
    ]
}

export const commomIconStyle = {
    'icon-allow-overlap': true,
    'icon-ignore-placement': true,
    'icon-padding': 0
}

export const symbolShapeSmallStyle = {
    ...commomIconStyle,
    'icon-size': [
        "interpolate",
        ["linear"],
        ["zoom"],
        11.99, 0,
        12, 0.2
    ]
}
export const symbolIconSmallStyle = {
    ...commomIconStyle,
    'icon-size': [
        "interpolate",
        ["linear"],
        ["zoom"],
        11.99, 0,
        14, 0.2,
        22, 0.3
    ] 
}

export const symbolBusStyle = {
    ...commomIconStyle,
    'icon-image': 'bus',
    'icon-size': [
        "interpolate",
        ["linear"],
        ["zoom"],
        14.99,
        0,
        15,
        0.05,
        18,
        0.125
    ] 
}

export const symbolTextHaloStyle = {
    paint:{
        "text-halo-width": 1,
    },
    layout:{
        "icon-image":"metro",
        "icon-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            11.99,0,
            12,0.1,
            14,0.3
        ],
        "icon-allow-overlap": true,
        "text-field": "○",
        "text-size": [
            "interpolate",
            ["linear"],
            ["zoom"],
            12.99,0,
            13,40,
            22,55
        ]
    }
}

export const symbolHaloStyle = {
    paint:{
        "text-halo-width": 1,
    },
    layout:{
        'icon-size': 1.1,
        //"icon-allow-overlap": true,
        "text-field": '○',
        "text-size": 40,
        // "text-offset": [0, 0]
    }
}