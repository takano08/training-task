import axios from 'axios'

export const state = () => ({
  articles: [{id:1,date:20200814,title:'テスト記事1',tag:'news',body:'テスト記事1',owner:'admin'},
    {id:2,date:20200815,title:'テスト記事2',tag:'blog',body:'テスト記事2',owner:'admin'}]
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

    axios.get('/api/employees').then((response) => {
      //axios.get('http://localhost:8080/employees').then((response) => {
      context.commit('updateArticles', response.data)
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  createArticlesAction : async function ({commit,dispatch},createArticle) {

    console.log(createArticle);
    const url = '/api/employees/'
    console.log(url);
    axios.post(url,createArticle).then((response) => {
      dispatch('fetchArticlesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  deleteEmployeesAction : async function ({commit,dispatch},employeesId) {

    console.log(employeesId);
    const url = '/api/employees/' + employeesId
    console.log(url);
    axios.delete(url).then((response) => {
      dispatch('fetchEmployeesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },

  deleteArticlesAction : async function ({commit,dispatch},articlesId) {

    console.log(articlesId);
    const url = '/api/employees/' + articlesId
    console.log(url);
    axios.delete(url).then((response) => {
      dispatch('fetchArticlesAction')
      return true;
    }, (err) => {
      console.log(err)
      return false;
    })
  },
}
