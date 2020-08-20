<template>
  <div class="admin-form-container">
    <div class="admin-form-top">
      <h1>記事入力フォーム</h1>
    </div>
    <div class="admin-form">
      <el-form :model="article" :rules="adminRules" ref="adminForm" label-width="130px" class="demo-adminForm">
        <el-form-item label="タイトル" prop="title">
          <el-input v-bind:disabled="adminVerified" v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="投稿日" required>
          <el-form-item prop="postDate">
            <el-date-picker v-bind:disabled="adminVerified" type="date" placeholder="Pick a date" v-model="article.postDate" style="width: 500px;"></el-date-picker>
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
          id:null,
          title: '',
          postData: '',
          tag:'',
          body: ''
        },
        adminRules: {
          title: [
            { required: true, message: '必須項目です。', trigger: 'change' }
          ],
          postDate: [
            { type: 'date', required: true, message: '必須項目です。', trigger: 'change' }
          ],
          tag: [
            { required: true, message: '必須項目です。', trigger: 'change' }
          ],
          body: [
            { required: true, message: '必須項目です。' ,trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      adminSubmitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            if(article.id===null){
              $store.dispatch('article/createArticlesAction',article)

            }else{
              const url='/api/article' +this.$route.query.id
              console.log(url)
              axios.get(url) //apiからのデータ取得をリクエスト
                .then((res) => {    //thenはレスポンスを受け取った段階で呼ばれるメソッド(res)にはレスポンスデータが入っている
                  console.log(res.data) //res.dataにはjsonオブジェクトが入っている
                  return {post:res.data}
                })
            }

            alert('送信しました。'); //axios通信
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

    computed: {
      clickable() {
        return true;
      }
    },

   /* middleware({ store, redirect }) {
      if(!store.$auth.loggedIn) {
        redirect('/admin');
      }
    }*/
  }
</script>
