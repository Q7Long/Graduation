$(function () {
    //echart_1
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        myChart.clear();
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万元"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['科幻', '爱情', '喜剧', '歌舞', '冒险', '惊悚', '漫威', 'DC', '功夫', '侦探', '灾难', '拳击', '纪录', '西部'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 280.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}%'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 30.51,
                    name: '纪录',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                {
                    value: 40.77,
                    name: '灾难',
                    itemStyle: {
                        normal: {
                            color: '#ad46f3'
                        }
                    }
                },
                {
                    value: 40.87,
                    name: 'DC',
                    itemStyle: {
                        normal: {
                            color: '#5045f6'
                        }
                    }
                },
                {
                    value: 60.40,
                    name: '冒险',
                    itemStyle: {
                        normal: {
                            color: '#4777f5'
                        }
                    }
                },
                {
                    value: 70.46,
                    name: '漫威',
                    itemStyle: {
                        normal: {
                            color: '#44aff0'
                        }
                    }
                },
                {
                    value: 80.75,
                    name: '惊悚',
                    itemStyle: {
                        normal: {
                            color: '#45dbf7'
                        }
                    }
                },
                {
                    value: 90.39,
                    name: '喜剧',
                    itemStyle: {
                        normal: {
                            color: '#f6d54a'
                        }
                    }
                },
                {
                    value: 90.56,
                    name: '爱情',
                    itemStyle: {
                        normal: {
                            color: '#f69846'
                        }
                    }
                },
                {
                    value: 90.55,
                    name: '科幻',
                    itemStyle: {
                        normal: {
                            color: '#ff4343'
                        }
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: '#transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //各类型电影总数量分布
    function echart_7() {
        var myChart = echarts.init(document.getElementById('chart_7'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['喜剧','科幻','动画','灾难','恐怖','战争','爱情'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2017年','2018年','2019年','2020年','2021年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '单位(部)',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'喜剧',
                    type:'line',
                    data:[100, 158, 269, 298, 310]
                },
                {
                    name:'科幻',
                    type:'line',
                    data:[210, 224, 252, 178, 363]
                },
                {
                    name:'动画',
                    type:'line',
                    data:[178, 193, 175, 279, 385]
                },
                {
                    name:'灾难',
                    type:'line',
                    data:[303, 284, 271, 279, 281]
                },
                {
                    name:'恐怖',
                    type:'line',
                    data:[111, 271, 318, 327, 349]
                },
                {
                    name:'战争',
                    type:'line',
                    data:[195, 200, 188,137,298]
                },
                {
                    name:'爱情',
                    type:'line',
                    data:[190, 241, 141,244,340]
                }
            ]
        };
        myChart.setOption(option);
    }
    //电影营收情况
    function echart_8() {
        var myChart = echarts.init(document.getElementById('chart_8'));
        myChart.clear();
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['动画','冒险','奇幻','喜剧','科幻','家庭'],
                textStyle:{
                    color: '#fff'
                },
                top: '4%'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                orient: 'vertical',
                right: '1%',
                top: '2%',
                iconStyle: {
                    color: '#FFEA51',
                    borderColor: '#FFA74D',
                    borderWidth: 1,
                },
                feature: {
                    saveAsImage: {},
                    magicType: {
                        show: true,
                        type: ['line','bar','stack','tiled']
                    }
                }
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2016年','2017年','2018年','2020年','2021年'],
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            yAxis: {
                name: '利润',
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            series: [
                {
                    name:'动画',
                    type:'line',
                    data:[0.8,0.9, 1.4, 1.2,1.5]
                },
                {
                    name:'冒险',
                    type:'line',
                    data:[1.2, 1.1, 0.9, 0.8, 1.2]
                },
                {
                    name:'奇幻',
                    type:'line',
                    data:[1.4, 1.6, 1.7, 1.6, 1.7]
                },
                {
                    name:'喜剧',
                    type:'line',
                    data:[1.3,1.4,1.5,1.8,1.6]
                },
                {
                    name:'科幻',
                    type:'line',
                    data:[0.9, 1.5, 1.4,1.6,1.8]
                },
                {
                    name:'家庭',
                    type:'line',
                    data:[1.1, 0.6, 0.8,1.2,1.6]
                }
            ]
        };
        myChart.setOption(option);
    }
    //电影维度对比
    function echart_10(){
        var myChart = echarts.init(document.getElementById('chart_10'));
        myChart.clear();

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                top: '2%',
                left: '1%',
                textStyle: {
                    color: '#fff'
                },
                data:[
                      '4D','2D','3D',
                     ]
            },
            color: ['#FF4949','#FFA74D','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1','#4BF0FF','#44AFF0'],
            series: [
                {
                    name:'播放次数(部)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:452, name:'2021年播放总量(452亿)'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:60, name:'4D'},
                        {value:251, name:'2D'},
                        {value:169, name:'3D'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:204.17, name:'2020年播放量(204.17亿)'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:45.17, name:'4D'},
                        {value:120, name:'2D'},
                        {value:60, name:'3D'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:462, name:'2018年播放数量(462亿)'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:43.72, name:'4D'},
                        {value:264.21, name:'2D'},
                        {value:162.4, name:'3D'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:20755.74, name:'2019年播放数量(516亿)'},
                    ]
                },
                {
                    name:'播放次数(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data:[
                        {value:96, name:'4D'},
                        {value:285, name:'2D'},
                        {value:212, name:'3D'},
                    ]
                },
            ]
        };

        myChart.setOption(option);
    }
    //电影产地对比
    function echart_11(){
        var myChart = echarts.init(document.getElementById('chart_11'));
        myChart.clear();

        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                x: 'left',
                top: '2%',
                left: '1%',
                textStyle: {
                    color: '#fff'
                },
                data:['中国','国外']
            },
            color: ['#FF4949','#FFA74D','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            series: [
                {
                    name:'电影',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:204.17, name:'2020年电影播放总量(204.17亿)'},
                    ]
                },
                {
                    name:'年度总播放量(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:143.17, name:'中国'},
                        {value:58, name:'国外'},
                    ]
                },
                {
                    name:'电影播放量',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:516, name:'2019年电影播放总量(516亿)'}
                    ]
                },
                {
                    name:'年度总播放量(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','28%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:308, name:'中国'},
                        {value:208, name:'国外'},
                        // {value:137.96, name:'2014年国产电影播放量(部)年度总播放量(部)'},
                        // {value:2.65, name:'2014年国外电影播放量(部)年度总播放量(部)'},
                        // {value:131.48, name:'2013年国产电影播放量(部)年度总播放量(部)'},
                        // {value:2.97, name:'2013年国外电影播放量(部)年度总播放量(部)'}
                    ]
                },
                {
                    name:'电影播放量',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:326, name:'2017年电影播放总量(326亿)'},
                        // {value:142.47, name:'2015年公路营运拥有量(142.47万辆)'},
                        // {value:140.61, name:'2014年公路营运拥有量(140.61万辆)'},
                        // {value:134.45, name:'2013年公路营运拥有量(134.45万辆)'},
                    ]
                },
                {
                    name:'年度总播放量(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['28%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:276, name:'中国'},
                        {value:50, name:'国外'},
                        // {value:137.96, name:'2014年国产电影播放量(部)年度总播放量(部)'},
                        // {value:2.65, name:'2014年国外电影播放量(部)年度总播放量(部)'},
                        // {value:131.48, name:'2013年国产电影播放量(部)年度总播放量(部)'},
                        // {value:2.97, name:'2013年国外电影播放量(部)年度总播放量(部)'}
                    ]
                },
                {
                    name:'电影播放量',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '15%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:462, name:'2018年电影播放总量(462亿)'},
                    ]
                },
                {
                    name:'年度总播放量(部)',
                    type:'pie',
                    radius: ['20%', '30%'],
                    center: ['70%','70%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            position: 'outside',
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                
                    data:[
                        {value:322, name:'中国'},
                        {value:140, name:'国外'},
                        // {value:137.96, name:'2014年国产电影播放量(部)年度总播放量(部)'},
                        // {value:2.65, name:'2014年国外电影播放量(部)年度总播放量(部)'},
                        // {value:131.48, name:'2013年国产电影播放量(部)年度总播放量(部)'},
                        // {value:2.97, name:'2013年国外电影播放量(部)年度总播放量(部)'}
                    ]
                }
            ]
        };

        myChart.setOption(option);
    }
    //操作按钮
    $('.t_btn5').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        echart_1();
    });
    $('.t_btn6').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos5').css('display', 'block');
        echart_3();
    });
    $('.t_btn7').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos7').css('display', 'block');
        echart_7();
    });
    $('.t_btn8').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        echart_8();
    });
    $('.t_btn10').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos10').css('display', 'block');
        echart_10();
    });
    $('.t_btn11').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos11').css('display', 'block');
        echart_11();
    });
    $('.t_btn13').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos13').css('display', 'block');
        echart_13();
    });
    //获取地址栏参数
    $(function(){
        function getUrlParms(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
                if(r!=null)
                return unescape(r[2]);
                return null;
            }
            var id = getUrlParms("id");  
            if(id == 2){
                $('.center_text').css('display', 'none');
                $('.t_cos10').css('display', 'block');
                echart_10();
            }
            if(id == 3){
                $('.center_text').css('display', 'none');
                $('.t_cos11').css('display', 'block');
                echart_11();
            }
            if(id == 4){
                $('.center_text').css('display', 'none');
                $('.t_cos1').css('display', 'block');
                echart_2();
            }
            if(id == 5){
                $('.center_text').css('display', 'none');
                $('.t_cos6').css('display', 'block');
                echart_6();
            }
            if(id == 6){
                $('.center_text').css('display', 'none');
                $('.t_cos4').css('display', 'block');
                echart_1();
            }
            if(id == 7){
                $('.center_text').css('display', 'none');
                $('.t_cos8').css('display', 'block');
                echart_8();
            }
            if(id == 8){
                $('.center_text').css('display', 'none');
                $('.t_cos12').css('display', 'block');
                echart_12();
            }
            if(id == 9){
                $('.center_text').css('display', 'none');
                $('.t_cos13').css('display', 'block');
                echart_13();
            }
    });
});
