$(document).ready(function(){
    function changeSize(par,elem){
        var photo = elem.parent('.photo-settings').prev('.gallery-wrap__photo').children('img');
        var val = elem.val()
        photo.css(String(par), String(val)+"px");
    }
    function changePos(par,elem){
        let gallery__item = elem.parent('.photo-settings').parent('.gallery-wrap');
        if (par == 'prev'){
            gallery__item.insertBefore(gallery__item.prev())
        }
        else if (par == 'next'){
            gallery__item.insertAfter(gallery__item.next())
        }
    }

    $('.gallery-wrap').children('.photo-settings').children('.photo-settings__to-top').on('click',function(){
        changePos('prev',$(this))
    });
    $('.gallery-wrap').children('.photo-settings').children('.photo-settings__to-bottom').on('click',function(){
        changePos('next',$(this))
    });
    $('.gallery-wrap').children('.photo-settings').children('.photo-settings__width').on('keyup keydown click',function(){
        changeSize('width',$(this));
    });
    $('.gallery-wrap').children('.photo-settings').children('.photo-settings__height').on('keyup keydown click',function(){
        changeSize('height',$(this));
    });
});