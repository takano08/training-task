<template>
  <div class="detail-container">
    <div class="detail-title">
     <h1>{{ post[0].title }}</h1>
     <p class="detail-date">
     <span>{{ post[0].date }}</span>
     </p>
    </div>

    <div class="detail-body">
       <p>{{ post[0].body }}</p>
    </div>
    <div class="prev-link">
      <div class="prev-next-label">
        <p>前の記事</p>
        <p>タイトル</p>
      </div>
      <div class="next-link">
        <p>前の記事</p>
        <p>タイトル</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
       post:[{id:0,title:'テストタイトル',date:20200815,body:'記事本文'}],
      }
    },

    mounted(){
      axios.get('/api/employees') //apiからのデータ取得をリクエスト
        .then((res) => {    //thenはレスポンスを受け取った段階で呼ばれるメソッド(res)にはレスポンスデータが入っている
            console.log(res.data) //res.dataにはjsonオブジェクトが入っている
            return {post:data}
              })

    }
}




</script>
