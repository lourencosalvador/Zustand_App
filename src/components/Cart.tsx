import { useCartstore } from "../store/CartStore"


export const AvailableProducts = () => {
    const [cart, removeCart] = useCartstore(state => [state.cart, state.removeCart])


    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cart.map((item) => (
                   <>
                     <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                    <button onClick={()=> {
                        removeCart(item.id)
                    }}>
                        Remove Card
                    </button>
                   </>
                ))}
            </ul>
        </div>
    )
}