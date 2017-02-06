<template>
  <div id="index">
    <div class="me" v-if="isLogin">
      <div></div>
    </div>
    <div class="me" v-else>
      Not sorry
    </div>
    <div class="list">
      <ul>
        <router-link tag="li" to="/Index/aboutSchool">
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-school"></use>
          </svg>
          <p>学校简介</p>
        </router-link>
        <router-link tag="li" to="/Index/aboutCollege">
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-book-2"></use>
          </svg>
          <p>院系简介</p>
        </router-link>
      </ul>
      <ul>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-desk"></use>
          </svg>
          <p>师资简介</p>
        </li>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-abc"></use>
          </svg>
          <p>校园文化</p>
        </li>
      </ul>
      <ul>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-light-bulb"></use>
          </svg>
          <p>图书资源</p>
        </li>
        <li>
          <svg class="icon-index" aria-hidden="true">
            <use xlink:href="#icon-star"></use>
          </svg>
          <p></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  #index .me{
    width: 100%;
    height: 16rem;
    background-color: #00BC8C;
    border-bottom: 0.6rem solid #F4F3F1;
  }
  #index .list{
    width: 100%;
  }
  #index .list ul{
    width: 90%;
    height: 5.6rem;
    margin: auto;
  }
  #index .list li{
    width: 49%;
    height: 5.6rem;
    display: block;
    float: left;
  }
  #index .list li p{
    margin-top: 2.2rem;
    font-weight: 600;
  }
  #index .list ul:nth-child(2){
    border-top: 0.12rem solid #E3E3E3;
    border-bottom: 0.12rem solid #E3E3E3;
  }
  #index .list li:nth-child(2n+1){
    border-right: 0.12rem solid #E3E3E3;
  }
  #index .icon-index{
    float: left;
    width: 40%; height: 50%;
    margin-top: 1rem;
    margin-left: 1rem;
  }
</style>
<script>
    export default{
        data(){
            return{
                title:'主页',
                isLogin : true
            }
        },
        components:{

        }
    }
</script>
