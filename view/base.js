export const elements = {
    SearchForm: document.querySelector(".search"),
    SearchField: document.querySelector(".search__field"),
    resultList: document.querySelector(".results__list"),
    result: document.querySelector(".results"),
    pageButtons: document.querySelector(".results__pages"),
    recipeDiv: document.querySelector(".recipe")
}
export const elementString= {
    loaderClass: "loader"
}
export const  renderLoader = parent =>{
    const loader = `
        <div class="${elementString.loaderClass}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `
    parent.insertAdjacentHTML("afterbegin", loader)
}
export const clearLoader = () =>{
    const load =  document.querySelector(`.${elementString.loaderClass}`)
    if(load) load.parentElement.removeChild(load)
}