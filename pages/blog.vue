<template>
 <div class="blog-container">
      <h2>BLOG</h2>
  <div class="blog-main">
    <el-col :span="8" v-for="article in articles" :key="article" class="text item">
      <el-card class="blog-card" v-if="article.tag==='blog'">
        <div slot="header" class="clearfix">
          <h3>{{ article.title}}</h3>
        </div>
        <div class="article-main">
          <div class="article-body">
            {{ article.body}}
          </div>
          <el-link type="primary" :underline="false">
            <p v-on:click="moveDetail(article.articleId)">read more...</p>
          </el-link>
        </div>
        <div class="article-footer">
          <a>{{ article.createdDate }} {{ article.owner }}</a>
          <el-avatar  class="footer-avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
      </el-card>
    </el-col>
  </div>
 </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('article/fetchArticlesAction')
    },

  methods: {
    moveDetail(articleId) {　　// articleId = 1
        this.$router.push({ path: 'detail' , query :{ id: articleId }});
  }

  },

  computed: {
    articles() {
      return this.$store.state.article.articles;
    }
  }
  }
</script>

<style>
  .blog-top {
    height:200px;
  }

 .blog-card {
     width: 400px;
     margin: 20px auto;
     text-align: center;
   }
  .blog-card h3 {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .blog-container h2 {
    color: #333;
    font-size: 22px;
    border-bottom: #eee 1px solid;
  }

  .article-body {
    height:150px ;
    overflow: hidden;
    line-height: 31px;
  }
</style>
