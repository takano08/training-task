<template>
  <div class="admin-top-container">
   <!--{{user}}-->
      <h2>管理画面トップ</h2>
    <div class="edit">
      <nuxt-link to="/admin-form"><el-button type="primary">新規作成</el-button></nuxt-link>
    </div>
  <el-table
    :data="articles">
    <el-table-column
      label="Date"
      prop="createdDate">
    </el-table-column>
    <el-table-column
      label="Title"
      prop="title">
    </el-table-column>
　　<el-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[{ text: 'news', value: 'news' }, { text: 'blog', value: 'blog' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === 'Home' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          v-on:click="handleEdit(scope.row.articleId)">編集</el-button>
        <el-button
          size="mini"
          type="danger"
          v-on:click="$store.dispatch('article/deleteArticlesAction',scope.row.articleId)">削除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.$store.dispatch('article/fetchArticlesAction')
    },

    methods: {
      handleEdit(articleId) {
        this.$router.push({ path: 'admin-form' , query :{ id: articleId }});
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    },
    computed: {
      user() {
        return this.$auth.user;
      },
      articles() {
        return this.$store.state.article.articles;
      }
    },
    middleware({ store, redirect }) {
      if(!store.$auth.loggedIn) {
        redirect('/admin');
      }
    }
}
</script>

<style>
.edit {
  text-align: right;
}

  .admin-top-container h2 {
    color: #333;
    font-size: 22px;
    border-bottom: #eee 1px solid;
  }
</style>
