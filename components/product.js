import { useShoppingCart, formatCurrencyString  } from 'use-shopping-cart'

export default function Product(props) {  
  
  const { checkoutSingleItem, addItem } = useShoppingCart()

  function buyNow() {
    checkoutSingleItem({ sku: props.priceid })
  }

  const price = formatCurrencyString({
    value: props.price,
    currency: "AUD",
    language: 'en-AU'
  })

  const product = {id: props.id, name: props.name, image: props.image, price: props.price}
  
  return (
    <>
    <div className="bg-white rounded-lg shadow-xl w-96 hover:shadow-2xl transition-shadow">
      <div>
        <img src={props.image} alt="" className="rounded-t-lg translate-x-8 object-scale-down h-64 w-80"/>
      </div>
        <div className="p-6">
          <h2 className="font-bold mb-2 text-2xl text-gray-800">{props.name}</h2>
          <p className="text-gray-700 mb-2">
            {price}
          </p>
          <div className='flex justify-around'>
            <button
          onClick={buyNow}
          aria-label={`Buy a ${props.name}`}
          type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center mr-5 dark:bg-blue-600 dark:hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
              Buy now
          </button>
          <button
          onClick={() => addItem(product)}
          aria-label={`Buy a ${props.name}`}
          type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          </div>
        </div>
      </div>
    </>
  )
}