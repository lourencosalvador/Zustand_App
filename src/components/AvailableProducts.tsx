import { useCartstore } from "../store/CartStore"


export const Cart = () => {
    const [cart, addCart] = useCartstore(state => [state.availableItems, state.addCart])


    return (
        <div>
            <h1>Choose a product</h1>
            <ul>
                {cart.map((item) => (
                   <>
                     <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                    <button onClick={()=> {
                        addCart(item)
                    }}>
                        Add Card
                    </button>
                   </>
                ))}
            </ul>
        </div>
    )
}