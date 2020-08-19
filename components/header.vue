<template>
  <el-row>
    <el-col :span="6"><div><Logo></Logo></div></el-col>
    <el-col :span="18">
      <div class="headerGroup">
        <el-button><nuxt-link to="/">お知らせ</nuxt-link></el-button>
        <el-button><nuxt-link to="about">企業情報</nuxt-link></el-button>
        <el-button><nuxt-link to="blog">ブログ</nuxt-link></el-button>
        <el-button><nuxt-link to="recruit">採用情報</nuxt-link></el-button>
        <el-button><nuxt-link to="admin">管理者メニュー</nuxt-link></el-button>
        <el-button v-show="loggedIn" type="primary" v-on:click="logout">Logout</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
	import Logo from "~/components/Logo.vue";
	export default {
		components: {
			Logo
		},
    computed: {
      loggedIn() {
        return this.$auth.loggedIn;
      }
    },
    methods: {
      logout() {
        this.$auth.logout();
      }
    }
	}

</script>
<style scoped>
  .headerGroup {
    text-align: right;
    font-weight: lighter ;
  }

  .headerGroup a{
    color: #5B5B5B;
    text-decoration: none;
  }


</style>
