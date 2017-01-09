<template>
    <div id="login">
      <div class="head-pic"></div>
      <form>
        <mu-text-field class="form-input" label="学号" hintText="请输入学号" type="password" labelFloat/><br/>
        <mu-text-field class="form-input" label="密码" hintText="请输入密码" type="password" labelFloat/><br/>
        <div>
          <mu-radio label="学生" name="group" nativeValue="student" v-model="value" class="dremo-radio"/>
          <mu-radio label="教师" name="group" nativeValue="teacher" v-model="value" class="dremo-radio"/>
          <mu-radio label="管理员" name="group" nativeValue="admin" v-model="value" class="dremo-radio"/>
        </div>
        <button class="input-submit" @click="">登陆</button>
      </form>
    </div>
</template>
<style>
  #login{
    width: 100%;
    height: 43rem;
    box-sizing: border-box;
    border: 1px solid transparent;
    background: url("../assets/images/bg.jpg") no-repeat;
    background-size: 100% 100%;
  }
  #login form{
    position: relative;
    display: block;
    width: 80%;
    margin: 40% auto;
    text-align: center;
  }
  #login .form-input{
    width: 80%;
  }
  #login .input-submit{
    width: 86%;
    height: 2.4rem;
    margin-top: 2rem;
    background-color: #FE5B4C;
    border: none;
    color: #FFFFFF;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 0.4rem;
  }
</style>
<script>
    export default{
        data(){
            return{
              title:'登录',
              username : '',
              password : '',
              value : '',
            }
        },
        components:{

        }
    }
</script>
