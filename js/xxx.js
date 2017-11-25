(function () {
    require.config({

        paths: {

            echarts: 'js/echart' //项目中前面所提到的map.js的文件路径

        },

        packages: [

            {

                name: 'BMap',                              //固定写法需要引入BMap

                location: 'Bmap',       //项目中全面所提到的Bmap下的main.js的文件路径

                main: 'main  '

            }

        ]

    });





    require(

        [

            'echarts',

            'BMap',

            'echarts/chart/map'

        ],

        function (echarts, BMapExtension) {
            $('#main').css({

                height:500,

                width: 1200

            });





            // 初始化地图

            var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{

                enableMapClick: false

            });

            var map = BMapExt.getMap();

            var container = BMapExt.getEchartsContainer();





            var startPoint = {

                x: 124.114129,

                y: 47.550339

            };





            var point = new BMap.Point(startPoint.x, startPoint.y);

            map.centerAndZoom(point, 5);

            map.enableScrollWheelZoom(true);

            option ={
//这里进行地图的具体详细设置，主要series里面type的类型为map而mapType的类型为none： type:'map',
                mapType: 'none',
            }

            var myChart = BMapExt.initECharts(container);

            window.onresize = myChart.onresize;

            BMapExt.setOption(option);



        }
}