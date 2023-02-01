
$(function(){


  init();

})
function init(){



  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

  //各类型观影人次
  var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
  histogramChart1.setOption({

     grid: {
         top: '20%',
         left: '32%'
     },
     xAxis: {
         show: false
     },
     yAxis: [{
         show: true,
         data:  ['爱情片','剧情片','喜剧片','恐怖片',],
         inverse: true,
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#fff',
             formatter: (value, index) => {
                 return [

                     `{lg|${index+1}}  ` + '{title|' + value + '} '
                 ].join('\n')
             },
             rich: {
                 lg: {
                     backgroundColor: '#339911',
                     color: '#fff',
                     borderRadius: 15,
                     // padding: 5,
                     align: 'center',
                     width: 15,
                     height: 15
                 },
             }
         },


     }, {
         show: true,
         inverse: true,
         data: [100, 100, 100, 100],
         axisLabel: {
             textStyle: {
                 fontSize: 12,
                 color: '#fff',
             },
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },

     }],
     series: [{
         name: '条',
         type: 'bar',
         yAxisIndex: 0,
         data: [40, 30, 20, 10],
         barWidth: 10,
         itemStyle: {
             normal: {
                 barBorderRadius: 20,
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}%'
             }
         },
     }, {
         name: '框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [100, 100, 100, 100],
         barWidth: 15,
         itemStyle: {
             normal: {
                 color: 'none',
                 borderColor: '#00c1de',
                 borderWidth: 3,
                 barBorderRadius: 15,
             }
         }
     }, ]
  })

 
  var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
  histogramChart2.setOption({

     grid: {
         top: '20%',
         left: '32%'
     },
     xAxis: {
         show: false
     },
     yAxis: [{
         show: true,
         data:  ['爱情片','剧情片','喜剧片','恐怖片',],
         inverse: true,
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             color: '#fff',
             formatter: (value, index) => {
                 return [

                     `{lg|${index+1}}  ` + '{title|' + value + '} '
                 ].join('\n')
             },
             rich: {
                 lg: {
                     backgroundColor: '#339911',
                     color: '#fff',
                     borderRadius: 15,
                     // padding: 5,
                     align: 'center',
                     width: 15,
                     height: 15
                 },
             }
         },


     }, {
         show: true,
         inverse: true,
         data: [100, 100, 100, 100],
         axisLabel: {
             textStyle: {
                 fontSize: 12,
                 color: '#fff',
             },
         },
         axisLine: {
             show: false
         },
         splitLine: {
             show: false
         },
         axisTick: {
             show: false
         },

     }],
     series: [{
         name: '条',
         type: 'bar',
         yAxisIndex: 0,
         data:  [22, 20, 50, 8],
         barWidth: 10,
         itemStyle: {
             normal: {
                 barBorderRadius: 20,
                 color: function(params) {
                     var num = myColor.length;
                     return myColor[params.dataIndex % num]
                 },
             }
         },
         label: {
             normal: {
                 show: true,
                 position: 'inside',
                 formatter: '{c}%'
             }
         },
     }, {
         name: '框',
         type: 'bar',
         yAxisIndex: 1,
         barGap: '-100%',
         data: [100, 100, 100, 100],
         barWidth: 15,
         itemStyle: {
             normal: {
                 color: 'none',
                 borderColor: '#00c1de',
                 borderWidth: 3,
                 barBorderRadius: 15,
             }
         }
     }, ]
  })

    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}部"
      },
      calculable : true,
      series : [
          {
              name:'票房组成',
              type:'pie',
              radius : [30, 110],
              center : ['50%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:6000, name:'爱情片'},
                  {value:4005, name:'剧情片'},
                  {value:8015, name:'喜剧片'},
                  {value:2025, name:'恐怖片'},
              ]
          }
      ]
    })


    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}元"
       },
       legend: {
        data:['爱情片','剧情片','喜剧片','恐怖片',],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "元"
                  },
              },
          }
      ],
      series : [
          {
              name:'爱情片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[500100, 400012, 600021, 450504, 402600, 300830, 307010]
          },
          {
              name:'剧情片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[300000, 182000, 430004, 790001, 300000, 350000, 501000]
          },
          {
              name:'喜剧片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[130020, 511032, 606001, 500234, 400120, 400090, 300320]
          },
          {
              name:'恐怖片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[300200, 100032, 200061, 100034, 100020, 100029, 130002]
          }
      ]

    })


    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}人"
       },
       legend: {
        data:['爱情片','剧情片','喜剧片','恐怖片',],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "人"
                  },
              },
          }
      ],
      series : [
          {
              name:'爱情片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[30120, 12002, 22001, 50024, 40060, 53000, 60010]
          },
          {
              name:'剧情片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[30130, 20682, 30534, 10691, 20490, 50130, 51010]
          },
          {
              name:'喜剧片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[20320, 30132, 20161, 30134, 40112, 20190, 50120]
          },
          {
              name:'恐怖片',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[10320, 10132, 20461, 10034, 10202, 20093, 10222]
          }
      ]

    })


    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}亿"
      },
      calculable : true,
      series : [
          {
              name:'电影类型分布',
              type:'pie',
              radius : [30, 110],
              center : ['45%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:60, name:'爱情片'},
                  {value:43, name:'剧情片'},
                  {value:100, name:'喜剧片'},
                  {value:20, name:'恐怖片'},
              ]
          }
      ]
    })


    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption( {

      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}%"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['爱情片','剧情片','喜剧片','恐怖片',],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "%"
                  },
              },
          }
      ],
      series : [
          {
              name:'电影种类占比',
              type:'bar',
              barWidth:30,
              data:[60,80,70,50],
          },
      ]
    });


    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption( {
      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}天"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['爱情片','剧情片','喜剧片','恐怖片',],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
                  },
              },
              splitLine: {
                  "show": false
              },
              axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "天"
                  },
              },
          }
      ],
      series : [
          {
              name:'平均增长天数',
              type:'bar',
              barWidth:30,
              data:[8,8,7,5],
          },
      ]
    });

}
