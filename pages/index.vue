<template>
<div class="container">
  <div class ="top">
  <div class="block">
    <el-carousel height="300px">
      <el-carousel-item >
        <img src="https://i.shgcdn.com/a1060683-bd16-4ffd-ada6-a108706605cf/-/format/auto/-/preview/3000x3000/-/quality/lighter/" class="image">
      </el-carousel-item>
      <el-carousel-item >
        <img src="https://i.shgcdn.com/1118ef0a-498e-41bb-b816-e62a0a476581/-/format/auto/-/preview/3000x3000/-/quality/lighter/" class="image">
      </el-carousel-item>
      <el-carousel-item >
        <img src="https://i.shgcdn.com/a1060683-bd16-4ffd-ada6-a108706605cf/-/format/auto/-/preview/3000x3000/-/quality/lighter/" class="image">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>

  <div class="main">
    <div class="box scroll">
      <h3>お知らせ</h3>
      <ul v-for="article in articles">
        <li>
          <p>{{ article.date}}</p>
          <p>{{ article.title}}</p>
        </li>
      </ul>
    </div>
  </div>

  <div class="contents">
    <ContentCards></ContentCards>
  </div>
</div>




</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.state.article.articles;
    }
  }
}
</script>

<style>
  .el-carousel__item  {
      font-size: 14px;
      opacity: 0.75;
      line-height: 250px;
      margin: 0;
    }

  .box{
    width: 95%;
    height: 450px;
    margin-top: 20px;
    margin-left:auto;
    margin-right:auto;
    overflow:scroll;
    border-top: solid 1px #eee;
    border-bottom: solid 1px #eee;
  }

  .box ul li {
      text-align: left;
    }

  .box p {
    text-align: left;
    margin-left: 30px;
  }

  .container {
    height:100%
  }

  .top {
    height:40%;
  }

  .main {
    height:30%;

  }

  .contents {
    margin-top: 20px;
    margin-bottom: 40px;
  }
</style>
