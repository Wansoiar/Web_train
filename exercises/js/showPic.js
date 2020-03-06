function showPic(whichpic) {
    if(!document.getElementById('placeholder')) return false;
    let source = whichpic.getAttribute('href');
    let placeholder = document.getElementById('placeholder');
    placeholder.setAttribute('src',source);
    if(document.getElementById('description')) {
        let text = whichpic.getAttribute('title');
        let description = document.getElementById('description');
        //alert (description.firstChild.nodeValue);
        description.firstChild.nodeValue = text;
    }
    return true;
}
function countBodyChildren() {
    let body = document.getElementsByTagName('body')[0];
    let body_element = body.childNodes;
    alert (body_element.length);
}
//window.onload = countBodyChildren;
function prepareGallery() {
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById('imagegallery')) return false;
    let gallery = document.getElementById('imagegallery');
    let links = gallery.getElementsByTagName('a');
    for(let i=0; i<links.length; i++) {
        links[i].onclick = function () {
            if(showPic(this)) {
                return false;
            } else {
                return true;
            }
        }
    }
}

function addLoadEvent(func) {
    let oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement) {
    let parent = targetElement.parentNode;
    if(parent.lastChild === targetElement) {
        parent.appendChild(newElement);Q
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    let placeholder = document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','../picture/20.jpg');
    placeholder.setAttribute('alt','this is a photo.');
    let gall = document.getElementById('imagegallery');
    insertAfter(placeholder,gall);
    let description = document.createElement('p');
    description.setAttribute('id','description');
    let txt = document.createTextNode('the photo you choice.');
    description.appendChild(txt);
    insertAfter(description,placeholder);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);