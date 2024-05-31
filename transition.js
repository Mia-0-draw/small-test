document.addEventListener('DOMContentLoaded', function () {
    const progressText = document.getElementById('progress');
    const resultBtn = document.getElementById('result-btn');

    // 模拟加载过程
    setTimeout(() => {
        progressText.textContent = '50%';
        setTimeout(() => {
            progressText.textContent = '100%';
            resultBtn.style.display = 'block'; // 在过渡结束后显示按钮
        }, 1000);
    }, 800);

    // 处理按钮点击事件
    resultBtn.addEventListener('click', function () {
        location.href = 'result.html'; // 跳转到结果页面
    });
});
