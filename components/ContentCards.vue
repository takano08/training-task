<template>
<div class="card">
  <el-row :gutter="12">
    <el-col :span="8">
      <el-card shadow="hover">
        <nuxt-link to="/about">企業情報</nuxt-link>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        <nuxt-link to="/blog">ブログ</nuxt-link>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card shadow="hover">
        <nuxt-link to="/recruit">採用情報</nuxt-link>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<style>


</style>
