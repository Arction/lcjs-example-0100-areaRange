/*
 * LightningChartJS example that showcases AreaRangeSeries.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, Themes } = lcjs

// Create a XY Chart.
const chart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Area Range')

//Cache default X Axis for use.
const axisX = chart.getDefaultAxisX()

// Use DateTime TickStrategy and set the interval
axisX.setTickStrategy(AxisTickStrategies.DateTime).setInterval({
    start: new Date(2018, 0, 1).getTime(),
    end: new Date(2018, 11, 29).getTime(),
})

// Add AreaRange Series
const areaRange = chart.addAreaRangeSeries()

chart.getDefaultAxisY().setTitle('Share price').setUnits('$')

// Data for the AreaRange Series
let areaRangeData = [
    {
        x: new Date(2018, 0, 1).getTime(),
        yMax: 24,
        yMin: -15,
    },
    {
        x: new Date(2018, 0, 6).getTime(),
        yMax: 11,
        yMin: -13,
    },
    {
        x: new Date(2018, 0, 13).getTime(),
        yMax: 16,
        yMin: -11,
    },
    {
        x: new Date(2018, 0, 20).getTime(),
        yMax: 26,
        yMin: -8,
    },
    {
        x: new Date(2018, 0, 27).getTime(),
        yMax: -2,
        yMin: -4,
    },
    {
        x: new Date(2018, 1, 3).getTime(),
        yMax: -16,
        yMin: 2,
    },
    {
        x: new Date(2018, 1, 10).getTime(),
        yMax: -10,
        yMin: 9,
    },
    {
        x: new Date(2018, 1, 17).getTime(),
        yMax: 3,
        yMin: 17,
    },
    {
        x: new Date(2018, 1, 24).getTime(),
        yMax: -1,
        yMin: 26,
    },
    {
        x: new Date(2018, 2, 3).getTime(),
        yMax: 6,
        yMin: 35,
    },
    {
        x: new Date(2018, 2, 10).getTime(),
        yMax: 17,
        yMin: 39,
    },
    {
        x: new Date(2018, 2, 17).getTime(),
        yMax: -10,
        yMin: 41,
    },
    {
        x: new Date(2018, 2, 24).getTime(),
        yMax: -8,
        yMin: 42,
    },
    {
        x: new Date(2018, 2, 31).getTime(),
        yMax: 13,
        yMin: 41,
    },
    {
        x: new Date(2018, 3, 7).getTime(),
        yMax: -12,
        yMin: 39,
    },
    {
        x: new Date(2018, 3, 14).getTime(),
        yMax: 6,
        yMin: 37,
    },
    {
        x: new Date(2018, 3, 21).getTime(),
        yMax: -10,
        yMin: 36.5,
    },
    {
        x: new Date(2018, 3, 28).getTime(),
        yMax: 27,
        yMin: 36,
    },
    {
        x: new Date(2018, 4, 5).getTime(),
        yMax: 52,
        yMin: 38,
    },
    {
        x: new Date(2018, 4, 12).getTime(),
        yMax: 59,
        yMin: 42,
    },
    {
        x: new Date(2018, 4, 19).getTime(),
        yMax: 64,
        yMin: 50,
    },

    {
        x: new Date(2018, 4, 26).getTime(),
        yMax: 59,
        yMin: 53,
    },
    {
        x: new Date(2018, 5, 2).getTime(),
        yMax: 71,
        yMin: 54,
    },
    {
        x: new Date(2018, 5, 9).getTime(),
        yMax: 63,
        yMin: 53,
    },
    {
        x: new Date(2018, 5, 16).getTime(),
        yMax: 79,
        yMin: 52,
    },
    {
        x: new Date(2018, 5, 23).getTime(),
        yMax: 62,
        yMin: 51,
    },
    {
        x: new Date(2018, 5, 30).getTime(),
        yMax: 81,
        yMin: 49,
    },
    {
        x: new Date(2018, 6, 7).getTime(),
        yMax: 53,
        yMin: 48,
    },
    {
        x: new Date(2018, 6, 14).getTime(),
        yMax: 89,
        yMin: 48.5,
    },
    {
        x: new Date(2018, 6, 21).getTime(),
        yMax: 99,
        yMin: 49,
    },
    {
        x: new Date(2018, 6, 28).getTime(),
        yMax: 79,
        yMin: 51,
    },
    {
        x: new Date(2018, 7, 4).getTime(),
        yMax: 51,
        yMin: 51,
    },
    {
        x: new Date(2018, 7, 11).getTime(),
        yMax: 36,
        yMin: 51,
    },
    {
        x: new Date(2018, 7, 18).getTime(),
        yMax: 79,
        yMin: 50,
    },
    {
        x: new Date(2018, 7, 25).getTime(),
        yMax: 49,
        yMin: 53,
    },
    {
        x: new Date(2018, 8, 1).getTime(),
        yMax: 33,
        yMin: 55,
    },
    {
        x: new Date(2018, 8, 8).getTime(),
        yMax: 51,
        yMin: 58,
    },
    {
        x: new Date(2018, 8, 15).getTime(),
        yMax: 43,
        yMin: 60,
    },
    {
        x: new Date(2018, 8, 22).getTime(),
        yMax: 72,
        yMin: 61,
    },
    {
        x: new Date(2018, 8, 29).getTime(),
        yMax: 82,
        yMin: 60.5,
    },
    {
        x: new Date(2018, 9, 6).getTime(),
        yMax: 73,
        yMin: 59,
    },

    {
        x: new Date(2018, 9, 13).getTime(),
        yMax: 73,
        yMin: 58,
    },
    {
        x: new Date(2018, 9, 20).getTime(),
        yMax: 67,
        yMin: 55,
    },
    {
        x: new Date(2018, 9, 27).getTime(),
        yMax: 43,
        yMin: 53,
    },
    {
        x: new Date(2018, 10, 3).getTime(),
        yMax: 12,
        yMin: 54,
    },
    {
        x: new Date(2018, 10, 10).getTime(),
        yMax: 26,
        yMin: 54.5,
    },
    {
        x: new Date(2018, 10, 17).getTime(),
        yMax: 46,
        yMin: 56,
    },
    {
        x: new Date(2018, 10, 24).getTime(),
        yMax: 43,
        yMin: 58,
    },
    {
        x: new Date(2018, 11, 1).getTime(),
        yMax: 72,
        yMin: 60,
    },
    {
        x: new Date(2018, 11, 8).getTime(),
        yMax: 82,
        yMin: 62.5,
    },
    {
        x: new Date(2018, 11, 15).getTime(),
        yMax: 73,
        yMin: 64,
    },
    {
        x: new Date(2018, 11, 22).getTime(),
        yMax: 92,
        yMin: 65,
    },
    {
        x: new Date(2018, 11, 29).getTime(),
        yMax: 107,
        yMin: 66,
    },
]

areaRangeData.forEach((point, i) => {
    areaRange.add({ position: point.x, high: point.yMax, low: point.yMin })
})
