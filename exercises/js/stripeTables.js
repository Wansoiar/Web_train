function stripeTables() {
    if(!document.getElementsByTagName) return false;
    let tables = document.getElementsByTagName('table');
    let odd,rows;
    for(let i=0; i<tables.length; i++) {
        odd = false;
        rows = document.getElementsByTagName('tr');
        for(let j=0; j<rows.length; j++) {
            if(odd === true) {
                rows[j].style.backgroundColor = '#ffc';
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}

function highlightrows() {
    if(!document.getElementsByTagName) return false;
    let row = document.getElementsByTagName('tr');
    for(let i=0; i<row.length; i++) {
        row[i].onmouseover = function () {
            this.style.fontWeight = 'bold';
        }
        row[i].onmouseout = function () {
            this.style.fontWeight = 'normal';
        }
    }
}

addLoadEvent(stripeTables);
addLoadEvent(highlightrows);