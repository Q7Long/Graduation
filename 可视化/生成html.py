from pyecharts.charts import *
from pyecharts.components import Table
from pyecharts import options as opts
from pyecharts.commons.utils import JsCode
import random
import datetime
from pyecharts.globals import CurrentConfig

CurrentConfig.ONLINE_HOST = "https://cdn.kesci.com/lib/pyecharts_assets/"
province = [
    '广东',
    '湖北',
    '湖南',
    '四川',
    '重庆',
    '黑龙江',
    '浙江',
    '山西',
    '河北',
    '安徽',
    '河南',
    '山东',
    '西藏']
data = [(i, random.randint(50, 150)) for i in province]

geo = (
    Geo()
    .add_schema(maptype="china")
    .add("", data)
        # 网址：https://www.heywhale.com/mw/project/5eb7958f366f4d002d783d4a
        # 在中间引入这段代码即可
    .set_series_opts(label_opts=opts.LabelOpts(position="right"))
            .render('中国地图.html')
)


# 虚假数据
data = [[i, j, random.randint(0, 100)] for i in range(24) for j in range(7)]
hour_list = [str(i) for i in range(24)]
week_list = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

heat = (HeatMap()
        .add_xaxis(hour_list)
        .add_yaxis("", week_list, data)
.set_series_opts(label_opts=opts.LabelOpts(position="right"))
            .render('方格图.html')
        )


data = [(random.randint(0, 100), random.randint(0, 100), random.randint(0, 100)) for _ in range(100)]

scatter3D = (Scatter3D()
             .add("", data)
                # 网址：https://www.heywhale.com/mw/project/5eb7958f366f4d002d783d4a
                # 在中间引入这段代码即可
            .set_series_opts(label_opts=opts.LabelOpts(position="right"))
                    .render('3D散点图.html')
             )



data = [[i, j, random.randint(0, 100)] for i in range(24) for j in range(7)]
hour_list = [str(i) for i in range(24)]
week_list = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']


bar3D = (
    Bar3D()
    .add(
        "",
        data,
        xaxis3d_opts=opts.Axis3DOpts(hour_list, type_="category"),
        yaxis3d_opts=opts.Axis3DOpts(week_list, type_="category"),
        zaxis3d_opts=opts.Axis3DOpts(type_="value"),
    )
        # 在中间引入这段代码即可
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('3D直方图.html')
)


from pyecharts.faker import POPULATION


mapglobe = (
    MapGlobe()
    .add_schema()
    .add(
        series_name="",
        maptype="world",
        data_pair=POPULATION[1:]
    )
        # 在中间引入这段代码即可
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('3D地球.html')
)


# 虚假数据
x_data = [random.randint(0, 100) for _ in range(20)]
y_data = [random.randint(0, 100) for _ in range(20)]

# 将x轴设置为数值类型
scatter = (Scatter()
           .add_xaxis(x_data)
           .add_yaxis('', y_data)
           .set_global_opts(xaxis_opts=opts.AxisOpts(type_='value'))
# 在中间引入这段代码即可
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('坐标轴类型.html')
           )

# 虚假数据
x_data = list(range(1990,2020))
y_data_1 = [random.randint(0, 100) for _ in x_data]
y_data_2 = [random.randint(0, 100) for _ in x_data]


bar = (
    Bar()
    .add_xaxis(x_data)
    .add_yaxis('图例1', y_data_1)
    .add_yaxis('图例2', y_data_2)
    .set_global_opts(datazoom_opts=opts.DataZoomOpts(orient="vertical"))
# 在中间引入这段代码即可
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('缩放Y轴.html')
)


# 虚假数据
x_data = ['Apple', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Meizu']
y_data_1 = [123, 153, 89, 107, 98, 23]
y_data_2 = [231, 321, 135, 341, 245, 167]
y_data_3 = [223, 453, 189, 207, 221, 123]

# 注意区分
line = (Line()
        .add_xaxis(x_data)
        .add_yaxis('1', y_data_1, color='green')
        .add_yaxis('2', y_data_2, color='green', linestyle_opts=opts.LineStyleOpts(color='black'))
        .add_yaxis('3', y_data_3, linestyle_opts=opts.LineStyleOpts(color='black'))
# 在中间引入这段代码即可
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('折线图.html')
        )

# 虚假数据
x_data = ['Apple', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'Meizu']
y_data_1 = [123, 153, 89, 107, 98, 23]
y_data_2 = [231, 321, 135, 341, 245, 167]

effectScatter = (EffectScatter()
                 .add_xaxis(x_data)
                 .add_yaxis('', y_data_1,
                            effect_opts=opts.EffectOpts(scale=10, period=5))
                .add_yaxis('', y_data_2,
                            effect_opts=opts.EffectOpts(scale=5, period=10))
# 在中间引入这段代码即可
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('范围 & 周期.html')
                 )





