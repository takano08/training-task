<template>
<div class="recruit-container">
  <div class="recruit-header">
    <h1>採用情報</h1>
    <p>現在募集中の職種</p>
  </div>
<div class="card">
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card class="box-recruitCard">
              <div slot="header" class="clearfix">
                <span>営業</span>
              </div>
              <img width="320px" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tMJu?ver=6297&q=60&m=2&h=1292&w=646&b=%23FFFFFFFF&aim=true" class="image">
              <div class="bottom clearfix">
                <p><nuxt-link to="/entry">もっと詳しく</nuxt-link></p>
              </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-recruitCard">
              <div slot="header" class="clearfix">
                <span>エンジニア</span>
              </div>
              <img width="320px"  src="https://c.pxhere.com/photos/15/fe/pen_note_paper_document_notebook_blank_writing_empty-1107641.jpg!d" class="image">
              <div class="bottom clearfix">
                <p><nuxt-link to="/entry">もっと詳しく</nuxt-link></p>
              </div>
      </el-card>
    </el-col>
  </el-row>

  <el-row :gutter="12">
      <el-col :span="12">
        <el-card class="box-recruitCard">
                <div slot="header" class="clearfix">
                  <span>コンサルタント</span>
                </div>
                <img width="320px" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tMJu?ver=6297&q=60&m=2&h=1292&w=646&b=%23FFFFFFFF&aim=true" class="image">
                <div class="bottom clearfix">
                  <p><nuxt-link to="/entry">もっと詳しく</nuxt-link></p>
                </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-recruitCard">
                <div slot="header" class="clearfix">
                  <span>研究員</span>
                </div>
                <img width="320px"  src="https://c.pxhere.com/photos/15/fe/pen_note_paper_document_notebook_blank_writing_empty-1107641.jpg!d" class="image">
                <div class="bottom clearfix">
                  <p><nuxt-link to="/entry">もっと詳しく</nuxt-link></p>
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


</style>
