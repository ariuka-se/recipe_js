require("@babel/polyfill")
import Search from "../../model/search"
const res = new Search('pasta')
res.doSearch().then(r => console.log(r))