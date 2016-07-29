/*!
 * Chart.CallBacks.js
 * http://chartjs.org/
 * Version: 0.0.1
 *
 * Copyright 2016 Bhanu Pratap Chaudhary
 * Released under the MIT license
 * https://github.com/chartjs/Chart.Zoom.js/blob/master/LICENSE.md
 */
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [
        function(require, module, exports) {

        }, {}
    ],
    2: [
        function(require, module, exports) {
            // Get the chart variable
            var Chart = require('chart.js');
            Chart = typeof(Chart) === 'function' ? Chart : window.Chart;



            var callBackPlugin = {
                beforeInit: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.beforeInit) {
                        chartInstance.options.chartCallBacks.beforeInit(chartInstance);
                    }
                },
                afterInit: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterInit) {
                        chartInstance.options.chartCallBacks.afterInit(chartInstance);
                    }
                },

                resize: function(chartInstance, newChartSize) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.resize) {
                        chartInstance.options.chartCallBacks.resize(chartInstance, newChartSize);
                    }
                },

                beforeUpdate: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.beforeUpdate) {
                        chartInstance.options.chartCallBacks.beforeUpdate(chartInstance);
                    }
                },
                afterScaleUpdate: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterScaleUpdate) {
                        chartInstance.options.chartCallBacks.afterScaleUpdate(chartInstance);
                    }
                },
                beforeDatasetsUpdate: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterDatasetsUpdate) {
                        chartInstance.options.chartCallBacks.afterDatasetsUpdate(chartInstance);
                    }
                },
                afterDatasetsUpdate: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterDatasetsUpdate) {
                        chartInstance.options.chartCallBacks.afterDatasetsUpdate(chartInstance);
                    }
                },
                afterUpdate: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterUpdate) {
                        chartInstance.options.chartCallBacks.afterUpdate(chartInstance);
                    }
                },

                // This is called at the start of a render. It is only called once, even if the animation will run for a number of frames. Use beforeDraw or afterDraw
                // to do something on each animation frame
                beforeRender: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.beforeRender) {
                        chartInstance.options.chartCallBacks.beforeRender(chartInstance);
                    }
                },

                // Easing is for animation
                beforeDraw: function(chartInstance, easing) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.beforeDraw) {
                        chartInstance.options.chartCallBacks.beforeDraw(chartInstance, easing);
                    }
                },
                afterDraw: function(chartInstance, easing) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterDraw) {
                        chartInstance.options.chartCallBacks.afterDraw(chartInstance, easing);

                    }
                },
                // Before the datasets are drawn but after scales are drawn
                beforeDatasetsDraw: function(chartInstance, easing) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.beforeDatasetsDraw) {
                        chartInstance.options.chartCallBacks.beforeDatasetsDraw(chartInstance, easing);
                    }
                },
                afterDatasetsDraw: function(chartInstance, easing) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.afterDatasetsDraw) {
                        chartInstance.options.chartCallBacks.afterDatasetsDraw(chartInstance, easing);
                    }
                },

                destroy: function(chartInstance) {
                    if (chartInstance.options.chartCallBacks && chartInstance.options.chartCallBacks.destroy) {
                        chartInstance.options.chartCallBacks.destroy(chartInstance);
                    }
                }
            };

            Chart.pluginService.register(callBackPlugin);

        }, {
            "chart.js": 1
        }
    ]
}, {}, [2]);