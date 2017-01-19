<template>
  <div id="aboutCollege">
    <div id="header">{{title}}</div>
    <div id="college-list">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="基础医学院" name="1">
          <div>湖北科技学院基础医学院创建于1965年，前身为湖北医学院咸宁分院基础医学部，2008年单独建制。经过五十余年的建设和发展，学院现有建筑面积11000平方米，教学科研仪器设备1200余万元。学院下设12个教研室、1个省级实验教学示范中心、1个生命科学标本陈列馆和1个基础医学研究中心。</div>
          <div>学院现有教职工107人，其中专任教师80人。任课教师中，教授13人、副教授19人；博士25人、硕士56人。学院聘有“楚天学者”、“彩虹学者”、“揽月学者”特聘教授5人；教师中享受国务院和省政府特殊津贴专家、教育部“新世纪优秀人才”、省有突出贡献专家、市高层次人才9人，硕士生导师5人；近年来先后有5名教师获得校十佳教师、科研骨干等光荣称号。</div>
        </el-collapse-item>
        <el-collapse-item title="临床医学院" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="五官医学院" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="护理学院" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  export default{
      data(){
          return{
              title : '关于院系',
              activeName: '1'
          }
      }
  }
</script>

<style>
  #college-list{
    margin-top: 4rem;
  }
</style>
