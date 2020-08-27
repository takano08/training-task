<template>
<div class="container">
  <div class ="top" height="500px">
    <div class="demo-image__lazy">
      <el-image class="top-image" v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
  </div>

  <div class="main">
    <h3>NEWS</h3>

    <div class="box">
      <ul v-for="article in articles" style="list-style: none">
        <li  v-if="article.tag==='news'">
          <el-link :underline="false" class="news-title">
          <a v-on:click="moveDetail(article.articleId)">{{ article.createdDate}}  {{ article.title}}</a>
          </el-link>
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
  data() {
    return {
      urls: [
        '/image/topVue.jpg',

      ]
    }
  },

  methods: {
    moveDetail(articleId) {　　// articleId = 1
      this.$router.push({path: 'detail', query: {id: articleId}});
    }
  },



  computed: {
    articles() {
      return this.$store.state.article.articles;
    }
  },
  mounted() {
    this.$store.dispatch('article/fetchArticlesAction')
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

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
     height: 40px;
    }


  .box p {
    text-align: left;
    margin-left: 15px;
    display: inline-block;

  }

  .container {
    height:100%;
    font-family: 'Lato', sans-serif;
  }

  .top {
    height:40%;
  }

  .main {
    height:30%;

  }

  .news-title a {
    font-size: 16px;
  }

  .contents {
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .main h3 {
    font-size: 22px;
    margin : 0px;
    line-height: 60px;
  }
  .main p{

  }

  .el-image__inner {
    height: 300px;
    object-fit: cover;
  }


</style>
