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
sacle_matrix = raw_data2.iloc[:, 1:2]  # 获得要转换的矩阵
model_scaler = MinMaxScaler()  # 建立MinMaxScaler模型对象
data_scaled = model_scaler.fit_transform(sacle_matrix)  # MinMaxScaler标准化处理
print(data_scaled.round(2))
# # 装换存放类型
X = np.hstack((data_scaled, ohe_matrix))
raw_data = np.array(raw_data)
print(raw_data)
data = [[i] for i in raw_data]
# print(data)
# 通过平均轮廓系数检验得到最佳KMeans聚类模型
# https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html#sklearn.cluster.KMeans
score_list = list()  # 用来存储每个K下模型的平局轮廓系数
silhouette_int = -1  # 初始化的平均轮廓系数阀值
for n_clusters in range(2, 8):  # 选择2到5个有限组
    model_kmeans = KMeans(n_clusters=3)  # 建立聚类模型对象 说明把数据分为3类
    labels_tmp = model_kmeans.fit_predict(X)  # 训练聚类结果
    silhouette_tmp = silhouette_score(X, labels_tmp)  # 得到每个K下的平均轮廓系数
    if silhouette_tmp > silhouette_int:  # 如果平均轮廓系数更高
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
