function popUp(winURL) {
    window.open(winURL , "popup" , "width=320,height=480");
}

function prepareLinks() {
    if(!document.getElementsByTagName) return false;
    let links = document.getElementsByTagName('a');
    for(let i=0; i<links.length; i++) {
        if(links[i].getAttribute('class') === 'popup') {
            links[i].onclick = function () {
                popUp(links[i].getAttribute('href'));
                return false;
            }
        }
    }
}
window.onload = prepareLinks;