function displayAbbreviations() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    let abbr = document.getElementsByTagName('abbr');
    //获取所有缩略词
    let number = abbr.length;
    let title = new Array(number);
    let text = new Array(number);
    //遍历所有缩略词，分离关键词和原文
    for(let i=0; i<number; i++) {
        if(abbr[i].childNodes.length < 1) continue;
        title[i] = abbr[i].getAttribute('title');
        text[i] = abbr[i].lastChild.nodeValue;
    }//创建定义列表
    let dlist = document.createElement('dl');
    for(let i=0; i<number; i++) {
        //创建定义标题
        let dtitle = document.createElement('dt');
        let dtitle_text = document.createTextNode(text[i]);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        let ddesc = document.createElement('dd');
        let ddesc_text = document.createTextNode(title[i]);
        ddesc.appendChild(ddesc_text);
        //添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length < 1) return false;
    //创建标题
    let header = document.createElement('h2');
    let header_text = document.createTextNode("Abbreviation");
    header.appendChild(header_text);
    //追加到页面主体
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);