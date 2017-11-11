var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function () {
    var element = document.createElement('li'),
            num = document.getElementsByTagName('li');
    
    element.innerHTML = 'Item' + ' '+ num.length;
    list.appendChild(element); 
    
});
