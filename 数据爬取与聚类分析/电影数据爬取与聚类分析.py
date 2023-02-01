#encoding=utf-8
"""
-*- coding: utf-8 -*-
@Time : 2022/5/10 上午 10:13
@Author : zhangQiLong
@Gitee : https://gitee.com/
"""

import re
import time

import matplotlib
import requests
import matplotlib.pyplot as plt
from bs4 import BeautifulSoup
import pyecharts
from pyecharts.charts import Bar
from pyecharts.charts import Pie
import pandas as pd
from pyecharts import options as opts
#设置字体为楷体
matplotlib.rcParams['font.sans-serif'] = ['KaiTi']
# 数据存放在列表里
datas = []
# 遍历十页数据
for k in range(10):
    print("正在抓取第{}页数据...".format(k + 1))
    url = 'https://movie.douban.com/top250?start=' + str(k * 25)
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.27"
    }
    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, 'html.parser')
    # 查找电影链接
    lists = soup.find_all('div', {'class': 'hd'})

    # 遍历每条电影链接
    for item in lists:
        href = item.a['href']
        # 休息一下，防止被封
        time.sleep(0.5)
        # 请求每条电影，获得详细信息
        response = requests.get(href, headers=headers)
        # 把获取好的电影数据打包成BeautifulSoup对象
        movie_soup = BeautifulSoup(response.text, 'html.parser')

        # 解析每条电影数据
        # 片名
        name = movie_soup.find('span', {'property': 'v:itemreviewed'}).text.split(' ')[0]
        # 上映年份
        year = movie_soup.find('span', {'class': 'year'}).text.replace('(', '').replace(')', '')
        # 评分
        score = movie_soup.find('strong', {'property': 'v:average'}).text
        # 评价人数
        votes = movie_soup.find('span', {'property': 'v:votes'}).text
        infos = movie_soup.find('div', {'id': 'info'}).text.split('\n')[1:11]
        # infos返回的是一个列表，我们只需要索引提取就好了
        # 导演
        director = infos[0].split(': ')[1]
        # 编剧
        scriptwriter = infos[1].split(': ')[1]
        # 主演
        actor = infos[2].split(': ')[1]
        # 类型
        filmtype = infos[3].split(': ')[1]
        # 国家/地区
        area = infos[4].split(': ')[1]

        # 数据清洗一下
        if '.' in area:
            area = infos[5].split(': ')[1].split(' / ')[0]
            # 语言
            language = infos[6].split(': ')[1].split(' / ')[0]
        else:
            area = infos[4].split(': ')[1].split(' / ')[0]
            # 语言
            language = infos[5].split(': ')[1].split(' / ')[0]
        if '大陆' in area or '中国香港' in area or '台湾' in area:
            area = '中国'
        if '戛纳' in area:
            area = '法国'
        # 时长
        times0 = movie_soup.find(attrs={'property': 'v:runtime'}).text
        times = re.findall('\d+', times0)[0]

        # 将数据写入列表
        datas.append({
            '片名': name,
            '上映年份': year,
            '评分': score,
            '评价人数': votes,
            '导演': director,
            '编剧': scriptwriter,
            '主演': actor,
            '类型': filmtype,
            '国家/地区': area,
            '语言': language,
            '时长(分钟)': times
        })
        print("电影《{0}》已爬取完成...".format(name))

# 写入到文件
df = pd.DataFrame(datas)
df.to_csv("豆瓣电影top250.csv", index=False, header=True, encoding='utf_8_sig')

# 选取部分列数据生成csv文件

data=pd.read_csv(r'豆瓣电影top250.csv')
df.head()
# 查看数据基本信息
data.info()
# 重复值检查
count=df.duplicated().value_counts()
print(count)
data.duplicated().value_counts()
data=data.drop(columns=["导演","编剧","主演","类型","国家/地区","语言"])
df = pd.DataFrame(data)
df.to_csv("豆瓣电影选取列.csv", index=False, header=True, encoding='utf_8_sig')
data.plot.scatter(x='评分',y='评价人数')
plt.show()

## 第二种方法
# # 读取数据  这里根据csv表的格式，将header=None不写
# # 需求确认：利用python将csv数据，选取某几列数据并将其导入到另一个csv文件中
# import pandas as pd
# import numpy as np
# # 具体实现如下：
# # 第一步：利用pd.read_csv()获取csv数据。
# data_ = pd.read_csv("豆瓣电影top250.csv",encoding='utf-8')
# # 第二步：利用loc[]选取其中三个字段，这里我选取片名,上映年份,评分,评价人数
# data_1 = data_.loc[:,["片名","上映年份","评分","评价人数","时长(分钟)"]]
# # 方法二：iloc[ ] ——实质就是切片操作
# # data_1 = data.iloc[:,0:3]
# # data_1 =np.array(data_1)
# # 第三步：导出到新csv
# data_1.to_csv("选取列.csv")

data['评分'].plot()
plt.xlabel('count')
plt.ylabel('score')
data['上映年份'].plot()
plt.xlabel('count')
plt.ylabel('year')
plt.show()

# -*- coding: utf-8 -*-
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.cluster import KMeans
from sklearn import datasets
plt.rcParams['font.sans-serif']=['SimHei'] #用来正常显示中文标签
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号


# K-means聚类分析
# -*- coding: utf-8 -*-
#K-means聚类算法

# 功能: 设置随机种子, 确保结果可复现
def make_seed(SEED=42):
    np.random.seed(SEED)


# 功能: 计算样本与聚类中心的距离, 返回离簇中心最近的类别
# params: sample: 单个数据样本, centers: k个簇中心
# return: 返回的是当前的样本数据属于那一个簇中心的id或者索引
def distance(sample, centers):
    # 这里用差的平方来表示距离
    d = np.power(sample - centers, 2).sum(axis=1)
    cls = d.argmin()
    return cls


# 功能: 对当前的分类子集进行可视化展示
def clusters_show(clusters, step):
    color = ["#cdd0d5", "blue", "pink"]
    marker = ["o", "o", "o"]
    plt.figure(figsize=(8, 8))
    plt.title("step: {}".format(step))
    plt.xlabel("Density", loc="center")
    plt.ylabel("Sugar Content", loc="center")
    # 用颜色区分k个簇的数据样本
    for i, cluster in enumerate(clusters):
        cluster = np.array(cluster)
        plt.scatter(cluster[:, 0], cluster[:, 1], c=color[i], marker=marker[i], s=150)
    plt.show()


# 功能: 根据输入的样本集与划分的簇数，分别返回k个簇样本
# params： data：样本集, k：聚类簇数
# return：返回是每个簇的簇类中心
def k_means(samples, k):

    data_number = len(samples)
    centers_flag = np.zeros((k,))

    # 随机在数据中选择k个聚类中心
    centers = samples[np.random.choice(data_number, k, replace=False)]
    print(centers)


    step = 0
    while True:
        # 计算每个样本距离簇中心的距离, 然后分到距离最短的簇中心中
        clusters = [[] for i in range(k)]
        for sample in samples:
            ci = distance(sample, centers)
            clusters[ci].append(sample)

        # 可视化当前的聚类结构
        clusters_show(clusters, step)

        # 分完簇之后更新每个簇的中心点, 得到了簇中心继续进行下一步的聚类
        for i, sub_clusters in enumerate(clusters):
            new_center = np.array(sub_clusters).mean(axis=0)
            # 如果数值有变化则更新, 如果没有变化则设置标志位为1，当所有的标志位为1则退出循环
            if (centers[i] != new_center).all():
                centers[i] = new_center
            else:
                centers_flag[i] = 1

        step += 1
        print("step:{}".format(step), "\n", "centers:{}".format(centers))
        if centers_flag.all():
            break

    return centers


# 功能: 根据簇类中心对簇进行分类，获取最后的分类结果
# params: samples是全部的数据样本，centers是聚类好的簇中心
# return: 返回的是子数组
def split_data(samples, centers):

    # 根据中心样本得知簇数
    k = len(centers)
    clusters = [[] for i in range(k)]
    for sample in samples:
        ci = distance(sample, centers)
        clusters[ci].append(sample)

    return clusters


if __name__ == '__main__':

    make_seed()
    # 导入数据
    data = pd.read_csv('豆瓣电影top250.csv')
    data.head()
    samples = data[["时长(分钟)", "评分"]].values
    # print(samples)

    centers = k_means(samples=samples, k=1)
    clusters = split_data(samples=samples, centers=centers)
    print(clusters)

# 电影数据聚类分析
# -*- coding: utf-8 -*-
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
from sklearn.cluster import KMeans
from sklearn import datasets
plt.rcParams['font.sans-serif']=['SimHei'] #用来正常显示中文标签
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号

def visual(X,y):
    fig = plt.figure(1, figsize=(6, 4))
    ax = Axes3D(fig, auto_add_to_figure=False)
    fig.add_axes(ax)
    ax.scatter(X[:, 3], X[:, 0], X[:, 2],c=labels.astype(np.float64), edgecolor='k')
    ax.w_xaxis.set_ticklabels([])
    ax.w_yaxis.set_ticklabels([])
    ax.w_zaxis.set_ticklabels([])
    ax.set_xlabel('评价人数')
    ax.set_ylabel('语言')
    ax.set_zlabel('时长')
    ax.set_title("聚类(电影数据的三个特征数据)")
    ax.dist = 12
    plt.show()

if __name__=='__main__':
    np.random.seed(5)
    iris = datasets.load_iris()
    X = iris.data
    y = iris.target
    # https://scikit-learn.org/stable/modules/clustering.html#clustering
    est = KMeans(n_clusters=3)
    # 对聚类的数据进行聚类
    est.fit(X)
    # 获得聚类标签 就是哪个数据对应的哪一类
    labels = est.labels_
    # print(labels) 可以对每个数据对应的聚类进行打印  比如[2 0 1] 分别对应第三类 第一类 第二类 因为是从0开始算
    # 也可以打印二维聚类  K-means 不管输入的是几维的数据都能去聚类 不用人为设定
    # 只需要 np.vstack(data1,data2).T 设置二维矩阵即可
    visual(X,y)

def visual(X,y):
    fig = plt.figure(1, figsize=(6, 4))
    ax = Axes3D(fig, auto_add_to_figure=False)
    fig.add_axes(ax)
    ax.scatter(X[:, 3], X[:, 0], X[:, 2],c=labels.astype(np.float64), edgecolor='k')
    ax.w_xaxis.set_ticklabels([])
    ax.w_yaxis.set_ticklabels([])
    ax.w_zaxis.set_ticklabels([])
    ax.set_xlabel('类型')
    ax.set_ylabel('评分')
    ax.set_zlabel('年份')
    ax.set_title("聚类(电影数据的三个特征数据)")
    ax.dist = 12
    plt.show()

if __name__=='__main__':
    np.random.seed(5)
    iris = datasets.load_iris()
    X = iris.data
    y = iris.target
    est = KMeans(n_clusters=3)
    est.fit(X)
    labels = est.labels_
    visual(X,y)


import pandas as pd
import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler,OneHotEncoder
from sklearn.metrics import silhouette_score # 导入轮廓系数指标
from sklearn.cluster import KMeans # KMeans模块
mpl.rcParams['font.sans-serif'] = [u'SimHei']
mpl.rcParams['axes.unicode_minus'] = False
raw_data = pd.read_csv(r'豆瓣电影top250.csv')
raw_data.head()
# 查看基本状态
raw_data.head(2)  # 打印输出前2条数据
raw_data.info()# 打印数据类型分布
raw_data.describe().round(2).T # 打印原始数据基本描述性信息
# 缺失值审查
na_cols = raw_data.isnull().any(axis=0)  # 查看每一列是否具有缺失值
na_cols
raw_data.isnull().sum().sort_values(ascending=False)# 查看具有缺失值的行总记录数
# 相关性分析
raw_data.corr().round(2).T # 打印原始数据相关性信息
# 相关性可视化展示
import seaborn as sns
corr = raw_data.corr().round(2)
sns.heatmap(corr,cmap='Reds',annot = True)
# 1 删除平均平均停留时间列
raw_data2 = raw_data.drop(['编剧'],axis=1)
# 类别变量取值
cols=["片名","上映年份","评分","评价人数","时长(分钟)"]
for x in cols:
    data=raw_data2[x].unique()
    print("变量【{0}】的取值有：\n{1}".format(x,data))
    print("-·"*20)
    # 字符串分类独热编码处理
    cols = ["片名","上映年份","评分","评价人数","时长(分钟)"]
    model_ohe = OneHotEncoder(sparse=False)  # 建立OneHotEncode对象
    ohe_matrix = model_ohe.fit_transform(raw_data2[cols])  # 直接转换
    print(ohe_matrix[:2])
    # 用pandas的方法
    ohe_matrix1 = pd.get_dummies(raw_data2[cols])
    ohe_matrix1.head(5)
# 数据标准化
sacle_matrix = raw_data2.iloc[:, 2:3]  # 获得要转换的矩阵
model_scaler = MinMaxScaler()  # 建立MinMaxScaler模型对象
data_scaled = model_scaler.fit_transform(sacle_matrix)  # MinMaxScaler标准化处理
print(data_scaled.round(2))
# # 合并所有维度
X = np.hstack((data_scaled, ohe_matrix))
# 通过平均轮廓系数检验得到最佳KMeans聚类模型
score_list = list()  # 用来存储每个K下模型的平局轮廓系数
silhouette_int = -1  # 初始化的平均轮廓系数阀值                                  初始化
for n_clusters in range(2, 8):  # 遍历从2到5几个有限组
    model_kmeans = KMeans(n_clusters=n_clusters)  # 建立聚类模型对象
    labels_tmp = model_kmeans.fit_predict(X)  # 训练聚类模型
    silhouette_tmp = silhouette_score(X, labels_tmp)  # 得到每个K下的平均轮廓系数      得到轮廓系数
    if silhouette_tmp > silhouette_int:  # 如果平均轮廓系数更高               越高说明聚类效果越好
        best_k = n_clusters  # 保存K将最好的K存储下来
        silhouette_int = silhouette_tmp  # 保存平均轮廓得分
        best_kmeans = model_kmeans  # 保存模型实例对象
        cluster_labels_k = labels_tmp  # 保存聚类标签
    score_list.append([n_clusters, silhouette_tmp])  # 将每次K及其得分追加到列表
print('{:*^60}'.format('K值对应的轮廓系数:'))
print(np.array(score_list))  # 打印输出所有K下的详细得分
print('最优的K值是:{0} \n对应的轮廓系数是:{1}'.format(best_k, silhouette_int))

# 总体思想（评价指标）还是怎么聚才能使得簇内距离足够小，簇与簇之间平均距离足够大来评判。
# 将原始数据与聚类标签整合
cluster_labels = pd.DataFrame(cluster_labels_k, columns=['clusters'])  # 获得训练集下的标签信息
merge_data = pd.concat((raw_data2, cluster_labels), axis=1)  # 将原始处理过的数据跟聚类标签整合
merge_data.head()
# 计算每个聚类类别下的样本量和样本占比
clustering_count = pd.DataFrame(merge_data['时长(分钟)'].groupby(merge_data['clusters']).count()).T.rename({'时长(分钟)': 'counts'})  # 计算每个聚类类别的样本量
clustering_ratio = (clustering_count / len(merge_data)).round(2).rename({'counts': 'percentage'})  # 计算每个聚类类别的样本量占比
print(clustering_count)
print("#"*30)
print(clustering_ratio)
# 计算各个聚类类别内部最显著特征值
cluster_features = []  # 空列表，用于存储最终合并后的所有特征信息
for line in range(best_k):  # 读取每个类索引
    label_data = merge_data[merge_data['clusters'] == line]  # 获得特定类的数据

    part1_data = label_data.iloc[:, 1:3]  # 获得数值型数据特征
    part1_desc = part1_data.describe().round(3)  # 得到数值型特征的描述性统计信息
    merge_data1 = part1_desc.iloc[2, :]  # 得到数值型特征的均值

    part2_data = label_data.iloc[:, 1:3]  # 获得字符串型数据特征
    part2_desc = part2_data.describe(include='all')  # 获得字符串型数据特征的描述性统计信息
    merge_data2 = part2_desc.iloc[2, :]  # 获得字符串型数据特征的最频繁值

    merge_line = pd.concat((merge_data1, merge_data2), axis=0)  # 将数值型和字符串型典型特征沿行合并
    cluster_features.append(merge_line)  # 将每个类别下的数据特征追加到列表



# 可视化柱形图一
data = pd.read_csv('豆瓣电影top250.csv')
year_counts = data['上映年份'].value_counts()
year_counts.columns = ['上映年份', '评分']
year_counts = year_counts.sort_index()
c = (
    Bar()
        .add_xaxis(list(year_counts.index))
        .add_yaxis('评分', year_counts.values.tolist())
        .set_global_opts(
        title_opts=opts.TitleOpts(title='各年份上映电影评分'),
        yaxis_opts=opts.AxisOpts(name='评分'),
        xaxis_opts=opts.AxisOpts(name='上映年份'),
        datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_='inside')], )
        .render('各年份上映电影评分.html')
)
# 可视化柱形图二
data = pd.read_csv('豆瓣电影top250.csv')
df = data.sort_values(by='评价人数', ascending=True)
c = (
    Bar()
        .add_xaxis(df['片名'].values.tolist()[-20:])
        .add_yaxis('评价人数', df['评价人数'].values.tolist()[-20:])
        .reversal_axis()
        .set_global_opts(
        title_opts=opts.TitleOpts(title='电影评价人数'),
        yaxis_opts=opts.AxisOpts(name='片名'),
        xaxis_opts=opts.AxisOpts(name='人数'),
        datazoom_opts=opts.DataZoomOpts(type_='inside'),
    )
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('电影评价人数前二十.html')
)

# 电影评分值柱形图分布.html
def score_view(data):
    grouped = data.groupby(by="评分")["片名"].size()
    grouped = grouped.sort_values(ascending=False)
    index = grouped.index
    values = grouped.values
    # 柱状图
    bar = Bar()  # (init_opts=opts.InitOpts(width="600px",height="1200px",page_title="2021年GDP"))
    bar.add_xaxis(index.tolist())
    bar.add_yaxis("", values.tolist())
    bar.set_global_opts(
        xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=10)),
        title_opts=opts.TitleOpts(title="评分值分布"),
        datazoom_opts=opts.DataZoomOpts(),  # 提供区域缩放的功能
    )

    bar.render_notebook()
    bar.render('电影评分值柱形图分布.html')

# 电影评分饼图占比.html

    pie = Pie()
    pie.add("", [list(z) for z in zip(index.tolist(), values.tolist())],
            radius=["30%", "75%"],
            center=["40%", "50%"],
            rosetype="radius")
    pie.set_global_opts(
        title_opts=opts.TitleOpts(title="各评分值占比"),
        legend_opts=opts.LegendOpts(
            type_="scroll", pos_left="80%", orient="vertical"
        ),
    ).set_series_opts(label_opts=opts.LabelOpts(formatter="{d}%"))
    pie.render_notebook()
    pie.render('电影评分饼图占比.html')


if __name__ == '__main__':
    df = pd.read_csv('豆瓣电影top250.csv')
    data = df.drop_duplicates(keep="first")  # 删掉重复值
    score_view(data)

# 电影评分值柱形图分布.html
def score_view(data):
    grouped = data.groupby(by="评分")["片名"].size()
    grouped = grouped.sort_values(ascending=False)
    index = grouped.index
    values = grouped.values
    # 柱状图
    bar = Bar()  # (init_opts=opts.InitOpts(width="600px",height="1200px",page_title="2021年GDP"))
    bar.add_xaxis(index.tolist())
    bar.add_yaxis("", values.tolist())
    bar.set_global_opts(
        xaxis_opts=opts.AxisOpts(axislabel_opts=opts.LabelOpts(rotate=10)),
        title_opts=opts.TitleOpts(title="评分值分布"),
        datazoom_opts=opts.DataZoomOpts(),  # 提供区域缩放的功能
    )

    bar.render_notebook()
    bar.render('电影评分值柱形图分布.html')

# 电影评分饼图占比.html
    pie = Pie()
    pie.add("", [list(z) for z in zip(index.tolist(), values.tolist())],
            radius=["30%", "75%"],
            center=["40%", "50%"],
            rosetype="radius")
    pie.set_global_opts(
        title_opts=opts.TitleOpts(title="各评分值占比"),
        legend_opts=opts.LegendOpts(
            type_="scroll", pos_left="80%", orient="vertical"
        ),
    ).set_series_opts(label_opts=opts.LabelOpts(formatter="{d}%"))
    pie.render_notebook()
    pie.render('电影评分饼图占比.html')


if __name__ == '__main__':
    df = pd.read_csv('豆瓣电影top250.csv')
    data = df.drop_duplicates(keep="first")  # 删掉重复值
    score_view(data)

# 可视化柱形图三
data = pd.read_csv('豆瓣电影top250.csv')
year_counts = data['时长(分钟)'].value_counts()
year_counts.columns = ['时长(分钟)', '评分']
year_counts = year_counts.sort_index()
c = (
    Bar()
        .add_xaxis(list(year_counts.index))
        .add_yaxis('评分', year_counts.values.tolist())
        .set_global_opts(
        title_opts=opts.TitleOpts(title='时长(分钟)与评分关系'),
        yaxis_opts=opts.AxisOpts(name='评分'),
        xaxis_opts=opts.AxisOpts(name='时长(分钟)'),
        datazoom_opts=[opts.DataZoomOpts(), opts.DataZoomOpts(type_='inside')], )
        .render('时长(分钟)与评分关系.html')
)
# 可视化柱形图四
data = pd.read_csv('豆瓣电影top250.csv')
df = data.sort_values(by='评价人数', ascending=True)
c = (
    Bar()
        .add_xaxis(df['时长(分钟)'].values.tolist()[-20:])
        .add_yaxis('评价人数', df['评价人数'].values.tolist()[-20:])
        .reversal_axis()
        .set_global_opts(
        title_opts=opts.TitleOpts(title='评价人数与时长关系'),
        yaxis_opts=opts.AxisOpts(name='时长(分钟)'),
        xaxis_opts=opts.AxisOpts(name='评价人数'),
        datazoom_opts=opts.DataZoomOpts(type_='inside'),
    )
        .set_series_opts(label_opts=opts.LabelOpts(position="right"))
        .render('评价人数与时长关系.html')
)