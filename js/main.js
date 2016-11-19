$(document).ready(function () {

    // $('body').animatescroll({
    //     scrollSpeed: 3000,
    //     easing: 'easeOutBounce'
    // });

    $.toast({
        text: 'I also have accounts on <a href="https://www.linkedin.com/in/laurenyockey" target="_blank">LinkedIn</a> and <a href="https://www.github.com/lyockey" target="_blank">Github</a>', // Text that is to be shown in the toast
        heading: 'Hey there!', // Optional heading to be shown on the toast
        icon: 'info', // Type of toast icon
        showHideTransition: 'fade', // fade, slide or plain
        allowToastClose: true, // Boolean value true or false
        hideAfter: 30000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
        position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
        textAlign: 'left',  // Text alignment i.e. left, right or center
        loader: false,  // Whether to show loader or not. True by default
    });

});

/////////////// SKILLS BARS //////////////////

/////// LANGUAGES //////////

//XHTML
var bar1 = new ProgressBar.Line('#lang1', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ffea82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar1.animate(1.0);  // Number from 0.0 to 1.0


//HTML5
var bar2 = new ProgressBar.Line('#lang2', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ffea82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar2.animate(1.0);  // Number from 0.0 to 1.0

//CSS
var bar3 = new ProgressBar.Line('#lang3', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ffea82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar3.animate(0.9);  // Number from 0.0 to 1.0

//JS
var bar4 = new ProgressBar.Line('#lang4', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ffea82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar4.animate(0.5);  // Number from 0.0 to 1.0

//jQuery
var bar5 = new ProgressBar.Line('#lang5', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ffea82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar5.animate(0.55);  // Number from 0.0 to 1.0

//PHP
var bar6 = new ProgressBar.Line('#lang6', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ffea82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar6.animate(0.35);  // Number from 0.0 to 1.0


////////// SOFTWARE //////////////
// PHOTOSHOP
var bar7 = new ProgressBar.Line('#design1', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#1a75ff',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar7.animate(0.75);  // Number from 0.0 to 1.0

//INDESIGN
var bar8 = new ProgressBar.Line('#design2', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#1a75ff',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar8.animate(0.95);  // Number from 0.0 to 1.0

//ILLUSTRATOR
var bar9 = new ProgressBar.Line('#design3', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#1a75ff',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar9.animate(0.78);  // Number from 0.0 to 1.0


/////// DIGITAL MARKETING //////
//SEO
var bar10 = new ProgressBar.Line('#dig1', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar10.animate(1.0);  // Number from 0.0 to 1.0

//SEM
var bar11 = new ProgressBar.Line('#dig2', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar11.animate(0.7);  // Number from 0.0 to 1.0

//ANALYTICS
var bar12 = new ProgressBar.Line('#dig3', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar12.animate(0.75);  // Number from 0.0 to 1.0

//SOCIAL
var bar13 = new ProgressBar.Line('#dig4', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar13.animate(0.9);  // Number from 0.0 to 1.0

//COPY
var bar14 = new ProgressBar.Line('#dig5', {
    strokeWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    color: '#ff0000',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'}
});

bar14.animate(1.0);  // Number from 0.0 to 1.0
