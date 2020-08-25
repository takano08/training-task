<template>
  <el-row>
    <el-col :span="9"><div><Logo></Logo></div></el-col>
    <el-col :span="15">
      <div class="headerGroup">
        <nuxt-link to="/"><el-button>NEWS</el-button></nuxt-link>
        <nuxt-link to="about"><el-button>ABOUT</el-button></nuxt-link>
        <nuxt-link to="blog"><el-button>BLOG</el-button></nuxt-link>
        <nuxt-link to="recruit"><el-button>RECRUIT</el-button></nuxt-link>
        <nuxt-link to="admin"><el-button>ADMIN</el-button></nuxt-link>
        <el-button v-show="loggedIn" v-on:click="logout">LOGOUT</el-button>
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
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');


  .headerGroup {

    text-align: right;
    font-weight: lighter ;
  }

  .headerGroup a{
    font-family: 'Lato', sans-serif;
    color: #5B5B5B;
    text-decoration: none;
    margin: 0px 5px;
  }


</style>
