<template>
<div class="card">
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><nuxt-link to="/about">企業情報</nuxt-link></span>
              </div>
              <img width="320px" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tMJu?ver=6297&q=60&m=2&h=1292&w=646&b=%23FFFFFFFF&aim=true" class="image">
              <div class="bottom clearfix">
                <p>R&Dビジネスファクトリーのご案内</p>
              </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><nuxt-link to="/blog">Blog</nuxt-link></span>
              </div>
              <img width="320px"  src="https://c.pxhere.com/photos/15/fe/pen_note_paper_document_notebook_blank_writing_empty-1107641.jpg!d" class="image">
              <div class="bottom clearfix">
                <p>弊社エンジニアによる技術投稿</p>
              </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span><nuxt-link to="/recruit">採用情報</nuxt-link></span>
              </div>
              <img width="320px" src="https://offerbox.jp/company/wp-content/uploads/2019/05/pixta_43993222_XL_%E5%A5%B3%E6%80%A7_%E7%94%B7%E6%80%A7_%E3%82%AF%E3%82%99%E3%83%A9%E3%83%95.jpg" class="image">
              <div class="bottom clearfix">
                <p>採用に関するお問い合わせはこちら</p>
              </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<style>
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
  }

  .box-card a {
    text-decoration: none;
  }


</style>
