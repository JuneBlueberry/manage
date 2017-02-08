<template>
  <div id="opinion">
    <div id="header">{{title}}</div>
    <form>
      <mu-text-field class="form-input" label="请输入标题" v-model="opinionTitle" labelFloat/><br/>
      <mu-text-field class="form-input" label="请输入联系方式" v-model="opinionMob" labelFloat/><br/>
      <mu-text-field class="form-input text" hintText="请输入内容" v-model="opinionContent" multiLine :rows="3" :rowsMax="6"/><br/>
      <mu-raised-button label="提交" class="form-button" @click="addOpinion" primary/>
    </form>
    <mu-dialog :open="dialog" title="提示信息">
      亲,信息必须填写完整哦！
      <mu-flat-button label="确定" slot="actions" @click="close" primary />
    </mu-dialog>
  </div>
</template>

<style>
#opinion form{
  width: 100%;
  margin-top: 4rem;
}
.form-input{
  display: block;
  width: 80%;
  margin:0 auto;
}
#opinion .text{
  margin-top: 1rem;
}
.form-button {
  width: 30%;
  display: block;
  margin: 1rem auto;
}
</style>

<script>
  export default{
      data(){
          return{
            title : '意见反馈',
            opinionTitle : '',
            opinionMob : '',
            opinionContent : '',
            dialog: false
        }
      },
      methods : {
          addOpinion(){
              var title = this.opinionTitle;
              var mob = this.opinionMob;
              var content = this.opinionContent;
              if(title=="" || mob=="" || content==""){
                  this.dialog = true;
                  return;
              }else{
                  //添加意见反馈数据
                this.$http.post('http://timoya.com:3000/api/setting/addOpinion', {
                    title : title,
                    mob : mob,
                    content : content
                },{
                  headers: {
                    //"Conten-Type":"http://localhost:3000/"
                  },
                  emulateJSON: true
                }).then((response) => {
                    // 响应成功回调
                    console.log(response);
                    if(response.body.affectedRows == "1"){
                      this.submitSuccess();
                      //提交成功后表单清空
                      this.opinionTitle = '';
                      this.opinionMob = '';
                      this.opinionContent = '';
                    }else{

                    }
                }, (response) => {
                    // 响应错误回调
                    console.log(response);
                });
              }
          },
          close(){
              this.dialog = false
          },
          submitSuccess() {
            this.$message({
              message: '提交成功！',
              type: 'success'
            });
          },
      }
  }
</script>
