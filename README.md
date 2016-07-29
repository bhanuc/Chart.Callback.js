# Chart.Callback.js

A plugin to add callbacks to your Chartjs instance.

It is useful to make charts more interactive, like getting range when zooming in/out

## Configuration

To configure the Callback plugin, you can simply add new config options to your chart config. Remember only add callbacks that are important to you. Remove useless empty functions before using it.

```javascript
{
	// Container for pan options
	chartCallBacks: {
    beforeInit: function(chartInstance) { },
    afterInit: function(chartInstance) { },

    resize: function(chartInstance, newChartSize) { },

    beforeUpdate: function(chartInstance) { },
    afterScaleUpdate: function(chartInstance) { }
    beforeDatasetsUpdate: function(chartInstance) { }
    afterDatasetsUpdate: function(chartInstance) { }
    //this is useful after resize/zoom operation is complete
    afterUpdate: function(chartInstance) { },

    // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
    // to do something on each animation frame
    beforeRender: function(chartInstance) { },

    // Easing is for animation
    beforeDraw: function(chartInstance, easing) { },
    afterDraw: function(chartInstance, easing) { },
    // Before the datasets are drawn but after scales are drawn
    beforeDatasetsDraw: function(chartInstance, easing) { },
    afterDatasetsDraw: function(chartInstance, easing) { },

    destroy: function(chartInstance) { }
}
```

## Installation

To download a zip, go to the Chart.Callback.js on Github

## TODO
To install via npm :

```bash
npm install Chart.Callback.js --save
```

## Documentation

You can find documentation for Chart.js at [www.chartjs.org/docs](http://www.chartjs.org/docs).

Examples for this plugin are available in the [samples folder](samples).


## Contributing

Before submitting an issue or a pull request to the project, please take a moment to look over the [contributing guidelines](https://github.com/chartjs/Chart.callback.js/blob/master/CONTRIBUTING.md) first.

## License

Chart.Callback.js is available under the [MIT license](http://opensource.org/licenses/MIT).
