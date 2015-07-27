$(function () {
        $('#container').highcharts({
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Actuals and Estimates vs. Story Points'
            },
            subtitle: {
                text: 'Seahawks Sprint 43-46'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Points'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Hours'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 100,
                y: 70,
                floating: true,
                backgroundColor: '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '<b>{series.name}</b><br>',
                        pointFormat: '{point.x} Points, {point.y} Hours'
                    }
                }
            },
            series: [{
			type: 'line',
                regression: true ,
                regressionSettings: {
                    type: 'linear',
                    color:  'rgba(223, 83, 83, .9)'
                },
                name: 'Task Estimates',
                color: 'rgba(223, 83, 83, .5)',
            data: [[	0.5	,	3	]	,
[	0.5	,	3	]	,
[	1	,	14	]	,
[	1	,	12	]	,
[	1	,	10	]	,
[	1	,	10	]	,
[	1	,	10	]	,
[	1	,	10	]	,
[	1	,	9	]	,
[	1	,	8	]	,
[	1	,	8	]	,
[	1	,	8	]	,
[	1	,	7	]	,
[	1	,	7	]	,
[	1	,	7	]	,
[	1	,	7	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	5	]	,
[	1	,	5	]	,
[	1	,	2	]	,
[	2	,	16	]	,
[	2	,	15	]	,
[	2	,	15	]	,
[	2	,	14	]	,
[	2	,	10	]	,
[	2	,	7	]	,
[	2	,	2	]	,
[	3	,	24	]	,
[	3	,	24	]	,
[	3	,	22	]	,
[	3	,	19	]	,
[	3	,	18	]	,
[	3	,	16	]	,
[	3	,	14	]	,
[	3	,	13	]	,
[	3	,	12	]	,
[	3	,	11	]	,
[	3	,	10	]	,
[	3	,	7	]	,
[	3	,	6	]	,
[	3	,	6	]	,
[	5	,	50	]	,
[	5	,	50	]	,
[	5	,	39	]	,
[	5	,	32	]	,
[	5	,	26	]	,
[	5	,	25	]	,
[	5	,	25	]	,
[	5	,	15	]	,
[	8	,	65	]	,
[	8	,	63	]	,
[	13	,	103	]	,
[	13	,	101	]	,
[	21	,	161	]	,

]

        }, {
		type: 'line',
            name: 'Actuals',
            color: 'rgba(119, 152, 191, .5)',
            data: [[	0.5	,	3	]	,
[	0.5	,	3	]	,
[	1	,	14	]	,
[	1	,	12	]	,
[	1	,	10	]	,
[	1	,	10	]	,
[	1	,	10	]	,
[	1	,	8	]	,
[	1	,	9	]	,
[	1	,	8	]	,
[	1	,	8	]	,
[	1	,	8	]	,
[	1	,	7	]	,
[	1	,	5	]	,
[	1	,	6	]	,
[	1	,	7	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	6	]	,
[	1	,	5	]	,
[	1	,	5	]	,
[	1	,	2	]	,
[	2	,	16	]	,
[	2	,	15	]	,
[	2	,	15	]	,
[	2	,	16	]	,
[	2	,	10	]	,
[	2	,	2	]	,
[	2	,	2	]	,
[	3	,	25	]	,
[	3	,	24	]	,
[	3	,	22	]	,
[	3	,	27	]	,
[	3	,	18	]	,
[	3	,	16	]	,
[	3	,	17	]	,
[	3	,	15	]	,
[	3	,	17	]	,
[	3	,	31	]	,
[	3	,	21	]	,
[	3	,	16	]	,
[	3	,	17	]	,
[	3	,	15	]	,
[	5	,	52	]	,
[	5	,	52	]	,
[	5	,	52	]	,
[	5	,	39	]	,
[	5	,	30	]	,
[	5	,	26	]	,
[	5	,	25	]	,
[	5	,	15	]	,
[	8	,	74	]	,
[	8	,	77	]	,
[	13	,	104	]	,
[	13	,	107	]	,
[	21	,	167	]	,

]    
            }]
        });
    });