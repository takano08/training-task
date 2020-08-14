export const state = () => ({
  articleLists: [{id:1,date:20200814,title:'テスト記事1',tag:'news',body:'テスト記事1',owner:'admin'},
    {id:2,date:20200815,title:'テスト記事2',tag:'news',body:'テスト記事2',owner:'admin'}]
})

/*export const getters = {
  findArticlesByCategory: state => (category) => {
    return Object.values(state.articleList).filter(a => a.category === category)
  }
}*/
