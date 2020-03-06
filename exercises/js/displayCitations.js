function displayCitations() {
    if(!document.getElementsByTagName) return false;
    let quotes = document.getElementsByTagName('blockquote');
    //获得文档中的blockquote元素
    for(let i=0; i<quotes.length; i++) {
        if(!quotes[i].getAttribute('cite')) continue; //如果没有cite属性设置，则略过
        let url = quotes[i].getAttribute('cite'); //得到cite属性的值
        let quotesChildren = quotes[i].getElementsByTagName('*');
        if(quotesChildren.length < 1) continue;
        let elem = quotesChildren[quotesChildren.length - 1];
        //得到blockquote中的最后一个子元素节点（最后的回车键会被当作一个文本节点）
        let link = document.createElement('a');
        let link_text = document.createTextNode("cource");
        link.appendChild(link_text); //创建一个链接元素
        link.setAttribute('href',url);
        let superscript = document.createElement('sup'); //套上sup标签
        superscript.appendChild(link);
        elem.appendChild(superscript); //加到最后一个子元素节点后面
    }
}

addLoadEvent(displayCitations);