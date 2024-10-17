import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProductToStore } from "./src/views/store";
import './style.css';

// ==== APLICACION ====
export let categoriaActiva = null;

export const setCategoriaActiva = (categoria) => {
    categoriaActiva = categoria;
};

export let productoActivo = null;

export const setProductoActivo = (producto) => {
    productoActivo = producto;
}

handleGetProductToStore();
renderCategories();

const btnAdd = document.querySelector(".buttonAdd");
btnAdd.addEventListener("click", () => {
    openModal();
});

const btnSearch = document.querySelector("#buttonSearch");
btnSearch.addEventListener("click", () => {
    handleSearchProductByName();
});