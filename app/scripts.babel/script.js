'use strict';

$(function(){
    // TODO: いい感じにDOMの生成が完了した後に読み込みたい
    setTimeout(()=>{
        $('.Stacktrace-frameRowText > span:first-child').ready(()=>{

            $('.Stacktrace-frameRowText > span:first-child').map(function(){
                ///////////////////////
                // 下記のような形式
                // /home/.../hoge.coffee:141
                ///////////////////////
                let abs_path_and_line = $(this).text();
                let io_path = abs_path_and_line.slice(abs_path_and_line.indexOf('example'), abs_path_and_line.indexOf(':'));
                console.log('abs_path:', io_path);
                let line = abs_path_and_line.slice(abs_path_and_line.indexOf(':')+1);
                console.log('line:', line);

                console.log($(this).text());
                // TODO: オプションで渡せるようにする
                let local_path = '/your/path/'
                let url = `webstorm://open?file=${local_path}${io_path}&line=${line}`
                $(this).wrap( `<a href=${url}></a>`);
            });
        });
    }, 5000);

});
