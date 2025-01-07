# GPX to FIT Converter (GPX转FIT转换器)

一个专业的GPS轨迹文件转换工具，支持将GPX格式文件转换为Garmin设备可用的FIT格式。

## 功能特点

- 🚀 批量转换：支持同时转换多个GPX文件
- 📦 ZIP打包：多个文件自动打包下载
- 🌐 多语言支持：
  - 简体中文
  - 繁体中文
  - English
  - 日本語
- 🌓 暗黑模式：支持明暗主题切换
- 💫 现代化界面：简洁直观的用户界面
- 🔒 安全可靠：文件在服务器端即时处理，转换后立即删除

## 技术栈

- 后端：Python + Flask
- 前端：HTML5 + CSS3 + JavaScript
- 容器化：Docker + Docker Compose
- 依赖库：
  - flask-cors：处理跨域请求
  - gpxpy：解析GPX文件
  - fit-tool：生成FIT文件
  - geopy：处理地理坐标数据

## 部署方式

### 前置要求

- Docker
- Docker Compose

### 快速开始

1. 克隆仓库：
```bash
git clone [repository-url]
cd gpx2fit
```

2. 使用Docker Compose启动服务：
```bash
docker-compose up -d
```

3. 访问应用：
打开浏览器访问 http://localhost:5500

### 手动部署

1. 安装Python依赖：
```bash
pip install -r requirements.txt
```

2. 启动Flask应用：
```bash
python app.py
```

3. 访问应用：
打开浏览器访问 http://localhost:5500

## 使用说明

1. 选择文件：
   - 点击"选择GPX文件"按钮
   - 或直接将文件拖放到指定区域

2. 批量转换：
   - 可以同时选择多个GPX文件
   - 支持拖放多个文件
   - 可以删除已选择的文件

3. 开始转换：
   - 点击"开始转换"按钮
   - 等待转换完成
   - 自动下载转换后的文件（多个文件会打包成ZIP）

## 项目结构

```
gpx2fit/
├── app.py              # Flask应用主文件
├── gpx2fit.py         # GPX转FIT核心逻辑
├── requirements.txt    # Python依赖文件
├── Dockerfile         # Docker构建文件
├── docker-compose.yml # Docker Compose配置
├── index.html         # 前端页面
├── styles.css         # 样式文件
└── script.js          # JavaScript脚本
```

## 环境变量

在 `docker-compose.yml` 中可配置以下环境变量：

- `FLASK_APP`: Flask应用入口（默认：app.py）
- `FLASK_ENV`: 运行环境（默认：development）
- `BASE_URL`: 应用访问地址（默认：http://localhost:5500）

## 注意事项

1. 文件安全：
   - 所有上传的文件仅用于转换，不会永久存储
   - 转换完成后立即删除源文件和生成的文件

2. 兼容性：
   - 生成的FIT文件已针对Garmin设备优化
   - 支持主流浏览器的最新版本

3. 网络要求：
   - 确保服务器端口（默认5500）可访问
   - 上传大文件时需要稳定的网络连接

## 许可证

[添加许可证信息]

## 贡献指南

欢迎提交Issue和Pull Request来帮助改进项目。

## 联系方式

[添加联系方式] 