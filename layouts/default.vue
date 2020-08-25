<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main class="default-main"> <!--max-width,min-width-->
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
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Noto+Sans+JP:wght@300&display=swap');
.el-header, .el-footer {
    color: #333;
    text-align: center;
  }

.el-main {
    color: #333;
    text-align: center;
    line-height: 75px;
    max-width: 2000px;
    margin: auto;
    min-width:1020px;
    font-family: 'Lato', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
  }


body > .el-container {
    margin-bottom: 40px;
  }


</style>
