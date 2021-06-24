import Search from './model/Search'

let search=new Search('pasta');
search.doSearch().then(a=>console.log(a)).catch();