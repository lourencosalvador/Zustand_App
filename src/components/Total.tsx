import { useCartstore } from "../store/CartStore";


export function Total(){
    const items = useCartstore((state) => state.cart);

    const sum = items.reduce((acc, item) => acc + item.price, 0)

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return <h1>Todal: {formatter.format(sum)}</h1>
}