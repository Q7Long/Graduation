"""
-*- coding: utf-8 -*-
@Time : 2022/4/20 上午 10:13
@Author : zhangQiLong
@Gitee : https://gitee.com/
"""

# 读取数据  这里根据csv表的格式，将header=None不写
# 需求确认：利用python将csv数据，选取某几列数据并将其导入到另一个csv文件中
import pandas as pd
import numpy as np
# 具体实现如下：
# 第一步：利用pd.read_csv()获取csv数据。
data_ = pd.read_csv("豆瓣电影top250.csv",encoding='utf-8')
# 第二步：利用loc[]选取其中三个字段，这里我选取片名,上映年份,评分,评价人数
data_1 = data_.loc[:,["片名","上映年份","评分","评价人数","时长(分钟)"]]
# 方法二：iloc[ ] ——实质就是切片操作
# data_1 = data.iloc[:,0:3]
# data_1 =np.array(data_1)
# 第三步：导出到新csv
data_1.to_csv("选取列.csv")

