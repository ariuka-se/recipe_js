require("@babel/polyfill")
import Search from "../../model/search"
import Recipe from "../../model/recipe"
import { renderRecipe, clearRecipe, selectedRecipe } from "../../view/recipeView"
import { elements, renderLoader, clearLoader } from "../../view/base"
import * as searchView from  "../../view/searchView"
import { x } from "../../view/base"
const state = {}
/**Search controller */
const searchControl = async () => {
    //webees hailtin tulhuur ugiig gargaj avna
    //shine hailtin object uusgeh
    //hailt hiihed zoriolj view beldeh
    //hailtiig guitsetgene
    //hailtin ur dung delgentsend gargah
    const query = searchView.getInput()
    if(query){
        state.search = new Search(query)
        searchView.clearSearchField()
        searchView.clearSearchResult()
        renderLoader(elements.result)
        await state.search.doSearch()
        clearLoader()
        if(state.search.result ===  undefined) alert("Хайлтаар илэрц олдсонгүй")
        else searchView.renderResult(state.search.result)

    }

}
elements.SearchForm.addEventListener('submit', e =>{
    e.preventDefault()
    searchControl()
} )
elements.pageButtons.addEventListener("click", e =>{
    const btn = e.target.closest(".btn-inline")
    // //console.log(e)
    if(btn){
        const nextPage = parseInt(btn.dataset.goto, 10)
        searchView.clearSearchResult()
        searchView.renderResult(state.search.result,nextPage)
    }
})
/**recipe controller */
const controlRecipe = async () => {
    //url id-iig salgaj 
    const id = window.location.hash.replace('#', '')
    //jorin modelig uusgeh
    state.recipe = new Recipe(id)
    //ui beldeh
    clearRecipe()
    renderLoader(elements.recipeDiv)
    selectedRecipe(id)

    //joroo tataj avcirah
    await state.recipe.getRecipe()
    //jorin hugatsaa, ortsig tootsooloh
    clearLoader()
    state.recipe.calcTime()
    state.recipe.calcRecipeCount()
    //joroo delgetsend gargah
    renderRecipe(state.recipe)

}
window.addEventListener('hashchange', controlRecipe)
window.addEventListener('load', controlRecipe)
