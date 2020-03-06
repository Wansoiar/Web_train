window.onload = function () {
    let para0 = document.createElement('p');
    let txt0 = document.createTextNode('This is ');
    para0.appendChild(txt0);
    let emp = document.createElement('em');
    let txt1 = document.createTextNode('my');
    emp.appendChild(txt1);
    para0.appendChild(emp);
    let txt2 = document.createTextNode(' content.');
    para0.appendChild(txt2);
    let testdiv = document.getElementById('testdiv');
    testdiv.appendChild(para0);
}

