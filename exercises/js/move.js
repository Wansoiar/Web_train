function positionMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    let elem = document.getElementById('message');
    elem.style.position = 'absolute';
    elem.style.left = '50px';
    elem.style.top = '100px';
    moveElement('message',125,25,30);
    if(!document.getElementById('message2')) return false;
    let elem2 = document.getElementById('message2');
    elem2.style.position = 'absolute';
    elem2.style.left = '50px';
    elem2.style.top = '50px';
    moveElement('message2',125,125,30);
}
function moveMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById('message')) return false;
    let elem = document.getElementById('message');
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    if(xpos === 200 && ypos === 100) {
        return true;
    }
    if(xpos < 200) {
        xpos++;
    }
    if(xpos > 200) {
        xpos--;
    }
    if(ypos < 100) {
        ypos++;
    }
    if(ypos > 100) {
        ypos++;
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    movement = setTimeout(moveMessage , 10);
}
function moveElement(elementID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(elementID)) return false;
    let elem = document.getElementById(elementID);
    if(elem.movement) {
        clearTimeout(elem.movement);
    } //为elem创建一个movement属性，用于保存setTimeOut函数调用
    // 如果用一个全局变量，当鼠标在两个目标之间快速移动时，movement将来回拉扯
    if(!elem.style.left) {
        elem.style.left = '0px';
    }
    if(!elem.style.top) {
        elem.style.top = '0px';
    } //安全检查，万一没有left和top属性
    let xpos = parseInt(elem.style.left);
    let ypos = parseInt(elem.style.top);
    let dist = 0;
    if(xpos === final_x && ypos === final_y) {
        return true;
    }
    if(xpos < final_x) {
        dist = Math.ceil((final_x - xpos)/10);
        xpos += dist;
    }
    if(xpos > final_x) {
        dist = Math.ceil((xpos - final_x)/10);
        xpos -= dist;
    }
    if(ypos < final_y) {
        dist = Math.ceil((final_y - ypos)/10);
        ypos += dist;
    }
    if(ypos > final_y) {
        dist = Math.ceil((ypos - final_y)/10);
        ypos -= dist;
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    let repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    //此处repeat是一个字符串，加号为拼接符，绿色部分为字符串，白色部分为变量，去掉双引号相当于
    //moveElement('elementID',final_x,final_y,interval);
    elem.movement = setTimeout(repeat , interval);
}

//addLoadEvent(positionMessage);
//addLoadEvent(moveMessage);