import Cartitem from "../components/cartitem";
import Stripe from "stripe";

function products() {
  return (
    <div className="m-20">
      <div className='grid grid-cols-4 gap-4 list-none'>
            {prices.map((price) => 
              <li key={price.id}>
                <Cartitem
                productname={price.product.name}
                productprice={((price.unit_amount) / 100).toFixed(2)}
                productimage={price.product.images[0]}
                priceid={price.id}
                />
              </li>
            )}
          </div>
    </div>
  )
}

export default products

export async function getServerSideProps() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27"
  });

  const prices = await stripe.prices.list({
    active: true,
    expand: ["data.product"],
  })

  return {props: {prices: prices.data } };
}