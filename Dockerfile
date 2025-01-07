# 使用 Python 3.9 作为基础镜像
FROM python:3.9-slim

# 设置工作目录
WORKDIR /app

# 安装系统依赖
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# 复制依赖文件
COPY requirements.txt .

# 安装 Python 依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制静态文件
COPY index.html .
COPY styles.css .
COPY script.js .

# 复制 Python 文件
COPY app.py .
COPY gpx2fit.py .
COPY fit2json.py .

# 设置环境变量
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV PYTHONUNBUFFERED=1

# 暴露端口
EXPOSE 5500

# 启动应用
CMD ["python", "app.py"] 