"""
-*- coding: utf-8 -*-
@Time : 2022/5/10 上午 10:13
@Author : zhangQiLong
@Gitee : https://gitee.com/
"""
# 电影数据聚类分析
# -*- coding: utf-8 -*-
import numpy as np
from mpl_toolkits.mplot3d import Axes3D
from sklearn.cluster import KMeans
from sklearn import datasets
import matplotlib.pyplot as plt
import pandas as pd
from pyecharts import options as opts
from pyecharts.charts import Bar
plt.rcParams['font.sans-serif']=['SimHei'] #用来正常显示中文标签
plt.rcParams['axes.unicode_minus']=False #用来正常显示负号

# 聚类分析一
def visual(X,y):
    fig = plt.figure(1, figsize=(6, 4))
    ax = Axes3D(fig, rect=[0, 0, .95, 1], elev=48, azim=134)
    fig.add_axes(ax)
    ax.scatter(X[:, 3], X[:, 0], X[:, 2],c=labels.astype(np.float), edgecolor='k')
    ax.w_xaxis.set_ticklabels([])
    ax.w_yaxis.set_ticklabels([])
    ax.w_zaxis.set_ticklabels([])
    ax.set_xlabel('片名')
    ax.set_ylabel('上映年份')
    ax.set_zlabel('评分')
    ax.set_title("聚类(电影数据的三个特征数据)")
    ax.dist = 12
    plt.show()

#聚类分析二
def visual(X,y):
    fig = plt.figure(1, figsize=(6, 4))
    ax1 = Axes3D(fig, rect=[0, 0, .95, 1], elev=48, azim=134)
    fig.add_axes(ax1)
    ax1.scatter(X[:, 3], X[:, 0], X[:, 2],c=labels.astype(np.float), edgecolor='k')
    ax1.w_xaxis.set_ticklabels([])
    ax1.w_yaxis.set_ticklabels([])
    ax1.w_zaxis.set_ticklabels([])
    ax1.set_xlabel('片名')
    ax1.set_ylabel('国家/地区')
    ax1.set_zlabel('语言')
    ax1.set_title("聚类(电影数据的三个特征数据)")
    ax1.dist = 12
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

if __name__ == '__main__':
    df = pd.read_csv('豆瓣电影top250.csv')
    data = df.drop_duplicates(keep="first")  # 删掉重复值
    score_view(data)

