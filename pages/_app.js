import '../styles/globals.css'
import Layout from '../components/layout'
import { CartProvider } from 'use-shopping-cart'

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY

function MyApp({ Component, pageProps }) {
  return(
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      currency="AUD"
      successUrl="http://localhost:3000/catalogue"
      cancelUrl="http://localhost:3000"
      allowedCountries={['AU']}
      billingAddressCollection={false}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>   
  );
}

export default MyApp
