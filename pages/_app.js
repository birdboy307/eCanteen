import '../styles/globals.css'
import Layout from '../components/layout'
import { CartProvider } from 'use-shopping-cart'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY

function MyApp({ Component, pageProps }) {
  return(
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      currency="AUD"
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000"
      allowedCountries={['AU']}
      billingAddressCollection={false}
      shippingAddressCollection={false}
    >
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
            position="top-right"
            autoClose={2555}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      </Layout>
    </CartProvider>   
  );
}

export default MyApp
