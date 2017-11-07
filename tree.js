//rysowanie choinki za pomocą  console.log
function drawTree(n) {
//poziomy
    for (var i = 1; i <= n; i++) {
        star = '';
//iteracje
        for (var j = n - 1; j > i; j--) {
            star = star + ' ';
        }
        for (var j = 1; j <= (2 * i - 1); j++) {

            star = star += '*';
        }
       console.log(star);
        
        if (i==9) {
            console.log('**Merry Christmas**');
        }
        continue;
    }
    
}
drawTree(10)

//beautifull christmas tree
function drawTree(n) {
 
//poziomy
    for (var i = 1; i <= n; i++) {
        star = '*';
//iteracje
        for (var j = n - 1; j > i; j--) {
            star = star + '    ';
        }
        for (var j = 1; j <= (3 * i - 1); j++) {

            star = star += '{*}';
        }
       console.log(star);
        
        if (i==9) {
            console.log('  **Merry Christmas****Merry Christmas****Merry Christmas****Merry Christmas**');
        }
        continue;
    }
    
}
drawTree(10)
