<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <nuxt></nuxt>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
	import Header from "~/components/header.vue"; // headerをインポート
	import Footer from "~/components/footer.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>


<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

body > .el-container {
    margin-bottom: 40px;
  }
</style>
