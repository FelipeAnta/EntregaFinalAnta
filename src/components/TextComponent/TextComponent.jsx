export function TextComponent1({stock = 1}){
    return(
        <>
            <h2>{stock === 0 ? 'No hay stock': 'Hay stock'}</h2>
        </>
    )
}

export function TextComponent2({stock = 0}){
    const estiloComponent = {color: stock ? "green" : "red"}

    return(
        <>
            <h2 style={estiloComponent}>Stock</h2>
        </>
    )
}