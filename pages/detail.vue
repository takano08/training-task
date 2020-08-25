<template>
  <div class="detail-container">
    <div class="detail-title">
     <p class="detail-date">
     <span>{{ article.createdDate }}</span>
     <!--{{ $route.query.id }}-->
     </p>
     <h2>{{ article.title }}</h2>
    </div>

    <div class="detail-body">
       <p>{{ article.body }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        article: {
          articleId:null,
          title: '',
          createdDate: '',
          tag:'',
          body: '',
          owner:this.$auth.user.loginId
        }
      }
    },

    mounted(){

      this.article.id=this.$route.query.id
      const url='/api/article/' +this.$route.query.id
      axios.get(url).then(res=>(this.article=res.data))

    },

    computed: {
      articles() {
        return this.$store.state.article.articles;
      }
    }
}

</script>

<style>
  .detail-title h2{
    border-bottom:solid 2px #eee;
    font-size: 22px;
    color:#333;
  }

  .detail-date {
    text-align:left;
  }
</style>
