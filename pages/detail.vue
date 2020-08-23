<template>
  <div class="detail-container">
    <div class="detail-title">
     <p class="detail-date">
     <span>{{ article.createdDate }}</span>
     {{ $route.query.id }}
     </p>
     <h1>{{ article.title }}</h1>
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
      /*const url='/api/article/' +this.$route.query.id
      console.log(url)
      axios.get(url) //apiからのデータ取得をリクエスト
        .then((res) => {    //thenはレスポンスを受け取った段階で呼ばれるメソッド(res)にはレスポンスデータが入っている
            console.log(res.data) //res.dataにはjsonオブジェクトが入っている
            return {article:res.data}
              })*/
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
  .detail-title {
    border-bottom:solid 2px #333;
  }

  .detail-date {
    text-align:left;
  }
</style>
