# cmui
cmui超萌框架,快捷布局
<br />
<b>自己写的布局框架，自适应跨平台设备</b>
<b>可应用于web、app、小程序</b>
<br /><br />
<br />实例1 webapp网站 AI智能空间 http://www.aiplat.com
<br />实例2 跨平台app  亲信地铁 腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro
<br />实例3 微信小程序 娱乐计分器
<br />cmui包含cmreset.css和cmstyle.css、aiplat.css三个css文件，同时生成可用于微信小程序开发的wxss文件
<br /><br />
<b>cmreset.css说明</b>
<br /><br />1,盒模型采用IE盒子，即css3中的box-sizing值为border-box
<br /><br />
<b>cmstyle.css说明</b>
<br /><br />1,栅格系统
<br />请在cmstyle.css文件搜索 ‘栅格系统’
<br />兼容pc与mobile写法:(pc端以1200px居中，mobile以100%适配)
<br />\<div class="cm_main2"\>
<br />    \<div class="cm_main"\>
<br />         \<ul class="cm_pc_12"\>
<br />            \<li class="cm_pc_12 cm_mob_6"\>显示主体div\<\/li\>
<br />            \<li class="cm_pc_12 cm_mob_6"\>显示主体div\<\/li\>
<br />            \<li class="cm_pc_4 cm_mob_12"\>显示主体div\<\/li\>
<br />            \<li class="cm_pc_4 cm_mob_12"\>显示主体div\<\/li\>
<br />            \<li class="cm_pc_4 cm_mob_12"\>显示主体div\<\/li\>
<br />         \<\/ul\>
<br />    \<\/div\>
<br />\<\/div\>
<br /><br />2,div单位主要为em(优于rem)，其他部分如border小尺寸单位为px
<br />例如: .cm_bb1ce{border-bottom:1px solid #eeeeee}
<br /><br />3,\<span class="cm_fs05"\>cmui\<\/span\>
<br />意思cmui字体大小对应.cm_fs05{font-size:0.5em}
<br />.cm_fs05中cm为cmui的前缀cm,
<br />.cm_fs05中fs为font-size两个单词各自的首字母集合,所有类命名均类似
<br />.cm_fs05中05为0.5em大小,em为如上1说明
<br />.cm_fs06.....cm_fs3--06、07、08、09、1、11、12、13、15，2，3雷同 .cm_fs3{font-size:3em}
<br /><br />4,以上三个css文件的说明文档还有很多未写,后续完善,多谢支持与赞.
<br /><br />
<b>兼容性</b>
<br /><br />1,实测兼容ie8
<br />2,兼容手机、电脑、平板等等一切联网设备
<br />3,一次布局，适配所有平台