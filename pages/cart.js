import { useShoppingCart } from 'use-shopping-cart'

export default function cart() {
  const { formattedTotalPrice, redirectToCheckout, cartCount, cartDetails } = useShoppingCart()

  return (
    <div>
      {/* Renders the products */}
      {Object.entries(cartDetails).map((cartitem) => {
        return(
          <p>{cartitem.name}</p>
        )
      })}      

      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>

      {/* Redirects the user to Stripe */}
      <button onClick={redirectToCheckout}>Checkout</button>
    </div>
  )
}
