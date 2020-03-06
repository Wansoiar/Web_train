function displayAccessKeys() {
    let link = document.getElementsByTagName('a');
    let akeys = new Array();
    for(let i=0; i<link.length; i++) {
        if(!link[i].getAttribute('accesskey')) continue;
        let key = link[i].getAttribute('accesskey');
        let text = link[i].lastChild.nodeValue;
        akeys[key] = text;
    }
    let list = document.createElement('ul');
    for(key in akeys) {
        let str = key + ':' + akeys[key];
        let item = document.createElement('li');
        let item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    let header = document.createElement('h3');
    let header_text = document.createTextNode('Accesskeys');
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);