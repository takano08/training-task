<template>
<div class="card">
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><nuxt-link to="/about">ABOUT</nuxt-link></span>
              </div>
              <img width="400px" src="/image/about.jpg" class="image">
              <div class="bottom clearfix">
                <p>R&Dビジネスファクトリーのご案内</p>
              </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><nuxt-link to="/blog">BLOG</nuxt-link></span>
              </div>
              <img width="400px"  src="/image/blog.jpg" class="image">
              <div class="bottom clearfix">
                <p>弊社エンジニアによる技術投稿</p>
              </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><nuxt-link to="/recruit">RECRUIT</nuxt-link></span>
              </div>
              <img width="400px" src="/image/recruit.png" class="image">
              <div class="bottom clearfix">
                <p>採用に関するお問い合わせはこちら</p>
              </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&family=Noto+Sans+JP:wght@100&display=swap');

　.el-card {
   height: 400px;
   display: flex;
   flex-wrap: wrap;
 }

  .clearfix {
    line-height: 35px;
  }

  .box-card p {
    color: #7F828B;
    font-family: 'Lato', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .box-card a {
    text-decoration: none;
  }




</style>
