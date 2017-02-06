<template>
    <div id="progress">
      <div id="header">{{title}}</div>
      <ul>
        <li>
          <div class="list-left">
            <span>V 2.0</span>
            <span>17-02-06</span>
          </div>
          <div class="list-right">
            <h3>服务器部署完成</h3>
            <p>1.解决vue访问跨域问题</p>
            <p>2.vue和node数据交互打通</p>
            <p>3.意见反馈功能完成</p>
          </div>
        </li>
        <li>
          <div class="list-left">
            <span>V 1.3</span>
            <span>17-01-19</span>
          </div>
          <div class="list-right">
            <h3>关于院系功能上线</h3>
            <p>1.新加入ElementUI组件</p>
            <p>2.关于院系完成</p>
          </div>
        </li>
        <li>
          <div class="list-left">
            <span>V 1.2</span>
            <span>17-01-14</span>
          </div>
          <div class="list-right">
            <h3>设置功能部分完成</h3>
            <p>1.关于软件完成</p>
            <p>2.更新公告完成</p>
            <p>3.意见反馈前端完成</p>
          </div>
        </li>
        <li>
          <div class="list-left">
            <span>V 1.1</span>
            <span>17-01-05</span>
          </div>
          <div class="list-right">
            <h3>服务器搭建</h3>
            <p>1.服务器使用wamp进行搭建</p>
            <p>2.后端接口使用node搭建</p>
            <p>3.前端使用代理调用后端接口</p>
          </div>
        </li>
        <li>
          <div class="list-left">
            <p>V 1.0</p>
            <p>17-01-04</p>
          </div>
          <div class="list-right">
            <h3>环境搭建</h3>
            <p>1.vue展示视图和控制路由</p>
            <p>2.node.js提供后端API</p>
            <p>3.mysql进行数据存储</p>
          </div>
        </li>
      </ul>
    </div>
</template>
<style>
#progress ul{
  width: 100%;
  margin-top: 4.2rem;
  margin-bottom: 3rem;
}
#progress ul li{
  width: 96%;
  height: 6.4rem;
  border: 1px solid #8FCCE9;
  margin: 0.8rem auto;
}
#progress .list-left{
  width: 30%;
  height: 100%;
  float: left;
  text-align: center;
  padding-top: 2rem;
  background-color: #CDE8F6;
}
#progress .list-left span{
  display: block;
}
#progress .list-right{
  width: 70%;
  height: 100%;
  float:left;
}
#progress .list-right h3{
  text-align: center;
}
#progress .list-right p{
  width: 90%;
  font-size: 1rem;;
  margin: 0 auto;
  text-overflow: ellipsis;  /*超过的字显示省略号*/
  white-space: nowrap;      /*强制换行*/
  overflow: hidden;         /*超出隐藏*/
}
</style>
<script>
    export default{
        data(){
            return{
                title:'更新公告'
            }
        },
        components: {

        }
    }
</script>
