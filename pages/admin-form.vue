<template>
  <div class="admin-form-container">
      <!--{{article}}-->
      <h2>記事入力フォーム</h2>
    <div class="admin-form">
      <el-form :model="article" :rules="adminRules" ref="article" label-width="130px" class="demo-adminForm">
        <el-form-item label="タイトル" prop="title">
          <el-input v-bind:disabled="adminVerified" v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="投稿日" required>
          <el-form-item prop="createdDate">
            <el-date-picker v-bind:disabled="adminVerified" type="date" placeholder="Pick a date" v-model="article.createdDate" style="width: 500px;"></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="Tag" prop="tag">
          <el-radio-group v-bind:disabled="adminVerified" v-model="article.tag">
            <el-radio label="news"></el-radio>
            <el-radio label="blog"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="本文" prop="body">
          <el-input type="textarea" v-bind:disabled="adminVerified" v-model="article.body" style="width: 500px;"></el-input>
        </el-form-item>
        <el-form-item>
          <template v-if="!adminVerified">
            <el-button type="primary" @click="adminVerifiedForm()">内容確認</el-button>
          </template>
          <template v-if="adminVerified">
            <el-button type="primary" @click="adminSubmitForm('article')">送信</el-button>
            <el-button type="primary" @click="adminVerifiedForm()">戻る</el-button>
          </template>
          <el-button @click="adminResetForm('article')">リセット</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    data() {
      return {
        adminVerified : false,

        article: {
          articleId:null,
          title: '',
          createdDate: '',
          tag:'',
          body: '',
          owner:this.$auth.user.loginId
        },
        adminRules: {
          title: [
            { required: true, message: '必須項目です。', trigger: 'change' }
          ],
          /*createdDate: [
            { type: 'date', required: true, message: '必須項目です。', trigger: 'change' }
          ],*/
          tag: [
            { required: true, message: '必須項目です。', trigger: 'change' }
          ],
          body: [
            { required: true, message: '必須項目です。' ,trigger: 'blur' }
          ]
        }
      };
    },

    mounted() {
      if(!this.$route.query.id){
        //!this.$route.query.idは結果てきにundefined
          console.log("新規")
      }else{
        console.log("編集")
        this.article.id=this.$route.query.id
        const url='/api/article/' +this.$route.query.id
        axios.get(url).then(res=>(this.article=res.data))
      }
    },
    methods: {
      adminSubmitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            if(!this.article.articleId){
              console.log("sinnki")
              console.log(this.article)
              this.$store.dispatch('article/createArticlesAction',this.article)

            }else{//storeを経由しないのは、送信したもの（article）を再度読み込む必要がないから
              console.log("編集")
              const url='/api/update-article'
              console.log(url)
              axios.post(url,this.article) //apiからのデータ取得をリクエスト
                .then((res) => {//thenはレスポンスを受け取った段階で呼ばれるメソッド(res)にはレスポンスデータが入っている
                console.log(this.article)
                console.log(res)
                  return true;

                })
            }

            alert('送信しました。'); //axios通信
            //this.adminResetForm(formName);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      adminResetForm(formName) {
        this.$refs[formName].resetFields();
      },
      adminVerifiedForm() {
        this.adminVerified = !this.adminVerified;
      }

    },


   middleware({ store, redirect }) {
      if(!store.$auth.loggedIn) {
        redirect('/admin');
      }
    }
  }
</script>

<style>
  .admin-form-container h2{
    color: #333;
    font-size: 22px;
    border-bottom: #eee 1px solid;
  }
</style>
