<template>
  <div>
  <h1><nuxt-link to="/admin-form">管理者トップ画面</nuxt-link></h1>
  {{user}}
  </div>
</template>

<script>
  export default {
    computed: {
      user() {
        return this.$auth.user;
      }
    },
    middleware({ store, redirect }) {
      if(!store.$auth.loggedIn) {
        redirect('/admin');
      }
    }
  }
</script>
