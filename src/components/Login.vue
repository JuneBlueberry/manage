<template>
    <div id="login">
      <div class="head-pic"></div>
      <form>
        <mu-text-field class="form-input" label="学号" hintText="请输入学号" type="number" v-model="username" labelFloat/><br/>
        <mu-text-field class="form-input" label="密码" hintText="请输入密码" type="password" v-model="password" labelFloat/><br/>
        <div>
          <mu-radio label="学生" name="group" nativeValue="student" v-model="value" class="dremo-radio"/>
          <mu-radio label="教师" name="group" nativeValue="teacher" v-model="value" class="dremo-radio"/>
          <mu-radio label="管理员" name="group" nativeValue="admin" v-model="value" class="dremo-radio"/>
        </div>
        <input class="input-submit" type="button" value="登录" @click="login" />
        <mu-dialog :open="dialog" title="提示信息">
          亲,信息必须填写完整哦！
          <mu-flat-button label="确定" slot="actions" @click="close" primary />
        </mu-dialog>
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
              dialog: false
            }
        },
        components:{

        },
        methods : {
            login(){
                var username = this.username;
                var password = this.password;
                var value = this.value;
                console.log(username+"+"+password+"+"+value)
                if(username=="" || password=="" || value==""){
                  this.dialog = true;
                  return;
                }else{
                    //根据不同角色调用不同的API
                    switch (value){
                      case "student":
                      {
                        this.$http.post('/api/login/studentLogin', {
                          username : username,
                          password : password
                        },{}).then((response) => {
                          // 响应成功回调
                          console.log(response.body[0]);

                        }, (response) => {
                          // 响应错误回调
                          console.log(response);
                        });
                        return;
                      }
                      case "teacher":
                      {

                      }
                      case "admin":
                      {

                      }
                    }
                }
            },
            close(){
                this.dialog = false
            }
        }
    }
</script>
