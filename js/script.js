//Code generator
var src, trmnl, line, caret, speed, pos;
trmnl = $('#terminal');
caret = $('#caret');
line = $('#line');
pos = 0;
speed = 4;

$('html').on('keydown', function(e) {
    pos += speed;
    if (pos > src.length + speed - src.length % speed) {
        pos = 0;
    }
    trmnl.html(trmnl.html() + src.slice(pos - speed, pos));
    caret.removeClass('transparent');
    line.css({
        'top': caret.offset().top
    });
    window.scrollTo(0, document.body.scrollHeight);
});

// caret animation
setInterval(function() {
  caret.toggleClass('transparent');
}, 600);

// filler code
src = "\n\n/**\n\tA class for executing binary searches through an array.\n*/\npublic class BinarySearcher\n{\n\tprivate int[] a;\n\n\t/**\n\t\tConstructs a BinarySearcher.\n\t\t@param anArray a sorted array of integers\n\t*/\n\tpublic BinarySearcher(int[] anArray)\n\t{\n\t\ta = anArray;\n\t}\n\n\t/**\n\t\tFinds a value in a sorted array, using the binary\n\t\tsearch algorithm.\n\t\t@param v the value to search\n\t\t@return the index at which the value occurs, or -1\n\t\tif it does not occur in the array\n\t*/\n\tpublic int search(int v)\n\t{\n\t\tint low = 0;\n\t\tint high = a.length - 1;\n\t\twhile (low <= high)\n\t\t{\n\t\t\tint mid = (low + high) / 2;\n\t\t\tint diff = a[mid] - v;\n\n\t\t\tif (diff == 0) // a[mid] == v\n\t\t\t\treturn mid;\n\t\t\telse if (diff < 0) // a[mid] < v\n\t\t\t\tlow = mid + 1;\n\t\t\telse\n\t\t\t\thigh = mid - 1;\n\t\t}\n\t\treturn -1;\n\t}\n}\n\n";



//Motivational sound generator
s1 = new Audio('sound/1.mp3');
s2 = new Audio('sound/2.mp3');
s3 = new Audio('sound/3.mp3');
var current;
window.setInterval(function () {
    x = Math.floor(Math.random() * 4) + 1;  
    while(current === x) {
        x = Math.floor(Math.random() * 4) + 1;  
    }
    current = x;
    if(x == 1) s1.play();
    if(x == 2) s2.play();
    if(x == 3) s3.play();
}, 3500);
