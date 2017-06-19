// 使用此插件者调用
// 自定义插件
  var userOpt={
    STATIC_PATH:"./",//资源根目录:图片
    vueOpt:{
      methods:{//可写关闭close(),保存方法（）进行替换

      }
    }
  }
  var o= new CreatePop(userOpt);


//S-测试DEMO可删
setTimeout(function(){
  let obj={
    inputData:{
      ctrl:'material',//weixin,toutiao,weibo,material
      publishCtrl:'weixin'//weixin,material
    },
  }
  o.setInputData(obj);
//
},2000)
//E-测试DEMO可删
