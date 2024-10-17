import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

// ==== POPUP ====
const btnCancel = document.querySelector("#cancelBtn");

btnCancel.addEventListener("click", () => {
    closeModal();
})


// open close modal functions
export const openModal = () => {
    const modal = document.querySelector("#modalPopUp");
    modal.style.display = 'flex';

    const btnDelete = document.querySelector("#deleteBtn");
    
    btnDelete.style.display = 'block';
    if(productoActivo) {
        btnDelete.style.display = 'none';
        const nombre = document.querySelector("#nombre");
        const img = document.querySelector("#img");
        const precio = document.querySelector("#precio");
        const categoria = document.querySelector("#categoria");
        
        nombre.value = productoActivo.nombre;
        categoria.value = productoActivo.categoria;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
    }    
}

export const closeModal = () => {
    const modal = document.querySelector("#modalPopUp");
    modal.style.display = 'none';
    setProductoActivo(null);
    resetModal();
}

const resetModal = () => {
    const nombre = document.querySelector("#nombre");
    const img = document.querySelector("#img");
    const precio = document.querySelector("#precio");
    const categoria = document.querySelector("#categoria");
    
    nombre.value = '';
    img.value = '';
    precio.value = 0;
    categoria.value = 'Seleccione una categoria';
};

const btnDelete = document.querySelector("#deleteBtn");

btnDelete.addEventListener("click", () => {
    handleBtnDelete();
});

const handleBtnDelete = () => {
    handleDeleteProduct();
};