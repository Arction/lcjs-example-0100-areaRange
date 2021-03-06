/*
 * LightningChartJS example that showcases AreaRangeSeries.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisTickStrategies,
    Themes
} = lcjs

// Decide on an origin for DateTime axis.
const dateOrigin = new Date(2018, 0, 1)

// Create a XY Chart.
const chart = lightningChart().ChartXY({
    // theme: Themes.dark
})
//Cache default X Axis for use.
const axisX = chart.getDefaultAxisX()
// Use DateTime TickStrategy, using the origin specified above.
axisX
    .setTickStrategy(
        AxisTickStrategies.DateTime,
        (tickStrategy) => tickStrategy.setDateOrigin(dateOrigin)
    )
chart.setTitle('Area Range')
// Add AreaRange Series
const areaRange = chart.addAreaRangeSeries()
// Modify the ResultTable formatting.
areaRange.setCursorResultTableFormatter((builder, series, figure, yMax, yMin) => {
    return builder
        .addRow('Actual vs Expected Share Prices of Company')
        .addRow('Date: ' + axisX.formatValue(figure))
        .addRow('Actual: ' + yMax.toFixed(2) + ' $')
        .addRow('Expected: ' + yMin.toFixed(2) + ' $')
})
chart.getDefaultAxisY()
    .setTitle('Share price ($)')
// Data for the AreaRange Series
let areaRangeData = [
    {
        x: 0, yMax: 24, yMin: -15
    },
    {
        x: 6, yMax: 11, yMin: -13
    },
    {
        x: 13, yMax: 16, yMin: -11
    },
    {
        x: 20, yMax: 26, yMin: -8
    },
    {
        x: 27, yMax: -2, yMin: -4
    },
    {
        x: 34, yMax: -16, yMin: 2
    },
    {
        x: 41, yMax: -10, yMin: 9
    },
    {
        x: 48, yMax: 3, yMin: 17
    },
    {
        x: 55, yMax: -1, yMin: 26
    },
    {
        x: 62, yMax: 6, yMin: 35
    },
    {
        x: 69, yMax: 17, yMin: 39
    },
    {
        x: 76, yMax: -10, yMin: 41
    },
    {
        x: 83, yMax: -8, yMin: 42
    },
    {
        x: 90, yMax: 13, yMin: 41
    },
    {
        x: 97, yMax: -12, yMin: 39
    },
    {
        x: 104, yMax: 6, yMin: 37
    },
    {
        x: 111, yMax: -10, yMin: 36.5
    },
    {
        x: 118, yMax: 27, yMin: 36
    },
    {
        x: 125, yMax: 52, yMin: 38
    },
    {
        x: 132, yMax: 59, yMin: 42
    },
    {
        x: 139, yMax: 64, yMin: 50
    },

    {
        x: 146, yMax: 59, yMin: 53
    },
    {
        x: 153, yMax: 71, yMin: 54
    },
    {
        x: 160, yMax: 63, yMin: 53
    },
    {
        x: 167, yMax: 79, yMin: 52
    },
    {
        x: 174, yMax: 62, yMin: 51
    },
    {
        x: 181, yMax: 81, yMin: 49
    },
    {
        x: 188, yMax: 53, yMin: 48
    },
    {
        x: 195, yMax: 89, yMin: 48.5
    },
    {
        x: 202, yMax: 99, yMin: 49
    },
    {
        x: 209, yMax: 79, yMin: 51
    },
    {
        x: 216, yMax: 51, yMin: 51
    },
    {
        x: 223, yMax: 36, yMin: 51
    },
    {
        x: 230, yMax: 79, yMin: 50
    },
    {
        x: 237, yMax: 49, yMin: 53
    },
    {
        x: 244, yMax: 33, yMin: 55
    },
    {
        x: 251, yMax: 51, yMin: 58
    },
    {
        x: 258, yMax: 43, yMin: 60
    },
    {
        x: 265, yMax: 72, yMin: 61
    },
    {
        x: 272, yMax: 82, yMin: 60.5
    },
    {
        x: 279, yMax: 73, yMin: 59
    },

    {
        x: 286, yMax: 73, yMin: 58
    },
    {
        x: 293, yMax: 67, yMin: 55
    },
    {
        x: 300, yMax: 43, yMin: 53
    },
    {
        x: 307, yMax: 12, yMin: 54
    },
    {
        x: 314, yMax: 26, yMin: 54.5
    },
    {
        x: 321, yMax: 46, yMin: 56
    },
    {
        x: 328, yMax: 43, yMin: 58
    },
    {
        x: 335, yMax: 72, yMin: 60
    },
    {
        x: 342, yMax: 82, yMin: 62.5
    },
    {
        x: 349, yMax: 73, yMin: 64
    },
    {
        x: 356, yMax: 92, yMin: 65
    },
    {
        x: 363, yMax: 107, yMin: 66
    }
]

areaRangeData.forEach((point, i) => {
    areaRange.add({ position: (point.x * 24 * 60 * 60 * 1000), high: point.yMax, low: point.yMin })
})
