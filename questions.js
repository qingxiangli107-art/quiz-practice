const QUESTIONS = [
  {
    "id": 1,
    "set": 1,
    "type": "single",
    "question": "大数据的“4V”特征不包括以下哪一项？（ ）",
    "options": {
      "A": "Volume（大量）",
      "B": "Velocity（高速）",
      "C": "Variety（多样）",
      "D": "Validity（有效性）"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 2,
    "set": 1,
    "type": "single",
    "question": "大数据的核心价值主要在于？（ ）",
    "options": {
      "A": "存储海量数据",
      "B": "从数据中提取有用信息，支持决策",
      "C": "提高计算机硬件性能",
      "D": "减少数据丢失风险"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 3,
    "set": 1,
    "type": "single",
    "question": "以下哪个场景最能体现大数据的应用？ (  )",
    "options": {
      "A": "用Excel记录每日销售数据",
      "B": "通过分析社交媒体数据预测流行趋势",
      "C": "用U盘备份个人文件",
      "D": "用计算器进行简单数学运算"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 4,
    "set": 1,
    "type": "single",
    "question": "以下哪项是大数据分析可能带来的挑战？（  ）",
    "options": {
      "A": "数据量太大，难以有效处理",
      "B": "计算机显示器尺寸不够大",
      "C": "键盘鼠标反应速度慢",
      "D": "电源供电不稳定"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 5,
    "set": 1,
    "type": "single",
    "question": "大数据在医疗领域的典型应用是什么？ （  ）",
    "options": {
      "A": "用纸质病历记录患者信息",
      "B": "通过分析大量病例数据预测疾病风险",
      "C": "用计算器统计药品数量",
      "D": "手动整理医院值班表"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 6,
    "set": 1,
    "type": "single",
    "question": "企业使用大数据分析的主要目的是什么？ (  )",
    "options": {
      "A": "增加员工数量",
      "B": "优化运营、提升竞争力",
      "C": "购买更多服务器",
      "D": "减少办公用品消耗"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 7,
    "set": 1,
    "type": "single",
    "question": "以下哪种数据库适合处理非结构化数据？ （ ）",
    "options": {
      "A": "MySQL",
      "B": "Oracle",
      "C": "SQL Server",
      "D": "MongoDBs"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 8,
    "set": 1,
    "type": "single",
    "question": "数据仓库（Data Warehouse）的主要特点是什么？（ ）",
    "options": {
      "A": "面向事务处理（OLTP）",
      "B": "面向分析处理（OLAP）",
      "C": "仅存储结构化数据",
      "D": "不支持历史数据存储"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 9,
    "set": 1,
    "type": "single",
    "question": "数据湖（Data Lake）的最主要特点是什么？（ ）",
    "options": {
      "A": "只能存储结构化数据",
      "B": "可以存储原始、未加工的各类数据（如文本、图像、日志等）",
      "C": "数据必须经过严格清洗后才能存入",
      "D": "仅适用于小型企业"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 10,
    "set": 1,
    "type": "single",
    "question": "数据源在数据分析中的作用是什么？ (  )",
    "options": {
      "A": "提供原始数据，供后续处理和分析",
      "B": "仅用于备份数据",
      "C": "替代数据库的作用",
      "D": "仅存储最终的分析结果"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 11,
    "set": 1,
    "type": "single",
    "question": "以下哪种场景最适合使用数据湖？ (  )",
    "options": {
      "A": "需要实时交易处理的银行系统",
      "B": "存储和管理社交媒体上的海量非结构化数据",
      "C": "仅用于存储Excel表格",
      "D": "替代传统的数据仓库"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 12,
    "set": 1,
    "type": "single",
    "question": "数据湖的价值最主要体现在哪个方面？ (  )",
    "options": {
      "A": "提供统一的数据存储，支持多种分析需求",
      "B": "替代所有现有数据库",
      "C": "减少数据备份的需求",
      "D": "仅用于短期数据存储"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 13,
    "set": 1,
    "type": "single",
    "question": "数据清洗的主要目的是什么？ （  ）",
    "options": {
      "A": "提高数据存储速度",
      "B": "去除重复、错误或不完整的数据",
      "C": "增加数据量",
      "D": "加密数据"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 14,
    "set": 1,
    "type": "single",
    "question": "数据加工的主要目的是什么？（  ）",
    "options": {
      "A": "增加数据存储量",
      "B": "将原始数据转化为有价值、可用的信息",
      "C": "提高数据采集速度",
      "D": "减少数据备份次数"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 15,
    "set": 1,
    "type": "single",
    "question": "以下哪个场景最能体现数据加工的价值？(  )",
    "options": {
      "A": "直接存储传感器采集的原始数据",
      "B": "对销售数据进行清洗、分类后生成可视化报表",
      "C": "用U盘拷贝未处理的日志文件",
      "D": "手动记录每日温度数据"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 16,
    "set": 1,
    "type": "single",
    "question": "企业进行数据加工时，最可能面临的挑战是什么？（  ）",
    "options": {
      "A": "加工后的数据量比原始数据少",
      "B": "原始数据质量差导致加工效率低下",
      "C": "计算机键盘反应速度慢",
      "D": "显示器分辨率不足"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 17,
    "set": 1,
    "type": "single",
    "question": "数据标准化（Data Standardization）的主要作用是什么？ (  )",
    "options": {
      "A": "让不同来源的数据具有统一的格式和规范",
      "B": "提高数据存储的物理安全性",
      "C": "减少数据备份频率",
      "D": "仅用于数据可视化"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 18,
    "set": 1,
    "type": "single",
    "question": "数据加工在商业智能（BI）中的核心价值是什么？ (  )",
    "options": {
      "A": "提供可直接用于决策的高质量数据",
      "B": "增加服务器数量",
      "C": "替代所有人工分析",
      "D": "仅用于生成原始数据"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 19,
    "set": 1,
    "type": "single",
    "question": "数据分析与数据挖掘的核心目标是什么（ ）",
    "options": {
      "A": "收集尽可能多的数据",
      "B": "从数据中发现有价值的信息和规律",
      "C": "提高数据存储效率",
      "D": "制作漂亮的数据图表"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 20,
    "set": 1,
    "type": "single",
    "question": "超市通过分析顾客购买记录来优化商品摆放位置，这属于什么（ ）",
    "options": {
      "A": "数据采集",
      "B": "数据可视化",
      "C": "数据挖掘应用",
      "D": "数据备份"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 21,
    "set": 1,
    "type": "single",
    "question": "下列哪项最能体现预测性分析的特点？ (  )",
    "options": {
      "A": "统计上个月的销售额",
      "B": "分析客户流失原因",
      "C": "预测下季度市场需求",
      "D": "整理历史销售数据"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 22,
    "set": 1,
    "type": "single",
    "question": "在金融领域，数据分析与挖掘最常用于哪个方面 (  )",
    "options": {
      "A": "计算员工薪资",
      "B": "风险评估和信用评分",
      "C": "打印银行对账单",
      "D": "管理ATM机现金"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 23,
    "set": 1,
    "type": "single",
    "question": "数据挖掘中的“聚类分析”主要用于 (   )",
    "options": {
      "A": "将相似特征的数据分组",
      "B": "预测未来趋势",
      "C": "制作数据报表",
      "D": "提高数据存储速度"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 24,
    "set": 1,
    "type": "single",
    "question": "电商平台的“猜你喜欢”功能主要依赖于 (  )",
    "options": {
      "A": "数据备份技术",
      "B": "推荐算法分析用户行为",
      "C": "数据加密技术",
      "D": "数据录入速度"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 25,
    "set": 1,
    "type": "single",
    "question": "“数据可视化”的主要作用是什么？（ ）",
    "options": {
      "A": "让数据存储更安全",
      "B": "让复杂数据更直观、易于理解",
      "C": "提高数据计算速度",
      "D": "减少数据存储空间"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 26,
    "set": 1,
    "type": "single",
    "question": "下列哪种情况最适合使用数据可视化 (  )",
    "options": {
      "A": "需要向管理层汇报销售趋势",
      "B": "存储原始客户数据",
      "C": "编写数据处理代码",
      "D": "备份服务器数据"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 27,
    "set": 1,
    "type": "single",
    "question": "在医疗领域，数据可视化最可能用于 （ ）",
    "options": {
      "A": "记录病人基本信息",
      "B": "展示疫情传播趋势",
      "C": "计算药品库存",
      "D": "管理医院财务"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 28,
    "set": 1,
    "type": "single",
    "question": "以下哪种图表最适合展示各季度销售额占全年总销售额占比情况 ( )",
    "options": {
      "A": "折线图",
      "B": "饼图",
      "C": "柱状图",
      "D": "散点图"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 29,
    "set": 1,
    "type": "single",
    "question": "选择可视化形式时，最重要的考虑因素是 (  )",
    "options": {
      "A": "图表的美观程度",
      "B": "能否准确传达数据信息",
      "C": "使用哪种编程语言",
      "D": "数据量的大小"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 30,
    "set": 1,
    "type": "single",
    "question": "下列哪项不是优秀数据可视化的特征 ( )",
    "options": {
      "A": "清晰传达信息",
      "B": "误导性的图形展示",
      "C": "适合目标受众",
      "D": "突出重点数据"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 31,
    "set": 1,
    "type": "multiple",
    "question": "下列属于数据预处理的方法有（      ）",
    "options": {
      "A": "线性回归",
      "B": "抽样",
      "C": "标准化",
      "D": "转换"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 32,
    "set": 1,
    "type": "multiple",
    "question": "数据关联中，属于连接的是（      ）",
    "options": {
      "A": "数据处理",
      "B": "内部联接",
      "C": "外部联接",
      "D": "交叉联接"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 33,
    "set": 1,
    "type": "multiple",
    "question": "关于大数据的内涵，以下理解正确的是（      ）",
    "options": {
      "A": "大数据是一种思维方式和新的管理、治理路径",
      "B": "大数据里面蕴藏着大知识、大智慧、大价值和大发展",
      "C": "大数据在不同领域，又有不同的状况",
      "D": "大数据只是很大的数据"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 34,
    "set": 1,
    "type": "multiple",
    "question": "数据标准化方法或函数包括（      ）",
    "options": {
      "A": "最小最大标准化",
      "B": "Z-Score 标准化",
      "C": "零均值标准化",
      "D": "小数定标标准化"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 35,
    "set": 1,
    "type": "multiple",
    "question": "关于主键，下列说法正确的是（      ）",
    "options": {
      "A": "可以是表中的一个字段",
      "B": "是确定数据库中的表的记录的唯一标识字段",
      "C": "在一个表中，主键所在字段不可为空也不可重复",
      "D": "可以是表中的多个字段组成"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 36,
    "set": 1,
    "type": "multiple",
    "question": "使用下面哪三种图表类型能更好地表示随时间（年、月、日）或类别变化的趋势（       ）",
    "options": {
      "A": "饼图",
      "B": "折线图",
      "C": "面积图",
      "D": "柱形图"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 37,
    "set": 1,
    "type": "multiple",
    "question": "下列关于脏数据的说法中，正确的是（      ）",
    "options": {
      "A": "数据格式不规范",
      "B": "数据编码不统一",
      "C": "重复、错误数据",
      "D": "数据不完整"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 38,
    "set": 1,
    "type": "multiple",
    "question": "制作填充地图时需要先将（      ）相关字段转化为地理角色，并将生成的经纬度分别绑定到“横轴”和“纵轴”区域中。",
    "options": {
      "A": "国家",
      "B": "省份",
      "C": "城市",
      "D": "销售额"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 39,
    "set": 1,
    "type": "multiple",
    "question": "可视化评测的方法有（     ）",
    "options": {
      "A": "可用性测试",
      "B": "专家评估",
      "C": "对照实验",
      "D": "案例研究"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 40,
    "set": 1,
    "type": "multiple",
    "question": "下列关于数据生命周期管理的核心认识中，正确的是（      ）",
    "options": {
      "A": "数据从产生到被删除销毁的过程中，具有多个不同的数据存在阶段",
      "B": "在不同的数据存在阶段，数据的价值是不同的",
      "C": "根据数据价值的不同应该对数据采取不同的管理策略",
      "D": "数据生命周期管理旨在产生效益的同时，降低生产成本"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 41,
    "set": 1,
    "type": "multiple",
    "question": "下列数据类型中，不属于浮点型的是（      ）",
    "options": {
      "A": "Double",
      "B": "Text",
      "C": "Float",
      "D": "Char"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 42,
    "set": 1,
    "type": "multiple",
    "question": "可视化系统的交互延时指从用户操作的发生到系统返回结果所经过的时间，是决定交互有效性最重要的因素之一。延时的长短在很大程度上决定了一个可视化系统的可用性及用户体验。交互延时可以细分为多种形式，包括(     )",
    "options": {
      "A": "操作延时",
      "B": "页面渲染延时",
      "C": "反馈延时",
      "D": "系统更新延时"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 43,
    "set": 1,
    "type": "multiple",
    "question": "以下说法正确的是：（      ）",
    "options": {
      "A": "聚类分析是一组将研究对象分为相对同质的群组的统计分析技术",
      "B": "移动平均法适用于即期预测。",
      "C": "支持向量机不属于分类算法",
      "D": "在长耳朵数智优才平台中，如果需要进行模型训练，需要先进行数值组装"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 44,
    "set": 1,
    "type": "multiple",
    "question": "以下工作流节点中属于“算法”的有（      ）",
    "options": {
      "A": "逻辑回归",
      "B": "线性回归",
      "C": "神经网络",
      "D": "行转列"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 45,
    "set": 1,
    "type": "multiple",
    "question": "数据库中常用的数据类型有（      ）",
    "options": {
      "A": "文本型",
      "B": "数值型",
      "C": "日期型",
      "D": "货币型"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 46,
    "set": 1,
    "type": "multiple",
    "question": "以下数据加工函数中属于对字符串类型数据进行加工的是（      ）",
    "options": {
      "A": "左右去空",
      "B": "字符串替换",
      "C": "四则运算",
      "D": "取模"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 47,
    "set": 1,
    "type": "multiple",
    "question": "文档类型的数据文件一般有（     ）",
    "options": {
      "A": "CSV文件",
      "B": "Excel文件",
      "C": "PDF文件",
      "D": "XML文件"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 48,
    "set": 1,
    "type": "multiple",
    "question": "层次聚类的缺点（      ）",
    "options": {
      "A": "计算复杂度太高",
      "B": "奇异值也能产生很大影响",
      "C": "算法很可能聚类成链状",
      "D": "不需要预先制定聚类数"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 49,
    "set": 1,
    "type": "multiple",
    "question": "传统数据密集型行业积极探索和布局大数据应用的表现是（     ）",
    "options": {
      "A": "投资入股互联网电商行业",
      "B": "打通多源跨域数据",
      "C": "提高分析挖掘能力",
      "D": "实现科学决策与运营"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 50,
    "set": 1,
    "type": "multiple",
    "question": "下列哪些是数据分析及展示软件（     ）",
    "options": {
      "A": "Tableau",
      "B": "Qlik View",
      "C": "Word文档处理软件",
      "D": "IDEA代码编辑器"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 51,
    "set": 1,
    "type": "multiple",
    "question": "在数据库系统中，有哪几种狭义数据模型（      ）",
    "options": {
      "A": "实体联系模型",
      "B": "关系模型",
      "C": "网状模型",
      "D": "层次模型"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 52,
    "set": 1,
    "type": "multiple",
    "question": "缺失值从缺失的分布来讲可以分为（      ）",
    "options": {
      "A": "完全随机缺失",
      "B": "完全非随机缺失",
      "C": "不任意缺失",
      "D": "随机缺失"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 53,
    "set": 1,
    "type": "multiple",
    "question": "下列是MySQL比较运算符的是（      ）",
    "options": {
      "A": "!=",
      "B": "<>",
      "C": ">=",
      "D": "="
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 54,
    "set": 1,
    "type": "multiple",
    "question": "数据再利用的意义在于（     ）",
    "options": {
      "A": "挖掘数据的潜在价值",
      "B": "实现数据重组的创新价值",
      "C": "利用数据可扩展性拓宽业务领域",
      "D": "优化存储设备，降低设备成本"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 55,
    "set": 1,
    "type": "multiple",
    "question": "下列选项是关系型数据库基本特征的是（      ）",
    "options": {
      "A": "与列的次序无关",
      "B": "与行的次序无关",
      "C": "不同的列应有不同的列名",
      "D": "不同的列应有不同的数据类型"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 56,
    "set": 1,
    "type": "multiple",
    "question": "单位内部制度化的控制手段有（      ）",
    "options": {
      "A": "个人自我调整",
      "B": "约束",
      "C": "规划",
      "D": "评价"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 57,
    "set": 1,
    "type": "multiple",
    "question": "以下哪些学科和数据挖掘有密切联系（      ）",
    "options": {
      "A": "机器学习",
      "B": "计算机组成原理",
      "C": "人工智能",
      "D": "矿产挖掘"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 58,
    "set": 1,
    "type": "multiple",
    "question": "以下哪些是导致数据重复的原因（      ）",
    "options": {
      "A": "数据重复写入",
      "B": "数据集成",
      "C": "数据加工过程中的关联",
      "D": "数据压缩"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 59,
    "set": 1,
    "type": "multiple",
    "question": "K-Means优点有哪些（     ）",
    "options": {
      "A": "简单易于理解",
      "B": "时间复杂度低",
      "C": "简单易于实现",
      "D": "以上说法都不对"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 60,
    "set": 1,
    "type": "multiple",
    "question": "低耗能存储及高效率计算的要求，需要以下多种技术协同合作（      ）",
    "options": {
      "A": "分布式云存储技术",
      "B": "高性能并行计算技术",
      "C": "分布式并行数据库",
      "D": "分布式文件系统"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 61,
    "set": 1,
    "type": "judge",
    "question": "大数据分析只能用于商业领域，不能用于科学研究。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 62,
    "set": 1,
    "type": "judge",
    "question": "应用大数据过程中不需要关注数据隐私保护的问题。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 63,
    "set": 1,
    "type": "judge",
    "question": "数据湖可以存储任何类型的数据，无需预先定义数据结构。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 64,
    "set": 1,
    "type": "judge",
    "question": "数据源和数据湖是同一个概念，只是名称不同。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 65,
    "set": 1,
    "type": "judge",
    "question": "数据加工只是简单的数据搬运，不改变数据内容。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 66,
    "set": 1,
    "type": "judge",
    "question": "数据加工可以提升原始数据的价值，使其更适合分析。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 67,
    "set": 1,
    "type": "judge",
    "question": "数据可视化应该总是使用尽可能多的颜色来增强视觉效果。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 68,
    "set": 1,
    "type": "judge",
    "question": "所有类型的数据都适合用同一种可视化方式来呈现。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 69,
    "set": 1,
    "type": "judge",
    "question": "长耳朵数智优才是一个双引擎低代码大数据开发平台。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 70,
    "set": 1,
    "type": "judge",
    "question": "长耳朵数智优才中的数据挖掘模型可以多次训练。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 71,
    "set": 1,
    "type": "judge",
    "question": "抽样又称取样，从预研究的全部样品中抽取一部分样品单位。数据抽样是一种选择数据对象子集进行分析的常用方法。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 72,
    "set": 1,
    "type": "judge",
    "question": "雷达图适合展现多个关键特征和标准值的比对。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 73,
    "set": 1,
    "type": "judge",
    "question": "计数是对指定的字段求值，删除其中的重复元组，然后返回结果。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 74,
    "set": 1,
    "type": "judge",
    "question": "统计一词包含统计工作，统计资料，统计学等三种含义。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 75,
    "set": 1,
    "type": "judge",
    "question": "数据工作流节点可以连接一个或一个以上其他数据流节点。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 76,
    "set": 1,
    "type": "judge",
    "question": "在连接数据库时，需要输入连接信息，才能连接并读取数据。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 77,
    "set": 1,
    "type": "judge",
    "question": "数学建模是数学的一个分支，理论上是根据实际问题来建立数学模型，对数学模型来进行求解，然后根据结果去解决实际问题。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 78,
    "set": 1,
    "type": "judge",
    "question": "我们无法将仪表盘图设置为“温度计”状。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 79,
    "set": 1,
    "type": "judge",
    "question": "数据可视化是全链路大数据分析流程的第一步。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 80,
    "set": 1,
    "type": "judge",
    "question": "数据统计整理的就是是对各项整理的指标进行求和。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 81,
    "set": 1,
    "type": "case",
    "question": "某集团公司总经理在向全体员工总结公司本年度业绩、来年工作展望时，希望以图表形式清晰地展示出公司本年度五个业绩指标的结果，这五个业绩指标是：市场占有率、净利润增长率、营业额增长率、产品不良率、人才流失率，他最可能选择的两类图表是（     ）",
    "options": {
      "A": "柱形图",
      "B": "地图",
      "C": "热力图",
      "D": "折线图"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 82,
    "set": 1,
    "type": "case",
    "question": "某超市研究销售纪录数据后发现，买啤酒的人很大概率也会购买尿布，这种属于数据挖掘的不属于哪类问题？ （      ）",
    "options": {
      "A": "聚类",
      "B": "关联规则",
      "C": "分类",
      "D": "自然语言处理"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 83,
    "set": 1,
    "type": "case",
    "question": "某电商平台使用智能推荐系统为用户推送商品。以下关于该系统应用场景的描述，正确的是？ （      ）",
    "options": {
      "A": "系统根据用户历史浏览、购买行为进行个性化推荐",
      "B": "系统会实时分析用户当前会话中的点击序列，动态调整推荐结果",
      "C": "系统必须人工预设所有用户的兴趣标签才能工作",
      "D": "该系统属于一种智能体的典型应用"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 84,
    "set": 1,
    "type": "case",
    "question": "某城市交通管理部门部署了“智慧交通大脑”，利用大数据和AI技术缓解拥堵。以下哪些技术或应用在该场景中可能出现？(      )",
    "options": {
      "A": "通过路口摄像头+计算机视觉实时检测车流量与排队长度",
      "B": "利用智能体（如多智能体系统）协调多个路口的红绿灯配时",
      "C": "所有数据必须实时上传到单一中心服务器进行处理，无法边缘计算",
      "D": "基于历史交通数据和天气数据预测未来1小时内的交通态势"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 85,
    "set": 1,
    "type": "case",
    "question": "某制造企业部署工业智能体用于生产线质量检测。以下哪些描述符合实际？（     ）",
    "options": {
      "A": "检测模型只能在云端运行，无法部署到生产线边缘设备",
      "B": "智能体通过高分辨率摄像头实时采集产品图像",
      "C": "利用深度学习模型识别产品表面缺",
      "D": "智能体可以自动调整检测阈值，适应不同批次产品的差异"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 86,
    "set": 1,
    "type": "case",
    "question": "智能体可调用后台API查询用户账户余额（经授权）",
    "options": {
      "A": "可通过大数据分析用户历史投诉记录，优化智能体的应答策略",
      "B": "智能体完全替代所有人工客服，无需任何人工介入"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 87,
    "set": 1,
    "type": "case",
    "question": "某医院计划利用AI辅助诊断系统处理肺部CT影像。以下哪些是该系统的实际能力或常见特征？ (      )",
    "options": {
      "A": "基于大量标注影像数据训练的深度学习模型",
      "B": "系统完全取代放射科医生出具最终诊断报告",
      "C": "系统能够给出结节位置、大小和恶性概率的参考建议",
      "D": "系统可作为一个医疗决策支持智能体，与医生交互确认关键信息"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 88,
    "set": 1,
    "type": "case",
    "question": "在智能家居场景中，一个中央智能体（如智能音箱）连接多个设备。以下哪些行为是典型的多智能体或AI协作行为？ (      )",
    "options": {
      "A": "根据“离家模式”自动关闭灯光、空调并启动安防摄像头",
      "B": "通过学习用户作息习惯，主动在入睡前调节卧室温度",
      "C": "用户必须手动通过App控制每一个设备，智能体不参与自动决策",
      "D": "窗帘智能体与灯光智能体联动，在光线不足时自动闭合窗帘并开灯"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 89,
    "set": 1,
    "type": "case",
    "question": "在物流配送场景中，多个无人配送车（智能体）协同完成社区快递投递。以下哪些属于实际需解决的关键问题？ (      )",
    "options": {
      "A": "所有车辆必须运行完全相同的AI模型，不能有个性化调整",
      "B": "多车路径规划与避障，避免资源冲突",
      "C": "车辆与电梯、门禁等楼宇智能体进行通信与任务协商",
      "D": "利用大数据分析历史订单密度，优化车辆调度策略"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 1,
    "set": 2,
    "type": "single",
    "question": "下面哪一项不是数据思维框架的内容？ （ ）",
    "options": {
      "A": "决策思维",
      "B": "人才思维",
      "C": "数字化思维",
      "D": "数据价值链思维与工具思维"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 2,
    "set": 2,
    "type": "single",
    "question": "数字化企业的灵魂是下面哪一项？ （ ）",
    "options": {
      "A": "大数据全链路",
      "B": "数据运营",
      "C": "数字化",
      "D": "信息化"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 3,
    "set": 2,
    "type": "single",
    "question": "提出业务需求是下面哪种人才工作内容? (  )",
    "options": {
      "A": "业务型人才",
      "B": "应用型人才",
      "C": "咨询型人才",
      "D": "技术型人才"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 4,
    "set": 2,
    "type": "single",
    "question": "数据价值链思维中，企业在实施大数据项目的基本流程是（  ）",
    "options": {
      "A": "提出问题、探索业务问题、框定业务数据、开发数据流程、解决业务问题",
      "B": "提出问题、框定业务数据、探索业务问题、开发数据流程、解决业务问题",
      "C": "探索业务问题、提出问题、框定业务数据、开发数据流程、解决业务问题",
      "D": "框定业务数据、探索业务问题、提出问题、开发数据流程、解决业务问题"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 5,
    "set": 2,
    "type": "single",
    "question": "大数据全链路中，设计开发数据流程的一般顺序是（  ）",
    "options": {
      "A": "数据湖、数据源、数据汇集、数据加工、分析挖掘、数据可视化",
      "B": "数据源、数据可视化、数据汇集、数据湖、数据加工、分析挖掘",
      "C": "数据源、数据汇集、数据可视化、数据湖、数据加工、分析挖掘",
      "D": "数据源、数据汇集、数据加工、分析挖掘、数据湖、数据可视化"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 6,
    "set": 2,
    "type": "single",
    "question": "淘宝天猫的电商推荐系统属于下列哪种系统？ （  ）",
    "options": {
      "A": "交易型系统",
      "B": "分析驱动交易型系统",
      "C": "分析型系统",
      "D": "合规验证系统"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 7,
    "set": 2,
    "type": "single",
    "question": "数据湖的最主要特点是什么？（  ）",
    "options": {
      "A": "只能存储结构化数据",
      "B": "可以存储原始、未加工的各类数据（如文本、图像、日志等）",
      "C": "数据必须经过严格清洗后才能存入",
      "D": "仅适用于小型企业"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 8,
    "set": 2,
    "type": "single",
    "question": "数据源在数据分析中的作用是什么？ (   )",
    "options": {
      "A": "提供原始数据，供后续处理和分析",
      "B": "仅用于备份数据",
      "C": "替代数据库的作用",
      "D": "仅存储最终的分析结果"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 9,
    "set": 2,
    "type": "single",
    "question": "在数据源库的表中，存贮“年龄”的数据类型最恰当的是下列哪一项（  ）",
    "options": {
      "A": "时间类型",
      "B": "数字类型",
      "C": "字符串类型",
      "D": "日期类型"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 10,
    "set": 2,
    "type": "single",
    "question": "根据这三张表，可以查出订单支付方式表中ID是1的购买的商品名称是（  ）",
    "options": {
      "A": "面膜、苹果手机iPhone16",
      "B": "面膜",
      "C": "蓝牙耳机荣耀EarbudsX8、苹果手机iPhone16",
      "D": "面膜、蓝牙耳机荣耀EarbudsX8"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 11,
    "set": 2,
    "type": "single",
    "question": "数据加工在商业智能（BI）中的核心价值是什么？ (  )",
    "options": {
      "A": "提供可直接用于决策的高质量数据",
      "B": "增加服务器数量",
      "C": "替代所有人工分析",
      "D": "仅用于生成原始数据"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 12,
    "set": 2,
    "type": "single",
    "question": "人员记录表中出生日期数据是“2004-09-05”，该日期格式是什么? (  )",
    "options": {
      "A": "yyyy/MM/dd",
      "B": "yyyy-MM-dd",
      "C": "MM/dd/yyyy",
      "D": "MM-dd-yyyy"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 13,
    "set": 2,
    "type": "single",
    "question": "预测新能源汽车销售额，应当使用哪种类型的算法 (  )",
    "options": {
      "A": "分类类型算法",
      "B": "回归类型算法",
      "C": "聚类类型算法",
      "D": "关联规则算法"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 14,
    "set": 2,
    "type": "single",
    "question": "对不同班级的学生平均身高进行可视化，这时维度与指标分别是（  ）",
    "options": {
      "A": "平均身高、班级",
      "B": "班级、班级",
      "C": "班级、平均身高",
      "D": "平均身高、平均身高"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 15,
    "set": 2,
    "type": "single",
    "question": "在长耳朵数智优才图形化大数据平台的消息面板中，出现错误信息“message:引擎squid任务运行失 败.,EngineException:Table 'u28795db.tcount doesn't exist”。原因是（  ）",
    "options": {
      "A": "没有列名",
      "B": "没有创建落地对象",
      "C": "没有节点",
      "D": "没有云数据库"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 16,
    "set": 2,
    "type": "single",
    "question": "在长耳朵数智优才图形化大数据平台中， 数据落地的操作顺序是（  ）",
    "options": {
      "A": "拖拽云数据库节点、创建落地对象、填写落地属性信息",
      "B": "创建落地对象、填写落地属性信息、拖拽云数据库节点",
      "C": "填写落地属性信息、拖拽云数据库节点、创建落地对象",
      "D": "拖拽云数据库节点、填写落地属性信息、创建落地对象"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 17,
    "set": 2,
    "type": "single",
    "question": "在长耳朵数智优才图形化大数据平台中，数据落地的表名不能包含下面哪一项（  ）",
    "options": {
      "A": "中文",
      "B": "英文字母",
      "C": "数字",
      "D": "下划线"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 18,
    "set": 2,
    "type": "single",
    "question": "在长耳朵数智优才图形化大数据平台的消息面板中，报错误“预测数据的特征维数7与训练数据的特征维数6不相等”。原因是（  ）",
    "options": {
      "A": "没有预测转换器",
      "B": "没有预测节点",
      "C": "没有组装数据",
      "D": "预测组装属性的数量与训练组装的属性数量不相同"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 19,
    "set": 2,
    "type": "single",
    "question": "下列不属于常用的聚合方式的是（   ）",
    "options": {
      "A": "平均值",
      "B": "最小值",
      "C": "最大值",
      "D": "且"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 20,
    "set": 2,
    "type": "single",
    "question": "下列关于“数据可视化”的说法中，正确的是（ ）",
    "options": {
      "A": "数据可视化没有标准答案，不同的商业案例、原始数据均可能影响可视化图表的选择，最为重要的影响因素是：你想以怎样的形式向汇报对象展示结果；",
      "B": "数据可视化有标准答案，不同的商业案例、原始数据只能选择对应的一种可视化图表；",
      "C": "数据可视化是使数据以图表等方式展示的一种方法，EXCEL无法完成数据可视化操作；",
      "D": "可视化结果应当包含所有原始数据信息，需要向汇报对象展示出全部的数据结果；"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 21,
    "set": 2,
    "type": "single",
    "question": "关系数据库所谓的关系是指（   ）",
    "options": {
      "A": "各记录中的数据彼此有一定关联",
      "B": "数据模型满足一定条件的二维表格式",
      "C": "某两个数据库之间有一定的关系",
      "D": "表中两个字段有一定的关系"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 22,
    "set": 2,
    "type": "single",
    "question": "在对抽取数据进行过滤筛选时，可以使用边角运算符进行过滤筛选。运算符“ !> ”的含义是（   ）",
    "options": {
      "A": "用于测试两个表达式彼此不相等的条件的运算符",
      "B": "用于测试一个表达式是否不大于另一个表达式的运算符",
      "C": "用于测试一个表达式是否小于或等于另一个表达式的运算符",
      "D": "用于测试一个表达式是否大于另一个表达式的运算符"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 23,
    "set": 2,
    "type": "single",
    "question": "下列关于仪表盘图的说法中，错误的是（  ）",
    "options": {
      "A": "仪表盘图可以直观地表现出某个指标的进度或实际情况；",
      "B": "一个可视化组件中可以创建多个仪表盘",
      "C": "仪表盘中的最小值为目标值；",
      "D": "仪表盘中指针指向的位置为指针值，即当前值；"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 24,
    "set": 2,
    "type": "single",
    "question": "通过(  )工作流节点可以按照百分比随机从数据表中抽取部分数据。",
    "options": {
      "A": "抽样",
      "B": "转换",
      "C": "行转列",
      "D": "分组标签"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 25,
    "set": 2,
    "type": "single",
    "question": "下列关于饼图缺点的说法中，错误的是（  ）",
    "options": {
      "A": "当饼图中组成部分比例接近时，人眼很难准确判别；",
      "B": "数据项中不能有负值；",
      "C": "饼图不太适用于分类特别多的数据集，因为会使每个组成部分占比极小，不具有直观效果；",
      "D": "饼图展示的效果虽然直观，但不够简单；"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 26,
    "set": 2,
    "type": "single",
    "question": "朴素贝叶斯是建立在（  ）基础上的一种数据挖掘算法",
    "options": {
      "A": "线性变换",
      "B": "线性回归",
      "C": "贝叶斯定理",
      "D": "以上说法都不对"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 27,
    "set": 2,
    "type": "single",
    "question": "下列关于气泡图的说法中，错误的是（  ）",
    "options": {
      "A": "气泡图中气泡的颜色是可以调整的；",
      "B": "气泡大小的不同意味着所代表的的数值的不同；",
      "C": "气泡图中的图形形状一定是圆形；",
      "D": "可以为每个气泡打上标签使其展示的数值更加直观化；"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 28,
    "set": 2,
    "type": "single",
    "question": "在长耳朵数智优才图形化大数据平台的消息面板中，下面这个筛选条件错误在哪里（   ）",
    "options": {
      "A": "没有写表名",
      "B": "南京前后没有英文单引号",
      "C": "没有写列名",
      "D": "没有写等号"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 29,
    "set": 2,
    "type": "single",
    "question": "某公司总经理在公司年会上，希望清楚地展示出公司本年度发展的关键词、以及公司经历的令人记忆深刻的大事件，他可以选择的图表是（  ）",
    "options": {
      "A": "气泡图",
      "B": "面积图",
      "C": "地图",
      "D": "文本图"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 30,
    "set": 2,
    "type": "single",
    "question": "对于缺失值的处理中，不属于数据补齐的是（   ）",
    "options": {
      "A": "热卡填充",
      "B": "期望值最大化方法",
      "C": "人工填写",
      "D": "删除"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 31,
    "set": 2,
    "type": "multiple",
    "question": "下列属于统计分析的算法是（          ）",
    "options": {
      "A": "标准差",
      "B": "百分位",
      "C": "相关系数",
      "D": "聚类"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 32,
    "set": 2,
    "type": "multiple",
    "question": "在可视化的图表类型中，柱状图包括哪三类（      ）",
    "options": {
      "A": "分区柱状图",
      "B": "堆积柱状图",
      "C": "多系列柱状图",
      "D": "对比柱状图"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 33,
    "set": 2,
    "type": "multiple",
    "question": "数据库中的事务是特性包括（       ）",
    "options": {
      "A": "独立性",
      "B": "原子性",
      "C": "一致性",
      "D": "持久性"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 34,
    "set": 2,
    "type": "multiple",
    "question": "下列关于客户画像中的用户标签的说法，正确的有（        ）",
    "options": {
      "A": "对同一个用户，可以打上很多个标签",
      "B": "每个标签都指向用户的一类属性或行为",
      "C": "标签在精准营销方面能够发挥了独特的效用",
      "D": "标签可以更好的显示和突出用户的关键词条"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 35,
    "set": 2,
    "type": "multiple",
    "question": "饼图是用来展示每个分组相对总值的占比大小分布情况。饼图可根据哪两种属性展示每个分组相对总值的占比大小（      ）",
    "options": {
      "A": "横纵轴",
      "B": "半径",
      "C": "颜色",
      "D": "角度"
    },
    "answer": "C",
    "answer_multi": [
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 36,
    "set": 2,
    "type": "multiple",
    "question": "以下哪些是数据仓库的基本特征？（        ）",
    "options": {
      "A": "数据仓库的数据是集成的",
      "B": "数据仓库是面向事务的",
      "C": "数据仓库的数据是相对稳定的",
      "D": "数据仓库的数据是反映历史变化"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 37,
    "set": 2,
    "type": "multiple",
    "question": "矩形块图通常可以用哪两种属性来展示对应指标值的大小（      ）",
    "options": {
      "A": "矩形面积",
      "B": "颜色",
      "C": "位置",
      "D": "形状"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 38,
    "set": 2,
    "type": "multiple",
    "question": "数据库软件有（      ）",
    "options": {
      "A": "Microsoft SQL Server",
      "B": "MySQL",
      "C": "Oracle",
      "D": "R语音"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 39,
    "set": 2,
    "type": "multiple",
    "question": "数据加工是对原始数据按照需求进行各种各样的变换处理，最终形成简洁、规范、清晰、易于分析的数据。在实际业务处理中，数据通常是脏数据。以下情况中属于脏数据的有（         ）",
    "options": {
      "A": "数据缺失",
      "B": "数据冗余",
      "C": "数据噪声",
      "D": "数据存储"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 40,
    "set": 2,
    "type": "multiple",
    "question": "脏指数据可能存在以下哪些问题？（       ）",
    "options": {
      "A": "数据缺失",
      "B": "数据噪声",
      "C": "数据不一致",
      "D": "数据重复"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 41,
    "set": 2,
    "type": "multiple",
    "question": "大数据技术开发人才最需要具备（      ）等核心知识",
    "options": {
      "A": "数学与统计知识",
      "B": "计算机相关知识",
      "C": "马克思主义哲学知识",
      "D": "市场运营管理知识"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 42,
    "set": 2,
    "type": "multiple",
    "question": "聚类常用的距离有（       ）",
    "options": {
      "A": "最短距离",
      "B": "最长距离",
      "C": "中间距离",
      "D": "类平均距离"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 43,
    "set": 2,
    "type": "multiple",
    "question": "缺失值是指粗糙数据中由于缺少信息而造成的数据的聚类、分组、删失或截断。对于缺失值的处理方法包括（        ）",
    "options": {
      "A": "复制数据",
      "B": "删除缺失值数据",
      "C": "用平均值补齐缺失值",
      "D": "根据经验值补齐缺失值"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 44,
    "set": 2,
    "type": "multiple",
    "question": "数据清洗工作的目的主要是解决数据的（        ）",
    "options": {
      "A": "完整性",
      "B": "唯一性",
      "C": "合法性",
      "D": "一致性"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 45,
    "set": 2,
    "type": "multiple",
    "question": "下列关于柱形图优缺点的说法中，正确的有（      ）",
    "options": {
      "A": "可以通过柱子的长短明显看出各组别之间数据的差异；",
      "B": "若柱形图的横轴为时间，则可以清晰地看出数据结果随时间的变化趋势；",
      "C": "若数据集分类较多，则横轴将出现大量柱形，降低了柱形图的直观度；",
      "D": "可以为柱形图添加标签使其清晰地展示出不同柱子对应的纵轴数据；"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 46,
    "set": 2,
    "type": "multiple",
    "question": "重复数据产生的原因有（      ）",
    "options": {
      "A": "人为多次提交",
      "B": "数据集成时造成重复",
      "C": "系统自身问题导致重复写入",
      "D": "数据加工过程中产生数据重复"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 47,
    "set": 2,
    "type": "multiple",
    "question": "大数据技术的基础包括（       ）",
    "options": {
      "A": "分布式文件系统",
      "B": "分布式并行计算",
      "C": "关系型数据库",
      "D": "分布式数据库"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 48,
    "set": 2,
    "type": "multiple",
    "question": "下列关于文本图的说法中，正确的有（      ）",
    "options": {
      "A": "文本图通常适用于需要展示关键词、突出重点的业务场景",
      "B": "可以通过为文本图中的文本添加颜色、设置大小等方式达到强调的作用",
      "C": "文本图以其独有的“高级感”，近年来在实务中越来越多地被使用到",
      "D": "文本图可以代替热力点图使用"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 49,
    "set": 2,
    "type": "multiple",
    "question": "数据集中趋势在统计学中是指一组数据向某一中心值靠拢的程度，下面哪些统计值能表示数据的集中程度（      ）",
    "options": {
      "A": "平均值",
      "B": "中位数",
      "C": "众数",
      "D": "总数"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 50,
    "set": 2,
    "type": "multiple",
    "question": "定量变量就是通常所说的连续量，它们是由测量或计数、统计所得到的量，这些变量具有数值特征，以下属于定量变量的有（    ）",
    "options": {
      "A": "性别",
      "B": "长度",
      "C": "产量",
      "D": "职业"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 51,
    "set": 2,
    "type": "multiple",
    "question": "大数据处理流程可以概括为以下哪几步？（      ）",
    "options": {
      "A": "数据采集",
      "B": "数据导入和预处理",
      "C": "数据统计和分析",
      "D": "数据挖掘"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 52,
    "set": 2,
    "type": "multiple",
    "question": "以下哪些属于人工智能（AI）的典型应用？(        )",
    "options": {
      "A": "自动驾驶汽车感知周围环境",
      "B": "电子表格求和功能",
      "C": "人脸识别解锁手机",
      "D": "聊天机器人回答用户问题"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 53,
    "set": 2,
    "type": "multiple",
    "question": "关于“智能体”（Agent）的描述，正确的有(        )",
    "options": {
      "A": "智能体必须是一个物理机器人",
      "B": "智能体可以通过传感器感知环境，通过执行器影响环境",
      "C": "软件智能体（如推荐系统）也是智能体的一种",
      "D": "所有智能体都具备人类级别的智能"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 54,
    "set": 2,
    "type": "multiple",
    "question": "以下哪些技术属于机器学习的范畴？(         )",
    "options": {
      "A": "线性回归",
      "B": "决策树",
      "C": "排序算法（如快速排序）",
      "D": "支持向量机"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 55,
    "set": 2,
    "type": "multiple",
    "question": "关于“生成式AI”，以下说法正确的是（          ）",
    "options": {
      "A": "能生成新的文本、图像或音频内容",
      "B": "只能基于已有数据进行分类",
      "C": "典型模型包括GPT系列和扩散模型",
      "D": "不需要大量训练数据"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 56,
    "set": 2,
    "type": "multiple",
    "question": "关于“多智能体系统”，说法正确的有(        )",
    "options": {
      "A": "包含多个自主交互的智能体",
      "B": "智能体之间可能合作或竞争",
      "C": "每个智能体必须拥有完全相同的目标",
      "D": "常用于模拟交通、经济或战场场景"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 57,
    "set": 2,
    "type": "multiple",
    "question": "关于“智能体”与大语言模型（Large Language Model, LLM）的关系，说法正确的是 (          )",
    "options": {
      "A": "LLM可以直接作为智能体的核心决策模块",
      "B": "使用LLM的智能体具备长期记忆和规划能力（若设计得当）",
      "C": "所有基于LLM的系统都完全自主且无需人工干预",
      "D": "智能体可以利用LLM调用外部工具（如计算器、搜索引擎）"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 58,
    "set": 2,
    "type": "multiple",
    "question": "以下哪些是当前多智能体系统（Multi-Agent System）常见的研究或应用方向? (        )",
    "options": {
      "A": "多个自动驾驶车辆在交叉路口的协同通行",
      "B": "多个聊天机器人角色在游戏中互相竞争或合作",
      "C": "使用一个中心大脑统一控制所有个体，不允许分治法",
      "D": "无人机集群编队飞行"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 59,
    "set": 2,
    "type": "multiple",
    "question": "下列哪些属于人工智能的典型应用领域？(       )",
    "options": {
      "A": "图像识别与计算机视觉",
      "B": "自然语言处理（如机器翻译）",
      "C": "推荐系统（如电商猜你喜欢）",
      "D": "人工手动打开Word文档"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 60,
    "set": 2,
    "type": "multiple",
    "question": "下列哪些应用场景主要依赖大数据技术和人工智能结合？（     ）",
    "options": {
      "A": "电商平台的个性化推荐系统",
      "B": "医疗影像中的病灶自动识别",
      "C": "使用计算器进行四则运算",
      "D": "城市交通流量实时预测与信号灯动态调控"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 61,
    "set": 2,
    "type": "judge",
    "question": "Oracle是非关系型数据库的一种。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 62,
    "set": 2,
    "type": "judge",
    "question": "一般而言，分布式数据库是指物理上分散在不同地点，但在逻辑上是统一的数据库。因此分布式数据库具有物理上的独立性、逻辑上的一体性、性能上的可扩展性等特点。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 63,
    "set": 2,
    "type": "judge",
    "question": "词云图无法区分数值高低",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 64,
    "set": 2,
    "type": "judge",
    "question": "数据筛选的目的是为了提高之前收集存储的相关数据的可用性，更利于后期数据分析。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 65,
    "set": 2,
    "type": "judge",
    "question": "职工数据表中包含职工编号、所属部门、职工姓名、性别等特征列，当统计职工数据表中各部门的职工人数时，需要使用分组、计数。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 66,
    "set": 2,
    "type": "judge",
    "question": "线性回归不是用来预测数据的方法。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 67,
    "set": 2,
    "type": "judge",
    "question": "在反映数据随时间的变化趋势方面，只能选择线形图。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 68,
    "set": 2,
    "type": "judge",
    "question": "数据仓库就是一个面向主题的、集成的、相对稳定的、反映历史变化的数据集合。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 69,
    "set": 2,
    "type": "judge",
    "question": "仪表板视图下只能查看不能更改数据。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 70,
    "set": 2,
    "type": "judge",
    "question": "Excel可以进行简单的数据分析。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 71,
    "set": 2,
    "type": "judge",
    "question": "目前已经被广泛应用的生成式AI，已经具备了真正的自我意识和情感。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 72,
    "set": 2,
    "type": "judge",
    "question": "一个智能体（Agent）不能够与其它智能体进行通信。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 73,
    "set": 2,
    "type": "judge",
    "question": "在监督学习中，训练数据必须包含输入和对应的正确输出标签。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 74,
    "set": 2,
    "type": "judge",
    "question": "深度学习网络层数越多，在任意任务上的表现一定越好。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 75,
    "set": 2,
    "type": "judge",
    "question": "基于大数据的推荐系统一定会提升用户的长期满意度。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 76,
    "set": 2,
    "type": "judge",
    "question": "如果一个系统使用了大量数据，那么它一定属于人工智能系统。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 77,
    "set": 2,
    "type": "judge",
    "question": "智能体只能以软件形式存在，不能是物理设备。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 78,
    "set": 2,
    "type": "judge",
    "question": "所有大数据应用都必须包含人工智能算法。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 79,
    "set": 2,
    "type": "judge",
    "question": "自动驾驶汽车也可以看成是一个智能体。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 80,
    "set": 2,
    "type": "judge",
    "question": "AI的核心目标是模拟或扩展人类智能以解决实际问题。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 81,
    "set": 2,
    "type": "case",
    "question": "某集团公司财务总监在进行年度汇报时，须向公司总经理汇报本年净利润及最近五年净利润的趋势、每种产品净利润在公司总体净利润的占比，他最可能选择的两种图表类型是：（        ）",
    "options": {
      "A": "词云图",
      "B": "线形图",
      "C": "饼图",
      "D": "雷达图"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 82,
    "set": 2,
    "type": "case",
    "question": "某电商平台使用智能推荐系统向用户展示商品。以下说法正确的有：（      ）",
    "options": {
      "A": "系统可能基于用户的历史点击和购买数据构建推荐模型",
      "B": "该系统属于基于大数据的智能体",
      "C": "如果用户从未浏览过某类商品，系统一定不会推荐该类商品",
      "D": "协同过滤是该场景下常用的算法之一"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 83,
    "set": 2,
    "type": "case",
    "question": "城市交通管理系统中使用AI智能体控制红绿灯。以下正确的是（       ）",
    "options": {
      "A": "系统需要实时处理来自摄像头的视频数据",
      "B": "每个路口的控制单元可以被视为一个智能体",
      "C": "如果采用多智能体协作，路口之间可以交换信息以缓解拥堵",
      "D": "这种系统完全不需要人类设定任何目标"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 84,
    "set": 2,
    "type": "case",
    "question": "医疗影像AI辅助诊断系统。以下说法正确的有(         )",
    "options": {
      "A": "系统的性能完全不受训练数据质量影响",
      "B": "该系统通常基于深度学习模型",
      "C": "在真实临床中，系统可以直接给出最终诊断而不需医生复核",
      "D": "系统输出结果的可解释性在法律和伦理上是一个重要问题"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 85,
    "set": 2,
    "type": "case",
    "question": "智能客服机器人。以下哪些描述是合理的？ (       )",
    "options": {
      "A": "它使用自然语言处理技术理解用户问题",
      "B": "所有客服机器人都必须依赖预定义的规则，无法从对话数据中学习",
      "C": "它可以被视为一个感知-决策-回复的智能体",
      "D": "如果用户问出训练数据中未出现的问题，系统一定无法回答"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 86,
    "set": 2,
    "type": "case",
    "question": "银行反欺诈系统。以下正确的是（    ）",
    "options": {
      "A": "系统需要分析海量交易记录，属于大数据应用",
      "B": "系统必须实时或近实时检测异常交易",
      "C": "使用规则引擎（如“单笔超过5万元需复核”）属于AI范畴",
      "D": "无监督学习可以用来发现新型欺诈模式"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 87,
    "set": 2,
    "type": "case",
    "question": "自动驾驶汽车。以下说法正确的有：(       )",
    "options": {
      "A": "自动驾驶系统包含多个智能体（如感知、规划、控制模块）",
      "B": "高精地图和传感器大数据是自动驾驶的基础",
      "C": "目前的L5级（完全无人）自动驾驶已经大规模商业化",
      "D": "强化学习可用于训练驾驶决策策略"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 88,
    "set": 2,
    "type": "case",
    "question": "新闻资讯App的个性化推送。以下正确的是：（      ）",
    "options": {
      "A": "系统通过对用户阅读行为的大数据分析来构建兴趣画像",
      "B": "为增加点击率，系统故意推送虚假新闻是合理做法",
      "C": "推荐系统可能出现“过滤气泡”问题，使用户视野变窄",
      "D": "该系统不需要任何用户反馈即可优化推荐效果"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 89,
    "set": 2,
    "type": "case",
    "question": "智能家居中的语音助手（如控制灯光、空调）。以下正确的有 (    )",
    "options": {
      "A": "语音助手需要将语音转换为文本，属于自然语言理解",
      "B": "语音助手必须一直连接互联网才能执行任何操作",
      "C": "语音助手可以被视为一个以用户语音为输入、设备控制为输出的智能体",
      "D": "多个语音助手在同一个房间中无法独立唤醒"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 90,
    "set": 2,
    "type": "case",
    "question": "基于社交媒体情感分析的舆情监测系统。以下正确的有 (      )",
    "options": {
      "A": "系统需要采集和分析海量的文本数据",
      "B": "情感分析模型可以判断一条微博的情绪倾向（正面/负面/中性）",
      "C": "该系统只能处理英文数据，无法处理中文",
      "D": "该系统可以用于企业品牌声誉管理或政府舆情研判"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 1,
    "set": 3,
    "type": "single",
    "question": "以下选项中，通常用于表示各项大小与各项总和比例的是（ ）",
    "options": {
      "A": "饼图",
      "B": "柱形图",
      "C": "线性图",
      "D": "热力点图"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 2,
    "set": 3,
    "type": "single",
    "question": "下列关于热力点图的说法中，错误的是（ ）",
    "options": {
      "A": "热力点图是指根据数据的结果、以不同热力色展示出数据大小的图表；",
      "B": "在热力点图中，颜色越热烈往往意味着数值越大；",
      "C": "可以设置热力点图中的点的大小，使其反应出原始数据中其他指标的状况；",
      "D": "热力点图中无法设置标签属性；"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 3,
    "set": 3,
    "type": "single",
    "question": "聚合函数计数用于（  ）",
    "options": {
      "A": "计算元组个数",
      "B": "计算属性的个数",
      "C": "对一列中计算行数",
      "D": "计算字符串长度"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 4,
    "set": 3,
    "type": "single",
    "question": "下列哪个算法通常用于大数据中的“分类”任务？（  ）",
    "options": {
      "A": "K-Means 聚类",
      "B": "Apriori 关联规则",
      "C": "决策树分类",
      "D": "主成分分析"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 5,
    "set": 3,
    "type": "single",
    "question": "智能体（Agent）在人工智能中通常被定义为：（  ）",
    "options": {
      "A": "能通过图灵测试的机器人",
      "B": "能够感知环境并采取行动以实现目标的实体",
      "C": "只能执行预编程指令的软件程序",
      "D": "具有人类意识的情感计算模型"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 6,
    "set": 3,
    "type": "single",
    "question": "“过拟合”在机器学习中指的是：(  )",
    "options": {
      "A": "模型在训练集上表现差，在测试集上表现好",
      "B": "模型过于简单，无法学习数据中的规律",
      "C": "模型过度学习训练数据中的噪声和细节，导致泛化能力下降",
      "D": "模型训练时间过长导致数据泄露"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 7,
    "set": 3,
    "type": "single",
    "question": "在多智能体系统中，“协同”通常指：（  ）",
    "options": {
      "A": "智能体之间相互竞争以获取更多资源",
      "B": "智能体各自独立行动，互不通信",
      "C": "智能体通过协调合作实现共同目标",
      "D": "智能体试图预测并最小化其他智能体的收益"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 8,
    "set": 3,
    "type": "single",
    "question": "下列哪个场景主要体现了“人工智能”中的机器学习技术？(  )",
    "options": {
      "A": "用Excel进行数据求和",
      "B": "根据历史房价数据预测未来价格",
      "C": "用扫描仪扫描文档为PDF",
      "D": "手动编写商品分类规则"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 9,
    "set": 3,
    "type": "single",
    "question": "以下哪项是“监督学习”的典型例子？ （  ）",
    "options": {
      "A": "将相似新闻自动聚类",
      "B": "根据用户购买历史推荐商品（无标签）",
      "C": "根据带标签的邮件数据训练垃圾邮件分类器",
      "D": "机器人玩游戏时自己发现得分规律"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 10,
    "set": 3,
    "type": "single",
    "question": "以下哪项最有可能使用了“自然语言处理”技术？(  )",
    "options": {
      "A": "识别图片中的猫",
      "B": "汽车自动避障",
      "C": "智能音箱理解用户的天气查询",
      "D": "人脸识别打卡机"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 11,
    "set": 3,
    "type": "single",
    "question": "大数据技术中，Hadoop生态系统的核心组件分布式文件系统(HDFS)主要用于？(    )",
    "options": {
      "A": "分布式存储",
      "B": "实时数据库查询",
      "C": "图形界面显示",
      "D": "数据加密"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 12,
    "set": 3,
    "type": "single",
    "question": "以下哪种行为属于“多智能体系统”的典型问题？(    )",
    "options": {
      "A": "一个扫地机器人规划清扫路径",
      "B": "多个自动驾驶汽车在路口协同通行",
      "C": "一个图像识别模型识别动物",
      "D": "一个天气预测模型输出温度"
    },
    "answer": "B",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 13,
    "set": 3,
    "type": "single",
    "question": "在对话式AI中，“上下文理解”能力主要依赖以下哪种技术？(     )",
    "options": {
      "A": "循环神经网络（RNN）或 Transformer",
      "B": "随机数生成器",
      "C": "简单的关键词匹配",
      "D": "图像卷积网络"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 14,
    "set": 3,
    "type": "single",
    "question": "以下哪项属于结构化数据（  ）",
    "options": {
      "A": "数据库表记录",
      "B": "短视频",
      "C": "聊天语音",
      "D": "朋友圈图文"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 15,
    "set": 3,
    "type": "single",
    "question": "在实际的问题中我们遇到的数据量往往是巨大的。为了得到满足条件的数据，我们必须要对数据进行（  ）",
    "options": {
      "A": "筛选",
      "B": "离散化",
      "C": "标准化",
      "D": "量化"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 16,
    "set": 3,
    "type": "single",
    "question": "以下不属于数据库系统特点是的是（   ）",
    "options": {
      "A": "数据冗余度高",
      "B": "数据共享",
      "C": "数据独立性高",
      "D": "数据完整性"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 17,
    "set": 3,
    "type": "single",
    "question": "自行车用户信息表中收集了用户的各类信息，包括用户的出生日期及用户第一次购买自行车的日期。为了得到用户第一次购买自行车的年龄，应使用（ ）函数。",
    "options": {
      "A": "日期差",
      "B": "获取时间一部分",
      "C": "日期转字符串",
      "D": "日期格式化"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 18,
    "set": 3,
    "type": "single",
    "question": "以下哪个组件样式是在所有的可视化图表中普遍存在的？（  ）",
    "options": {
      "A": "图例",
      "B": "轴线",
      "C": "标题",
      "D": "网格线"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 19,
    "set": 3,
    "type": "single",
    "question": "下列关于文本图的说法中，错误的是（  ）",
    "options": {
      "A": "文本图不适合展示数据太少的数据集；",
      "B": "文本图不适用于展示无明显差异的数据集，因为无明显差异的数据集会使得出的文本图缺少关键词，无法带来突出感；",
      "C": "文本图中不可以添加标签以使可视化结果更为直观；",
      "D": "文本图又可称为词云图；"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 20,
    "set": 3,
    "type": "single",
    "question": "论据中，能够支撑“大数据无所不能”的观点的是（   ）",
    "options": {
      "A": "互联网金融打破了传统的观念和行为",
      "B": "大数据存在泡沫",
      "C": "大数据具有非常高的成本",
      "D": "个人隐私泄露与信息安全担忧"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 21,
    "set": 3,
    "type": "single",
    "question": "序数型：衣服尺码（S,M,L,XL等）",
    "options": {
      "A": "类别型：水果的名称",
      "B": "随机型：销售商品、货物的品牌名"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 22,
    "set": 3,
    "type": "single",
    "question": "下列关于大数据的分析理念的说法中，错误的是（  ）",
    "options": {
      "A": "在数据基础上倾向于全体数据而不是抽样数据",
      "B": "在分析方法上更注重相关分析而不是因果分析",
      "C": "在分析效果上更追究效率而不是绝对精确",
      "D": "在数据规模上强调相对数据而不是绝对数据"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 23,
    "set": 3,
    "type": "single",
    "question": "以下说法正确的是：(   )",
    "options": {
      "A": "数据挖掘是通过分析每个数据，从少量数据中寻找其规律的技术",
      "B": "数据挖掘无法建立数学模型",
      "C": "数据挖掘是指从大量的数据中通过算法搜索隐藏于其中信息的过程",
      "D": "数据挖掘的重点是观察数据"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 24,
    "set": 3,
    "type": "single",
    "question": "下面哪一项反映数据的精细化程度，越细化的数据，价值越高 （  ）",
    "options": {
      "A": "规模",
      "B": "活性",
      "C": "关联度",
      "D": "颗粒度"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 25,
    "set": 3,
    "type": "single",
    "question": "以下哪项不属于数据挖掘的内容？（   ）",
    "options": {
      "A": "补充与完善公路网名称",
      "B": "多维分析统计用户出行规律",
      "C": "高德地图导航构建道路拥堵预测模型",
      "D": "建立车流量趋势变化模型"
    },
    "answer": "D",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 26,
    "set": 3,
    "type": "single",
    "question": "按照涉及自变量的多少，可以将回归分析分为（  ）",
    "options": {
      "A": "线性回归分析与非线性回归分析",
      "B": "综合回归分析",
      "C": "一元回归分析与多元回归分析",
      "D": "指数回归分析"
    },
    "answer": "A",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 27,
    "set": 3,
    "type": "single",
    "question": "以下哪个选项最准确地描述了“大数据”与“传统数据”的主要区别？（   ）",
    "options": {
      "A": "大数据不需要存储",
      "B": "大数据只能用关系型数据库处理",
      "C": "大数据通常具有数据量大、生成速度快、类型多样等特点",
      "D": "大数据不包含任何结构化数据"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 28,
    "set": 3,
    "type": "single",
    "question": "以下哪种类型的智能体，只根据当前感知输入做出决策，而不维护任何内部状态或历史记忆？(    )",
    "options": {
      "A": "基于模型的智能体",
      "B": "目标驱动智能体",
      "C": "反应式智能体",
      "D": "学习型智能体"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 29,
    "set": 3,
    "type": "single",
    "question": "以下哪个算法或方法在本质上属于“无监督学习”？（    ）",
    "options": {
      "A": "线性回归",
      "B": "决策树分类",
      "C": "K-均值聚类",
      "D": "支持向量机"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 30,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些属于人工智能的典型子领域？ (       )",
    "options": {
      "A": "机器学习",
      "B": "自然语言处理",
      "C": "计算机视觉",
      "D": "数据库索引优化"
    },
    "answer": "C",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 31,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些任务适合使用无监督学习？ (      )",
    "options": {
      "A": "客户分群",
      "B": "异常检测",
      "C": "图像分类（有标签）",
      "D": "降维可视化"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 32,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是常见的机器学习模型效果评估指标？ （      ）",
    "options": {
      "A": "准确率",
      "B": "召回率",
      "C": "模型大小",
      "D": "数据库查询时间"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 33,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些因素可能导致AI系统产生偏见？ (      )",
    "options": {
      "A": "训练数据中隐含历史偏见",
      "B": "算法设计时的目标函数不合适",
      "C": "使用完全平衡的数据集",
      "D": "缺乏多样性的测试集"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 34,
    "set": 3,
    "type": "multiple",
    "question": "关于智能体与环境的关系，说法正确的有： (      )",
    "options": {
      "A": "智能体通过感知器获取环境信息",
      "B": "智能体完全被环境决定，无法自主选择动作",
      "C": "智能体通过执行器影响环境",
      "D": "环境的完全可观测性对所有智能体都必要"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 35,
    "set": 3,
    "type": "multiple",
    "question": "撰写文章或代码（如DeepSeek）",
    "options": {
      "A": "精确计算圆周率到1亿位",
      "B": "根据文本描述生成视频片段"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 36,
    "set": 3,
    "type": "multiple",
    "question": "关于大数据的“实时性”特征，以下哪些场景体现了该特征？（     ）",
    "options": {
      "A": "股票交易实时分析",
      "B": "社交媒体数据流处理",
      "C": "十年一次的人口普查数据存储",
      "D": "物联网设备传感器数据实时采集"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 37,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是常见的智能体感知方式？(      )",
    "options": {
      "A": "摄像头（视觉）",
      "B": "麦克风（听觉）",
      "C": "温度传感器",
      "D": "只读内存（ROM）"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 38,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是数据预处理中的常见步骤？(      )",
    "options": {
      "A": "缺失值处理",
      "B": "数据规范化/标准化",
      "C": "编码类别变量",
      "D": "直接使用原始数据训练模型"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 39,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些任务通常需要大数据支持才能取得良好效果？ (        )",
    "options": {
      "A": "识别人的面部特征",
      "B": "训练一个准确的图像识别模型"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 40,
    "set": 3,
    "type": "multiple",
    "question": "关于智能体的“理性”（Rationality），以下正确的有（       ）",
    "options": {
      "A": "理性智能体总是朝着最大化性能度量行动",
      "B": "理性不要求智能体全知",
      "C": "理性只取决于当前动作，不依赖感知历史",
      "D": "理性需要考虑环境的不确定性"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 41,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是深度学习的常见挑战？ （        ）",
    "options": {
      "A": "需要大量标注数据",
      "B": "容易过拟合",
      "C": "计算资源需求高",
      "D": "不适用于图像任务"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 42,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些属于AI伦理问题？(        )",
    "options": {
      "A": "算法歧视",
      "B": "隐私侵犯",
      "C": "就业替代",
      "D": "代码缩进风格"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 43,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些环境特性会影响智能体的设计？ （        ）",
    "options": {
      "A": "完全可观测与部分可观测",
      "B": "确定性与随机性",
      "C": "静态与动态",
      "D": "离散与连续"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 44,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是常见的智能体结构？ （       ）",
    "options": {
      "A": "逻辑/基于知识的智能体",
      "B": "基于效用的智能体",
      "C": "纯机械齿轮",
      "D": "学习型智能体"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 45,
    "set": 3,
    "type": "multiple",
    "question": "关于大数据的“Veracity”（真实性），以下正确的有 (        )",
    "options": {
      "A": "指数据可能存在噪声、异常不一致",
      "B": "提高数据质量可以提升分析结果",
      "C": "数据真实性对所有应用同等关键",
      "D": "可以完全忽略真实性"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 46,
    "set": 3,
    "type": "multiple",
    "question": "关于智能体与多智能体系统的区别与联系，正确的有 （      ）",
    "options": {
      "A": "单个智能体可以独立完成简单任务",
      "B": "多智能体系统必然包含至少两个智能体",
      "C": "多智能体系统不需要通信",
      "D": "多智能体系统可以一定程度上解决分布式问题"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 47,
    "set": 3,
    "type": "multiple",
    "question": "关于“数据挖掘”与大数据的说法，正确的有：(        )",
    "options": {
      "A": "数据挖掘是从大量数据中发现模式的过程",
      "B": "数据挖掘必须使用深度学习"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 48,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些属于智能体感知环境和事务的范畴？(        )",
    "options": {
      "A": "机器人通过激光雷达测距",
      "B": "推荐系统读取用户历史点击",
      "C": "恒温器读取当前温度值",
      "D": "AI直接生成图像"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 49,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些属于大数据处理中的“数据清洗”操作？ （        ）",
    "options": {
      "A": "删除重复记录",
      "B": "填充缺失值"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 50,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是数据规范化的方法？（        ）",
    "options": {
      "A": "最小最大归一化",
      "B": "Z-值标准化",
      "C": "小数定标规范化",
      "D": "删除所有数据"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 51,
    "set": 3,
    "type": "multiple",
    "question": "关于“特征工程”，正确的有 （        ）",
    "options": {
      "A": "原始数据往往需要转换成更适合模型的形式",
      "B": "特征选择是特征工程的一部分",
      "C": "深度学习完全不需要特征工程",
      "D": "特征缩放可以减少特征取值范围差异的影响，也是特征工程的一部分"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 52,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是大数据中的“数据源”示例？(          )",
    "options": {
      "A": "社交媒体用户生成内容",
      "B": "物联网传感器数据流",
      "C": "服务器日志文件",
      "D": "一个人手写的一行数字"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 53,
    "set": 3,
    "type": "multiple",
    "question": "关于“数据压缩”在大数据处理中的作用，正确的有（        ）",
    "options": {
      "A": "减少存储空间",
      "B": "降低网络传输开销",
      "C": "一定会增加CPU负载，总是不划算"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 54,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些属于“数据脱敏”的典型操作？(        )",
    "options": {
      "A": "将身份证号中间几位替换为****",
      "B": "对手机号进行部分隐藏",
      "C": "删除所有数据",
      "D": "使用随机但不可逆的值替换敏感字段"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 55,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些是“数据生命周期管理”阶段？ (        )",
    "options": {
      "A": "数据采集与生成",
      "B": "数据存储与处理",
      "C": "数据归档销毁",
      "D": "数据销毁"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 56,
    "set": 3,
    "type": "multiple",
    "question": "以下哪些属于“实时数据处理”的典型应用？(         )",
    "options": {
      "A": "金融交易中的异常检测",
      "B": "网站实时点击流分析",
      "C": "每季度一次的销售汇总报表",
      "D": "物联网设备实时监控报警"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 57,
    "set": 3,
    "type": "multiple",
    "question": "关于“数据血缘”的作用，正确的有 (        )",
    "options": {
      "A": "追踪数据来源和变换过程",
      "B": "有助于调试和审计数据处理流程",
      "C": "与数据治理无关"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 58,
    "set": 3,
    "type": "judge",
    "question": "数据可视化只在数据分析的最后阶段才有用。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 59,
    "set": 3,
    "type": "judge",
    "question": "关联规则中的“置信度”衡量规则前项出现时后项出现的概率。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 60,
    "set": 3,
    "type": "judge",
    "question": "K-means聚类对初始中心点不敏感，无论选择什么初始点最终结果都一样。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 61,
    "set": 3,
    "type": "judge",
    "question": "数据分析中的“描述性分析”用于回答“为什么会发生”的问题。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 62,
    "set": 3,
    "type": "judge",
    "question": "在大数据分析中，数据抽样通常比使用全量数据得到更好的模型。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 63,
    "set": 3,
    "type": "judge",
    "question": "数据挖掘中的“分类”任务属于有监督学习。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 64,
    "set": 3,
    "type": "judge",
    "question": "热力图通常用于展示矩阵数据中值，不同颜色代表不同数值范围。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 65,
    "set": 3,
    "type": "judge",
    "question": "在数据可视化中，饼图适合比较多个类别的细微差异。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 66,
    "set": 3,
    "type": "judge",
    "question": "数据清洗可以解决所有数据质量问题。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 67,
    "set": 3,
    "type": "judge",
    "question": "在数据可视化中，“雷达图”适合展示多个变量在不同类别上的对比，但维度过多会难以阅读。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 68,
    "set": 3,
    "type": "judge",
    "question": "数据可视化中的“气泡图”可以在二维平面上展示三个维度的数据（x轴、y轴、气泡大小表示z轴）。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 69,
    "set": 3,
    "type": "judge",
    "question": "“数据挖掘”和“数据分析”是两个不同的领域，没有任何重叠。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 70,
    "set": 3,
    "type": "judge",
    "question": "在可视化中，“漏斗图”常用于展示销售或转化流程中各个阶段的逐步减少。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 71,
    "set": 3,
    "type": "judge",
    "question": "数据挖掘中的“集成方法”只能提升分类任务，不适用于回归。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 72,
    "set": 3,
    "type": "judge",
    "question": "“数据分析中的描述性统计”包括均值、中位数、标准差等，但不包括数据分布形状（如偏度、峰度）。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 73,
    "set": 3,
    "type": "judge",
    "question": "“大数据”的“数据量Volume”特征意味着数据量必须达到PB级别才算大数据。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 74,
    "set": 3,
    "type": "judge",
    "question": "“情感分析”只依赖词典规则，不可以使用机器学习方法。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 75,
    "set": 3,
    "type": "judge",
    "question": "在数据分析中，“离群值”一定是由数据错误造成的，必须删除。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 76,
    "set": 3,
    "type": "judge",
    "question": "“数据可视化中的误导”可以来自截断的坐标轴、不适当的颜色映射或选择性的数据展示。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 77,
    "set": 3,
    "type": "judge",
    "question": "“智能体”的概念仅限于人工智能领域，与控制系统、机器人无关。",
    "options": {
      "A": "正确",
      "B": "错误"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 1,
    "analysis": ""
  },
  {
    "id": 78,
    "set": 3,
    "type": "case",
    "question": "每个配送机器人需要感知环境（障碍物、路径）",
    "options": {
      "A": "调度系统不需要处理实时订单数据，只需静态路线规划",
      "B": "多个机器人之间可能发生冲突，需要协调机制",
      "C": "这种系统完全不需要历史数据，实时规划即可"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 79,
    "set": 3,
    "type": "case",
    "question": "某物流公司使用GPS和交通数据实时优化配送路线。以下正确的有(   )",
    "options": {
      "A": "该应用需要实时流数据处理",
      "B": "每辆配送车可视为一个智能体",
      "C": "路线优化只需要历史数据，不需要实时数据",
      "D": "多车协同调度属于多智能体系统"
    },
    "answer": "√",
    "answer_multi": [],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 80,
    "set": 3,
    "type": "case",
    "question": "金融风控系统检测信用卡欺诈交易。以下正确的有 (       )",
    "options": {
      "A": "所有欺诈交易都只能由一种固定规则检测",
      "B": "异常检测算法可用于发现可疑交易",
      "C": "正负样本通常极度不平衡，需采用采样或加权方法"
    },
    "answer": "×",
    "answer_multi": [],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 81,
    "set": 3,
    "type": "case",
    "question": "社交媒体平台利用情感分析监测热点事件舆论。以下正确的有（    ）",
    "options": {
      "A": "情感分析可基于数据挖掘模型",
      "B": "表情符号可以作为情感信号",
      "C": "情感分析结果总是客观准确的",
      "D": "可视化的时间轴情感变化图有助于追踪舆情演变"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 82,
    "set": 3,
    "type": "case",
    "question": "天气数据（温度、湿度）是重要的外部特征",
    "options": {
      "A": "异常用电行为可帮助发现设备故障或窃电",
      "B": "只需聚合到天级别，不需要小时或分钟数据"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 83,
    "set": 3,
    "type": "case",
    "question": "在线视频平台（如抖音、快手）使用推荐系统。以下正确的有（    ）",
    "options": {
      "A": "协同过滤基于“相似用户喜欢相似内容”的假设",
      "B": "冷启动问题指新用户或新视频缺乏交互数据"
    },
    "answer": "B",
    "answer_multi": [
      "B",
      "C",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 84,
    "set": 3,
    "type": "case",
    "question": "自动驾驶汽车感知模块识别交通标志。以下正确的有(    )",
    "options": {
      "A": "模型的输出可直接决定刹车或转向，无需其他模块",
      "B": "可使用神经网络处理摄像头图像",
      "C": "需要大量标注的交通标志图像进行训练"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 85,
    "set": 3,
    "type": "case",
    "question": "零售店通过视频分析统计顾客在店内的移动热区。以下正确的有（  ）",
    "options": {
      "A": "可使用目标检测和跟踪算法",
      "B": "热力图可视化可展示高密度区域",
      "C": "所有顾客必须佩戴专用设备才能被追踪",
      "D": "该应用不涉及隐私问题"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "D"
    ],
    "score": 2,
    "analysis": ""
  },
  {
    "id": 86,
    "set": 3,
    "type": "case",
    "question": "模型可能存在歧视（如基于种族或性别），需公平性审查",
    "options": {
      "A": "决策树模型一定没有偏见",
      "B": "准确率、召回率是评估模型能力的常用指标"
    },
    "answer": "A",
    "answer_multi": [
      "A",
      "B",
      "C"
    ],
    "score": 2,
    "analysis": ""
  }
];