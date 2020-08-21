<template>
 <div class="blog-container">
    <div class="blog-top">
      <h1>ブログ</h1>
    </div>

  <div class="blog-main">
    <div v-for="article in articles" class="text item">
      <el-card class="blog-card" v-if="article.tag==='blog'">
        <div class="article-header">
          <h2>{{ article.title}}</h2>
        </div>
        <div class="article-main">
          <p>{{ article.date }}</p>
        </div>
        <div class="article-footer">
        <el-link type="primary">
          <p v-on:click="moveDetail(article.id)">read more</p>
        </el-link>
        </div>
      </el-card>
    </div>
  </div>
 </div>
</template>

<script>
  export default {

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
    background-image:url("https://d1f5hsy4d47upe.cloudfront.net/75/753641ca2aea0d4485e2472a0c04f3be_t.jpeg");
    height:200px;
  }

 .blog-card {
     width: 500px;
     margin:70px auto;
     text-align: center;
   }


</style>
