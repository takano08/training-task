<template>
<div class="container">
  <div class ="header">
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>

  <div class="main">
    <div class="box scroll">
      <p>お知らせ</p>
      <p><nuxt-link to="/news">news1</nuxt-link></p>
      <p>news2</p>
      <p>news3</p>
      <p>news4</p>
      <p>news5</p>
    </div>
  </div>

  <div class="footer">
    <ContentCards></ContentCards>
  </div>
</div>




</template>

<script>
export default {}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .box{
    width:400px;
    height:300px;
    background:#ddd;
    margin-left:auto;
    margin-right:auto;
  }
  .scroll{
    overflow:scroll;
  }

  .container {
    height:100%
  }

  .header {
    height:40%;
  }

  .main {
    height:30%;

  }

  .footer {
    height:30%;
  }
</style>
