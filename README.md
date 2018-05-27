# cmui
## cmui超萌框架,快捷布局
 - <b>自己写的布局框架，自适应跨平台设备</b>
 - <b>可应用于web、app、小程序</b>

 - 实例1 webapp网站 AI智能空间 http://www.aiplat.com
 - 实例2 跨平台app  亲信地铁 腾讯应用宝或苹果appstore搜索‘亲信地铁’、web访问http://m.aiplat.com/metro
 - 实例3 微信小程序 娱乐计分器

 - cmui包含cmreset.css和cmstyle.css、aiplat.css三个css文件，同时生成可用于微信小程序开发的wxss文件

---

# cmreset.css说明
<br /><br />1,盒模型采用IE盒子，即css3中的box-sizing值为border-box

---

# cmstyle.css说明
## 1,栅格系统
 - 请在cmstyle.css文件搜索 ‘栅格系统’
 - 兼容pc与mobile写法:(pc端以1200px居中，mobile以100%适配)
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

## 2,div单位主要为em(优于rem)，其他部分如border小尺寸单位为px
 - 例如: .cm_wh2{width:2em;height:2em}  1em等于一个字的字体大小
 - 例如: .cm_bb1ce{border-bottom:1px solid #eeeeee}

## 3,\<span class="cm_fs05"\>cmui\<\/span\>
 - 意思cmui字体大小对应.cm_fs05{font-size:0.5em}
 - .cm_fs05中cm为cmui的前缀cm,
 - .cm_fs05中fs为font-size两个单词各自的首字母集合,所有类命名均类似
 - .cm_fs05中05为0.5em大小,em为如上2说明
 - .cm_fs06.....cm_fs3--06、07、08、09、1、11、12、13、15，2，3雷同 .cm_fs3{font-size:3em}

## 4,以上三个css文件的说明文档还有很多未写,后续完善,多谢支持与赞.

---

# 兼容性
 - 1,实测兼容ie8
 - 2,兼容手机、电脑、平板等等一切联网设备
 - 3,一次布局，适配所有平台