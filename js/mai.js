var j = $.noConflict();
j(document).ready(function () {
    j(".p1").click(function(){
        j("#p2,#p3").css({
            'transform' : 'translateX(200%)',
        });
        j(".text-boxlay").css({
            'transform' : 'translateX(333%)',
        });
        j("#p1").css({
            'background' : 'darkslateblue',
            'filter' : 'blur(0)',
        });
        j(".p1,.p2,.p3").css({
            'transform' : 'scale(1)',
        });
    });
    j(".p2").click(function () { 
        j("#p2").css({
            'transform' : 'translateX(9%)',
        });
        j("#p3").css({
            'transform' : 'translateX(200%)',
        });
        j("#p1").css({
            'background' : '#000',
            'filter' : 'blur(2px)'
        });
        j(".p1,.p2,.p3").css({
            'transform' : 'scale(.8)',
        });
        j(".text-boxlay").css({
            'transform' : 'translateX(0)',
        });
        j("#boxlay-3").css('transform','translateX(333%)');
    });
    j(".p3").click(function () { 
        j("#p3").css({
            'transform' : 'translateX(9%)',
        });
        j("#p2").css({
            'transform' : 'translateX(200%)',
        });
        j(".p1,.p2,.p3").css({
            'transform' : 'scale(.8)',
        });
        j(".text-boxlay").css({
            'transform' : 'translateX(0)',
        });
        j("#boxlay-2").css('transform','translateX(333%)');
    });
});