function saveChoice(choice, nextPage) {
    // 获取当前的选择计数
    let choiceCounts = JSON.parse(sessionStorage.getItem('choiceCounts')) || { A: 0, B: 0, C: 0, D: 0 };
    // 增加选择的计数
    choiceCounts[choice] += 1;
    
    // 保存更新后的选择计数
    sessionStorage.setItem('choiceCounts', JSON.stringify(choiceCounts));
    
    // 跳转到下一个页面
    location.href = nextPage;
}

function displayResult() {
    let choiceCounts = JSON.parse(sessionStorage.getItem('choiceCounts')) || { A: 0, B: 0, C: 0, D: 0 };
    
    // 确定最多选择的选项
    let maxChoice = 'A';
    if (choiceCounts.B > choiceCounts.A) maxChoice = 'B';
    if (choiceCounts.C > choiceCounts[maxChoice]) maxChoice = 'C';
    if (choiceCounts.D > choiceCounts[maxChoice]) maxChoice = 'D';

    let resultContainer = document.getElementById('result-container');
    let secondImage = document.createElement('img');
    secondImage.alt = "Second Image";
    secondImage.classList.add('second-image');

    function updateImages() {
        if (window.matchMedia("(max-width: 700px)").matches) {
            if (maxChoice === 'A') {
                resultContainer.style.backgroundImage = "url(img/r_2_re.png)";
                secondImage.src = "img/r_2_2_re.png";
            } else if (maxChoice === 'B') {
                resultContainer.style.backgroundImage = "url(img/r_1_re.png)";
                secondImage.src = "img/r_1_2_re.png";
            } else if (maxChoice === 'C') {
                resultContainer.style.backgroundImage = "url(img/r_3_re.png)";
                secondImage.src = "img/r_3_2_re.png";
            } else if (maxChoice === 'D') {
                resultContainer.style.backgroundImage = "url(img/r_4_re.png)";
                secondImage.src = "img/r_4_2_re.png";
            }
        } else {
            if (maxChoice === 'A') {
                resultContainer.style.backgroundImage = "url(img/r_2.png)";
                secondImage.src = "img/r_2_2.png";
            } else if (maxChoice === 'B') {
                resultContainer.style.backgroundImage = "url(img/r_1.png)";
                secondImage.src = "img/r_1_2.png";
            } else if (maxChoice === 'C') {
                resultContainer.style.backgroundImage = "url(img/r_3.png)";
                secondImage.src = "img/r_3_2.png";
            } else if (maxChoice === 'D') {
                resultContainer.style.backgroundImage = "url(img/r_4.png)";
                secondImage.src = "img/r_4_2.png";
            }
        }
    }

    // 初次调用更新函数
    updateImages();
    
    // 监听窗口大小变化事件
    window.addEventListener('resize', updateImages);

    // 将第二张图片添加到结果容器中
    resultContainer.appendChild(secondImage);
}

function resetAndGoHome(homePage) {
    sessionStorage.clear(); // 清除所有存储的分数
    location.href = homePage; // 跳转回首页
}

// 当页面加载完成后，调用displayResult函数
window.onload = displayResult;
