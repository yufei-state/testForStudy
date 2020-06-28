
setTimeout(function() {
    document.body.style.backgroundColor = '#ddd';
}, 5000)


var div = document.getElementsByTagName('div')[0];
div.onclick = function() {
    alert('bingo');
}

