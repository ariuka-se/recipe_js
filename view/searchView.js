import { elements } from "./base"
const renderRecipe = recipe =>{
    const markUp = `
        <li>
            <a class="results__link " href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${recipe.title}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `
    elements.resultList.insertAdjacentHTML("beforeend", markUp)
}
const createButton = (page, type, dir) => `
    <button class="btn-inline results__btn--${type}" data-goto="${page}">
        <span>Хуудас ${page}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${dir}"></use>
        </svg>
    </button>
`
const renderButton =  (current, total) => {
    let button
    console.log(current, total)
    if(current === 1 && total > 1){
        button = createButton(2, 'next', 'right')
    }else if(current < total){
        button = createButton(current-1, 'prev','left')
        button += createButton(current+1, 'next', 'right')
    }else if(current === total){
        button = createButton(current-1, 'prev', 'left')
    }
    elements.pageButtons.insertAdjacentHTML("beforeend", button)
}

export const clearSearchField = () =>{
    elements.SearchField.value = ''
}
export const clearSearchResult = () =>{
    elements.resultList.innerHTML = ''
    elements.pageButtons.innerHTML =''
}
export const getInput = () => elements.SearchField.value
export const renderResult = (recipes, page = 1, perPage = 10) => {
    const start = (page-1) * perPage
    const end = page * perPage
    recipes.slice(start, end).forEach(el => renderRecipe(el));
    const totalPages =  Math.ceil(recipes.length/perPage)
    renderButton(page, totalPages)
}
