//less编译成css
//创建者：womendi@qq.com
//日期：2017-11-29
module.exports = (fromPath,toPath,func1,isCompress=true)=>{
    const less = require('less');
    const fs =require('fs');
    fs.readFile(fromPath, (err, data)=>{
        if (err) {
            return console.error(err);
        }
        less.render(data.toString(),{compress: isCompress},(e, output)=>{
            fs.writeFile(toPath, output.css,  (err)=>{
                let isCreate=1;
                if (err) {
                    console.error(err);
                    isCreate=err;
                    if(typeof 'func1'=='function'){
                        func1(isCreate);
                    }
                    return;
                }
                console.log('create css file:'+toPath);
                if(typeof 'func1'=='function'){
                    func1(isCreate);
                }
             });
        });
    });
}