function styleHeaderSibling() {
    if(!document.getElementsByTagName) return false;
    let header = document.getElementsByTagName('h1');
    for(let i=0; i<header.length; i++) {
        let elem = getNextElement(header[i].nextSibling);
        addClass(elem,'intro');
    }
}
function addClass(element,value) {
    if(!element.className) {
        element.className = value;
    } else {
        let newClassName = element.className;
        newClassName += ' ';
        newClassName += value;
        element.className = newClassName;
    }
}
function getNextElement(node) {
    if(node.nodeType === 1) {
        return node;
    }
    if(node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
addLoadEvent(styleHeaderSibling);