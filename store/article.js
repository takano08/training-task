import axios from 'axios'

export const state = () => ({
  articles: [{articleId:1,title:'テスト記事1',createdDate:20200814,tag:'news',body:'テスト記事1',owner:'admin'},
    {articleId:2,title:'テスト記事2',createdDate:20200815,tag:'blog',body:'テスト記事2',owner:'admin'},
    {articleId:3,title:'テスト記事3',createdDate:20200816,tag:'news',body:'テスト記事3',owner:'admin'},
    {articleId:4,title:'テスト記事4',createdDate:20200817,tag:'blog',body:'テスト記事4',owner:'admin'}]
})

/*export const getters = {
  findArticlesByCategory: state => (category) => {
    return Object.values(state.articleList).filter(a => a.category === category)
  }
}*/

export const mutations = {
  updateArticles: function (state, payload) {
    state.articles = payload
  }
}

export const actions = {

  fetchArticlesAction : async function (context) {

    axios.get('/api/article').then((response) => {
      //axios.get('http://localhost:8080/article').then((response) => {
      context.commit('updateArticles', response.data)
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  createArticlesAction : async function ({commit,dispatch},createArticle) {

    console.log(createArticle);
    const url = '/api/article'
    console.log(url);
    axios.post(url,createArticle).then((response) => {
      //dispatch('fetchArticlesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  deleteEmployeesAction : async function ({commit,dispatch},articleId) {

    console.log(articleId);
    const url = '/api/article/' + articleId
    console.log(url);
    axios.delete(url).then((response) => {
      dispatch('fetchArticlesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },



  updateArticlesAction : async function ({commit,dispatch},updateArticle) {

    console.log(updateArticle);
    const url = '/api/article/' + updateArticle.articleId
    console.log(url);
    const updateArticleBody = {name:updateEmployee.name,role:updateEmployee.role}
    axios.put(url,updateArticleBody).then((response) => {
      dispatch('fetchArticlesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  }

}
