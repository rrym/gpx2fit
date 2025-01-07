// 添加多语言支持
const i18n = {
    'zh-CN': {
        'title': '轻松将GPX转换为FIT',
        'subtitle': '专业的GPS轨迹文件转换器，支持Garmin设备导入',
        'converter-title': 'GPX转FIT转换器',
        'drop-hint': '将GPX文件拖放到此处',
        'or': '或',
        'select-file': '选择GPX文件',
        'convert': '开始转换',
        'file-note': '所有上传的文件将在转换后立即删除',
        'features-title': '功能特点',
        'feature1-title': '安全处理',
        'feature1-desc': '您上传的文件经过安全处理，转换后即删除',
        'feature2-title': '快速转换',
        'feature2-desc': '快速高效的转换流程',
        'feature3-title': '兼容性好',
        'feature3-desc': '转换后的FIT文件完全兼容Garmin设备',
        'how-works-title': '转换流程',
        'step1-title': '上传GPX文件',
        'step1-desc': '通过拖放或点击上传您的GPX轨迹文件',
        'step2-title': '智能分析处理',
        'step2-desc': '系统自动分析GPX结构并进行转换处理',
        'step3-title': '生成FIT文件',
        'step3-desc': '转换为标准FIT格式，确保设备兼容性',
        'faq-title': '常见问题',
        'faq1-q': '什么是GPX文件？',
        'faq1-a': 'GPX是GPS Exchange Format的缩写，是一种用于存储GPS轨迹数据的XML格式。',
        'faq2-q': '为什么需要转换为FIT格式？',
        'faq2-a': 'FIT是Garmin设备使用的标准格式，转换后可以直接导入到Garmin设备中使用。',
        'footer-desc': '专业的GPX到FIT转换服务。快速、安全、可靠。',
        'nav-convert': '转换',
        'nav-features': '功能特点',
        'nav-how': '工作原理',
        'nav-faq': '常见问题'
    },
    'zh-TW': {
        'title': '輕鬆將GPX轉換為FIT',
        'subtitle': '專業的GPS軌跡文件轉換器，支持Garmin設備導入',
        'converter-title': 'GPX轉FIT轉換器',
        'drop-hint': '將GPX文件拖放到此處',
        'or': '或',
        'select-file': '選擇GPX文件',
        'convert': '開始轉換',
        'file-note': '所有上傳的文件將在轉換後立即刪除',
        'features-title': '功能特點',
        'feature1-title': '安全處理',
        'feature1-desc': '您上傳的文件經過安全處理，轉換後即刪除',
        'feature2-title': '快速轉換',
        'feature2-desc': '快速高效的轉換流程',
        'feature3-title': '兼容性好',
        'feature3-desc': '轉換後的FIT文件完全兼容Garmin設備',
        'how-works-title': '轉換流程',
        'step1-title': '上傳GPX文件',
        'step1-desc': '通過拖放或點擊上傳您的GPX軌跡文件',
        'step2-title': '智能分析處理',
        'step2-desc': '系統自動分析GPX結構並進行轉換處理',
        'step3-title': '生成FIT文件',
        'step3-desc': '轉換為標準FIT格式，確保設備兼容性',
        'faq-title': '常見問題',
        'faq1-q': '什麼是GPX文件？',
        'faq1-a': 'GPX是GPS Exchange Format的縮寫，是一種用於存儲GPS軌跡數據的XML格式。',
        'faq2-q': '為什麼需要轉換為FIT格式？',
        'faq2-a': 'FIT是Garmin設備使用的標準格式，轉換後可以直接導入到Garmin設備中使用。',
        'footer-desc': '專業的GPX到FIT轉換服務。快速、安全、可靠。',
        'nav-convert': '轉換',
        'nav-features': '功能特點',
        'nav-how': '工作原理',
        'nav-faq': '常見問題'
    },
    'en': {
        'title': 'Easy GPX to FIT Conversion',
        'subtitle': 'Professional GPS track converter, compatible with Garmin devices',
        'converter-title': 'GPX to FIT Converter',
        'drop-hint': 'Drop GPX files here',
        'or': 'or',
        'select-file': 'Select GPX Files',
        'convert': 'Convert',
        'file-note': 'All uploaded files will be deleted immediately after conversion',
        'features-title': 'Features',
        'feature1-title': 'Secure Processing',
        'feature1-desc': 'Your files are securely processed and deleted after conversion',
        'feature2-title': 'Fast Conversion',
        'feature2-desc': 'Quick and efficient conversion process',
        'feature3-title': 'High Compatibility',
        'feature3-desc': 'Converted FIT files are fully compatible with Garmin devices',
        'how-works-title': 'How It Works',
        'step1-title': 'Upload GPX File',
        'step1-desc': 'Upload your GPX track file by drag & drop or click',
        'step2-title': 'Smart Analysis',
        'step2-desc': 'System automatically analyzes GPX structure and processes conversion',
        'step3-title': 'Generate FIT File',
        'step3-desc': 'Convert to standard FIT format ensuring device compatibility',
        'faq-title': 'FAQ',
        'faq1-q': 'What is a GPX file?',
        'faq1-a': 'GPX (GPS Exchange Format) is an XML format for storing GPS track data.',
        'faq2-q': 'Why convert to FIT format?',
        'faq2-a': 'FIT is the standard format used by Garmin devices, allowing direct import after conversion.',
        'footer-desc': 'Professional GPX to FIT conversion service. Fast, secure, and reliable.',
        'nav-convert': 'Convert',
        'nav-features': 'Features',
        'nav-how': 'How it Works',
        'nav-faq': 'FAQ'
    },
    'ja': {
        'title': 'GPXからFITへ簡単変換',
        'subtitle': 'プロフェッショナルなGPSトラック変換ツール、Garminデバイス対応',
        'converter-title': 'GPX-FIT変換ツール',
        'drop-hint': 'GPXファイルをここにドロップ',
        'or': 'または',
        'select-file': 'GPXファイルを選択',
        'convert': '変換開始',
        'file-note': 'アップロードされたファイルは変換後すぐに削除されます',
        'features-title': '特徴',
        'feature1-title': '安全な処理',
        'feature1-desc': 'ファイルは安全に処理され、変換後に削除されます',
        'feature2-title': '高速変換',
        'feature2-desc': '迅速で効率的な変換プロセス',
        'feature3-title': '高い互換性',
        'feature3-desc': '変換されたFITファイルはGarminデバイスと完全互換',
        'how-works-title': '変換プロセス',
        'step1-title': 'GPXファイルのアップロード',
        'step1-desc': 'ドラッグ＆ドロップまたはクリックでGPXファイルをアップロード',
        'step2-title': 'スマート分析',
        'step2-desc': 'システムがGPX構造を自動分析し変換処理を実行',
        'step3-title': 'FITファイルの生成',
        'step3-desc': 'デバイス互換性を確保した標準FITフォーマットに変換',
        'faq-title': 'よくある質問',
        'faq1-q': 'GPXファイルとは？',
        'faq1-a': 'GPXはGPS Exchange Formatの略で、GPSトラックデータを保存するXML形式です。',
        'faq2-q': 'なぜFIT形式に変換する必要がありますか？',
        'faq2-a': 'FITはGarminデバイスの標準フォーマットで、変換後に直接インポートできます。',
        'footer-desc': 'プロフェッショナルなGPX-FIT変換サービス。高速、安全、信頼性。',
        'nav-convert': '変換',
        'nav-features': '特徴',
        'nav-how': '使い方',
        'nav-faq': 'FAQ'
    }
};

// 更新页面语言
function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (i18n[lang] && i18n[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = i18n[lang][key];
            } else {
                element.textContent = i18n[lang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 主题切换功能
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleIcon = themeToggle.querySelector('.theme-toggle-icon');
    
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggleIcon.textContent = savedTheme === 'dark' ? '🌙' : '🌞';
    
    // 主题切换事件监听
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggleIcon.textContent = newTheme === 'dark' ? '🌙' : '🌞';
    });

    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const convertBtn = document.querySelector('.convert-btn');
    const uploadBtn = document.querySelector('.upload-btn');
    const fileList = document.getElementById('fileList');
    let selectedFiles = [];  // 改为数组存储多个文件
    const progressContainer = document.querySelector('.progress-container');
    const progressBar = document.querySelector('.progress');
    const progressText = document.querySelector('.progress-text');

    // 添加上传按钮点击事件
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // 处理拖放
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });

    // 处理文件选择
    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    // 修改文件处理函数
    function handleFiles(files) {
        for (let file of files) {
            if (file.name.toLowerCase().endsWith('.gpx')) {
                if (!selectedFiles.some(f => f.name === file.name)) {
                    selectedFiles.push(file);
                }
            } else {
                alert(`文件 ${file.name} 不是GPX文件`);
            }
        }
        updateFileList();
        // 清空文件输入框，这样同一个文件可以再次选择
        fileInput.value = '';
    }

    // 更新文件列表显示
    function updateFileList() {
        fileList.innerHTML = '';
        selectedFiles.forEach((file, index) => {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.innerHTML = `
                <span>${file.name}</span>
                <button class="remove-file" data-index="${index}">×</button>
            `;
            fileList.appendChild(fileItem);
        });

        // 更新转换按钮状态
        convertBtn.disabled = selectedFiles.length === 0;
    }

    // 删除文件
    fileList.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-file')) {
            const index = parseInt(e.target.dataset.index);
            selectedFiles.splice(index, 1);
            updateFileList();
            // 确保文件输入框是空的
            fileInput.value = '';
        }
    });

    // 更新进度条
    function updateProgress(current, total) {
        const percent = Math.round((current / total) * 100);
        progressBar.style.width = `${percent}%`;
        progressText.textContent = `${percent}% (${current}/${total})`;
    }

    // 修改转换按钮点击事件
    convertBtn.addEventListener('click', async () => {
        if (selectedFiles.length === 0) {
            alert('请先选择GPX文件');
            return;
        }

        convertBtn.disabled = true;
        convertBtn.textContent = '转换中...';
        progressContainer.style.display = 'block';
        updateProgress(0, selectedFiles.length);

        try {
            const results = [];
            for (let i = 0; i < selectedFiles.length; i++) {
                const file = selectedFiles[i];
                const formData = new FormData();
                formData.append('gpxFile', file);

                const response = await fetch('http://localhost:5500/convert', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error(`转换失败: ${file.name}`);
                }

                results.push({
                    blob: await response.blob(),
                    fileName: file.name.replace('.gpx', '.fit')
                });

                updateProgress(i + 1, selectedFiles.length);
            }

            // 创建ZIP文件
            const zip = new JSZip();
            results.forEach(result => {
                zip.file(result.fileName, result.blob);
            });

            // 生成ZIP文件并下载
            const zipBlob = await zip.generateAsync({type: 'blob'});
            const downloadUrl = window.URL.createObjectURL(zipBlob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'converted_files.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(downloadUrl);

            // 清理状态
            selectedFiles = [];
            updateFileList();
            fileInput.value = '';  // 清空文件输入框

        } catch (error) {
            console.error('转换错误:', error);
            alert('转换失败，请重试');
        } finally {
            convertBtn.disabled = false;
            convertBtn.textContent = '开始转换';
            progressContainer.style.display = 'none';
        }
    });

    // 添加语言选择器事件监听
    const languageSelector = document.getElementById('language');
    languageSelector.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
        localStorage.setItem('preferred-language', e.target.value);
    });

    // 初始化语言
    const savedLanguage = localStorage.getItem('preferred-language') || 'zh-CN';
    languageSelector.value = savedLanguage;
    updateLanguage(savedLanguage);
}); 