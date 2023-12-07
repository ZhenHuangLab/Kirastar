document.addEventListener('DOMContentLoaded', (event) => {
    // 创建全屏覆盖层和图片容器
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: none; align-items: center; justify-content: center; z-index: 1000; transition: opacity 0.5s;';
    overlay.style.cursor = 'zoom-out'; // 设置覆盖层的鼠标指针样式为缩小
    document.body.appendChild(overlay);

    const overlayImg = document.createElement('img');
    overlayImg.style.cssText = 'max-width: 90%; max-height: 90%; transition: transform 0.3s;';
    overlay.appendChild(overlayImg);

    document.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            overlayImg.src = this.src;
            overlayImg.style.transform = 'scale(0)';
            overlay.style.display = 'flex';
            overlayImg.style.cursor = 'zoom-out';
            setTimeout(() => {
                overlay.style.opacity = '1';
                overlayImg.style.transform = 'scale(1)';
            }, 0);
        });
    });

    const closeOverlay = () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlayImg.style.transform = 'scale(0)';
        }, 0);
        setTimeout(() => { overlay.style.display = 'none'; }, 250);
    };

    overlay.addEventListener('click', function (event) {
        closeOverlay();
    });

});
    






