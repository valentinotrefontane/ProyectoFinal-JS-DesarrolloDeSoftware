// ==== LOCALSTORAGE ====

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    return products ? products : [];
}


//save localstorage
export const setInLocalStorage = (productIn) => {
    let productInLocal = handleGetProductLocalStorage();
    const existingIndex = productInLocal.findIndex((productLocal) => 
        productLocal.id === productIn.id
    );

    if(existingIndex === -1) {
        productInLocal.push(productIn);
    } else {
        productInLocal[existingIndex] = productIn;
    }

    localStorage.setItem("products", JSON.stringify(productInLocal))

    
}

