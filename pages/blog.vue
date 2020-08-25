<template>
 <div class="blog-container">
    <div class="blog-top">
      <h1>BLOG</h1>
    </div>

  <div class="blog-main">
    <el-col :span="8" v-for="article in articles" :key="article" class="text item">
      <el-card class="blog-card" v-if="article.tag==='blog'">
        <div class="article-header">
          <h3>{{ article.title}}</h3>
        </div>
        <div class="article-main">
          <p>{{ article.createdDate }}</p>
        </div>
        <div class="article-footer">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-link type="primary">
          <p v-on:click="moveDetail(article.articleId)">read more</p>
        </el-link>
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
    background-color:#99FFFF;
    height:200px;
  }

 .blog-card {
     width: 400px;
     margin: 50px auto;
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

</style>
