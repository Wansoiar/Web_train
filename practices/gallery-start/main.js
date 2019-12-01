const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* 遍历图片并添加至缩略图区 */
for(var i = 0; i < 5; i++) {
    var num = i + 1;
    var nums = num.toString();
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + nums + '.jpg');
    thumbBar.appendChild(newImage);
    newImage.onclick = function (e) {
        const bigImg = e.target.getAttribute('src');
        setBig(bigImg);
    }
}
    function setBig(bigImg) {
        displayedImage.setAttribute('src', bigImg);

    }

btn.onclick = function(){
    /* 编写 变亮/变暗 按钮 */
    if(btn.getAttribute('class') === 'drak'){
        btn.setAttribute('class','light');
        btn.textContent = '变亮';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('class','drak');
        btn.textContent = '变暗';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

