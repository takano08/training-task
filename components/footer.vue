<template>
  <el-row>
  <el-col :span="6"><div><Logo></Logo></div></el-col>
    <el-col :span="18">
      <div class="footerGroup">
        <el-button href="news">お知らせ</el-button>
        <el-button href="about">企業情報</el-button>
        <el-button href="blog">ブログ</el-button>
        <el-button href="recruit">採用情報</el-button>
        <el-button href="admin">管理者メニュー</el-button>
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
