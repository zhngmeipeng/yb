/**
 * Created by zmp on 2016/1/27.
 */
$(function(){
    var title=$('.aa');

    var showImg=function(i){

        title[i].onmouseover=function(){

            $($(this).find('img')).attr('src','img/025_r1_c'+(i+1)+'.gif')
        }
        title[i].onmouseout=function(){
            $(this).find('img').attr('src','img/025-1_r1_c'+(i+1)+'.gif')
        }


    }

    for(var i=0;i<title.length;i++){
        showImg(i)
    };
})