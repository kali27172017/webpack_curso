module.exports = function createDom(men,elemt){
    let elemento = document.createElement(elemt)
    elemento.textContent = men
    return elemento
}