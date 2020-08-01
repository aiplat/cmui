//npm命令行:less生成css
//创建者：womendi@qq.com
//日期：2017-12-01
const le2css = require('./less2css');

module.exports = ()=>{
    const buildDir = global.buildDir;
    const dir = global.staticDir;
    const cssArr = require('./lessConf')();
    if(cssArr.length>0){
        for(let i in cssArr){
            le2css(buildDir+cssArr[i].fromPath,dir+cssArr[i].toPath,'',cssArr[i].isCompress);
        }
    }
};
