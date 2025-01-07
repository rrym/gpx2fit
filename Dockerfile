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

# 复制源代码
COPY src /app/src

# 设置环境变量
ENV FLASK_APP=src/app.py
ENV FLASK_ENV=development
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

# 暴露端口
EXPOSE 5500

# 启动应用
CMD ["python", "src/app.py"] 