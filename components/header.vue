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
      </div>
    </el-col>
  </el-row>
</template>

<script>
	import Logo from "~/components/Logo.vue";
	export default {
		components: {
			Logo
		}
	};

</script>
<style scoped>
  .headerGroup {
    text-align: right;
     //font-family: 'Lato' !important;
    font-weight: lighter ;
  }
  .headerGroup a{
    color: #5B5B5B;
  }



</style>
