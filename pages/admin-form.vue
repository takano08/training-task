<template>
<h1>管理者入力フォーム</h1>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      if(!store.$auth.loggedIn) {
        redirect('/admin');
      }
    }
  }
</script>
