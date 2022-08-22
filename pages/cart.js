import { useShoppingCart } from 'use-shopping-cart'

function cart() {
  const { formattedTotalPrice, redirectToCheckout, cartCount, cartDetails } = useShoppingCart()

  return (
    <div>
      {/* Renders the products */}
      {Object.entries(cartDetails).map((cartitem) => {
        return(
          <div key={cartitem.id}>
            <p>{cartitem.name}</p>
          </div>
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

export default cart()