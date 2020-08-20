<template>
  <div>
   {{user}}
  <el-table
    :data="articles">
    <el-table-column
      label="Date"
      prop="date">
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
          @click="handleEdit(scope.$index, scope.row)">編集</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">削除</el-button>
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
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
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
    }
    //middleware({ store, redirect }) {
     // if(!store.$auth.loggedIn) {
       // redirect('/admin');
       // }
    //}
}
</script>
