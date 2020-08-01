//配置需要生成css的less
//创建者：womendi@qq.com
//日期：2018-02-07
module.exports = ()=>{
    //fromPath为less文件路径
    //toPath为生成css后的css文件路径
    const cssArr=[
        {fromPath:'/cmstyle.less',toPath:'/cmstyle.css',isCompress:false},
        {fromPath:'/cmstyle.less',toPath:'/cmstyle.wxss',isCompress:false},
        {fromPath:'/cmstyle.less',toPath:'/cmstyle.min.css',isCompress:true},
        {fromPath:'/cmstyle.less',toPath:'/cmstyle.min.wxss',isCompress:true},

        {fromPath:'/cmreset.less',toPath:'/cmreset.css',isCompress:false},
        {fromPath:'/cmreset.less',toPath:'/cmreset.wxss',isCompress:false},
        {fromPath:'/cmreset.less',toPath:'/cmreset.min.css',isCompress:true},
        {fromPath:'/cmreset.less',toPath:'/cmreset.min.wxss',isCompress:true},

        {fromPath:'/aiplat.less',toPath:'/aiplat.css',isCompress:false},
        {fromPath:'/aiplat.less',toPath:'/aiplat.wxss',isCompress:false},
        {fromPath:'/aiplat.less',toPath:'/aiplat.min.css',isCompress:true},
        {fromPath:'/aiplat.less',toPath:'/aiplat.min.wxss',isCompress:true},
    ];
    return cssArr;
}