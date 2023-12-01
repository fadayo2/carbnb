const imageBox = document.getElementById('imageBox')

var loadFile = function(event) {
    // var image = document.getElementById('output');
    let image = URL.createObjectURL(event.target.files[0]);

    imageBox.style.cssText+= `background-image:url(${image})`
    document.getElementById('txt').style.display = 'none'
};