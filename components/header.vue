<template>
  <el-row>
    <el-col :span="6"><div><Logo></Logo></div></el-col>
    <el-col :span="18">
      <div class="headerGroup">
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
