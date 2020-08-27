<template>
<div class="card">
  <el-row :gutter="12">

    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <nuxt-link to="/about"><el-link :underline="false" class="card-title">ABOUT</el-link></nuxt-link>
              </div>
              <img width="400px" src="/image/about.jpg" class="image">
              <div class="bottom clearfix">
                <p>R&D BUSINESS FACTORYのご案内</p>
              </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <nuxt-link to="/blog"><el-link :underline="false" class="card-title">BLOG</el-link></nuxt-link>
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
                <nuxt-link to="/recruit"><el-link :underline="false" class="card-title">RECRUIT</el-link></nuxt-link>
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
   flex-wrap: nowrap;
  min-width: 500px;

 }

  .clearfix {
    line-height: 35px;
  }

  .box-card p {
    color: #7F828B;
    font-family: 'Lato', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
    flex-wrap: nowrap;
  }

  .box-card a {
    text-decoration: none;
  }
  .image{
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .card-title {
    font-size:22px;
  }



</style>
