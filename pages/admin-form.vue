<template>
  <div class="admin-form-container">
    <div class="admin-form-top">
      <h1>記事入力フォーム</h1>
    </div>
    <div class="admin-form">
      <el-form :model="createArticle" :rules="adminRules" ref="adminForm" label-width="130px" class="demo-adminForm">
        <el-form-item label="タイトル" prop="title">
          <el-input v-bind:disabled="adminVerified" v-model="createArticle.title"></el-input>
        </el-form-item>
        <el-form-item label="投稿日" required>
          <el-form-item prop="postDate">
            <el-date-picker v-bind:disabled="adminVerified" type="date" placeholder="Pick a date" v-model="createArticle.postDate" style="width: 500px;"></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="Tag" prop="tag">
          <el-radio-group v-bind:disabled="adminVerified" v-model="createArticle.tag">
            <el-radio label="News"></el-radio>
            <el-radio label="Blog"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="本文" prop="body">
          <el-input type="textarea" v-bind:disabled="adminVerified" v-model="createArticle.body" style="width: 500px;"></el-input>
        </el-form-item>
        <el-form-item>
          <template v-if="!adminVerified">
            <el-button type="primary" @click="adminVerifiedForm()">内容確認</el-button>
          </template>
          <template v-if="adminVerified">
            <el-button type="primary" @click="adminSubmitForm('createArticle')">送信</el-button>
            <el-button type="primary" @click="adminVerifiedForm()">戻る</el-button>
          </template>
          <el-button @click="adminResetForm('createArticle')">リセット</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        adminVerified : false,

        createArticle: {
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
