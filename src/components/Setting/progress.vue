<template>
    <div id="progress">
      <div id="header">{{title}}</div>
      <ul>
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
            <span>V 1.0</span>
            <span>17-01-04</span>
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
  margin-top: 16%;
  margin-bottom: 10%;
}
#progress ul li{
  width: 96%;
  height: 6rem;
  border: 1px solid #8FCCE9;
  margin: 0.8rem auto;
}
#progress .list-left{
  width: 30%;
  height: 100%;
  float: left;
  background-color: #CDE8F6;
}
#progress .list-left span{
  width: 100%;
  display: block;
  text-align: center;
  padding-top: 1.2rem;
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
        components:{

        }
    }
</script>
