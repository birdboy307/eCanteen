import useShoppingCart from 'use-shopping-cart'

export default function buy() {
    const { formattedTotalPrice, redirectToCheckout, cartCount } = useShoppingCart()

    return (
        <div>
            <p>Number of Items: {cartCount}</p>
            <p>Total: {formattedTotalPrice}</p>
            <button onClick={redirectToCheckout}>Checkout</button>
        </div>
    )
}
