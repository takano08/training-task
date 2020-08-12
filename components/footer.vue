<template>
  <el-row>
  <el-col :span="6"><div><Logo></Logo></div></el-col>
    <el-col :span="18">
      <div class="footerGroup">
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

<style scoped>
  .footerGroup {
    text-align: right;
    font-weight: lighter ;
  }
  .footerGroup a{
    color: #5B5B5B;
  }
</style>
