# cmui
cmui超萌框架,快速布局
<br />官方网站 aiplat.com
<br />cmui包含cmreset.css和cmstyle.css两个css文件
<br /><br />
<b>cmreset.css说明</b>
<br /><br />1,盒模型采用IE盒子，即css3中的box-sizing值为border-box
<br />2,样式中添加了bootstrap中的栅格布局，为了方便适应使用bootstrap前端开发者
<br />3,使用bootstrap部分如:container、container-fluid、row、col-xs-num、col-sm-num、col-md-num、col-lg-num,均有修改
<br /><br />
<b>cmstyle.css说明</b>
<br /><br />1,使用em相对单位,cmreset.css中同为em
<br />宽高或长度厚度较小时部分单位使用px,如.cm_bb1e{border-bottom:1px solid #eee}
<br />2,\<span class="cm_fs05"\>cmui\<\/span\>
<br />意思cmui字体大小对应.cm_fs05{font-size:0.5em}
<br />.cm_fs05中cm为cmui的前缀cm,
<br />.cm_fs05中fs为font-size两个单词各自的首字母集合,所有类命名均类似
<br />.cm_fs05中05为0.5em大小,em为如上1说明
<br />.cm_fs06.....cm_fs3--06、07、08、09、1、11、12、13、15，2，3雷同 .cm_fs3{font-size:3em}
<br /><br />
<b>注意</b>
<br /><br />1,请在html文件中添加meta如下:
<br />\<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no"\>
<br />2,以上两个css文件的说明文档还有很多未写,后续完善,多谢支持与赞.


