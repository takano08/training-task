<template>
  <el-row>
    <el-col :span="6"><div><Logo></Logo></div></el-col>
    <el-col :span="18">
      <div class="headerGroup">
        <nuxt-link to="/"><el-button>お知らせ</el-button></nuxt-link>
        <nuxt-link to="about"><el-button>企業情報</el-button></nuxt-link>
        <nuxt-link to="blog"><el-button>ブログ</el-button></nuxt-link>
        <nuxt-link to="recruit"><el-button>採用情報</el-button></nuxt-link>
        <nuxt-link v-show="!loggedIn"　to="admin"><el-button>管理者メニュー</el-button></nuxt-link>
        <el-button v-show="loggedIn" v-on:click="logout">Logout</el-button>
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
