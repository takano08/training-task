<template>
  <div>
<h1>管理者ログイン</h1>

  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="loginID">
      <el-input v-model="form.loginId"></el-input>
    </el-form-item>
    <el-form-item label="password">
      <el-input v-model="form.password" type="password"></el-input>
    </el-form-item>
    <el-button type="primary" v-on:click="login()">Login</el-button>
  </el-form>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        form: {
          loginId: '',
          password: ''
        }
      }
    },
    middleware({ store, redirect }) {
      if(store.$auth.loggedIn) {
        redirect('/admin-top');
      }
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', { data: this.form });
        } catch(error) {
          console.log(error);
        }
      }
    }
  }
</script>
