<template>
<div class="recruit-container">
  <!--<div class="recruit-header">-->
    <h2>採用情報</h2>
  <!--</div>-->
<div class="card">
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card class="box-recruitCard">
              <div slot="header" class="clearfix">
                <span>営業</span>
              </div>
              <img width="320px" src="/image/sales.jpg" class="image">
              <div class="bottom clearfix">
                <nuxt-link to="/entry"><el-link :underline="false" class="recruit-title">もっと詳しく</el-link></nuxt-link>
              </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-recruitCard">
              <div slot="header" class="clearfix">
                <span>エンジニア</span>
              </div>
              <img width="320px"  src="/image/engineer.jpg" class="image">
              <div class="bottom clearfix">
                <nuxt-link to="/entry"><el-link :underline="false" class="recruit-title">もっと詳しく</el-link></nuxt-link>
              </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="12">
      <el-col :span="12">
        <el-card class="box-recruitCard">
                <div slot="header" class="clearfix">
                  <span>研究員</span>
                </div>
                <img width="320px" src="/image/research.jpg" class="image">
                <div class="bottom clearfix">
                  <nuxt-link to="/entry"><el-link :underline="false" class="recruit-title">もっと詳しく</el-link></nuxt-link>
                </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-recruitCard">
                <div slot="header" class="clearfix">
                  <span>コンサルタント</span>
                </div>
                <img width="320px"  src="/image/network.jpg" class="image">
                <div class="bottom clearfix">
                  <nuxt-link to="/entry"><el-link :underline="false" class="recruit-title">もっと詳しく</el-link></nuxt-link>
                </div>
        </el-card>
      </el-col>
    </el-row>
</div>
</div>
</template>

<style>
　.el-card {
   height: 300px;
   display: flex;
   flex-wrap: wrap;
 }

  .clearfix {
    line-height: 35px;
  }

  .box-recruitCard p {
    color: #7F828B;
  }

  .box-recruitCard a {
    text-decoration: none;
  }

  .box-recruitCard {
    margin:40px 40px 40px 40px;
  }

  .recruit-container h2 {
    border-bottom:solid 1px #eee;
    font-size: 22px;
    color: #333;
  }


</style>
