import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useShoppingCart } from "use-shopping-cart";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
   { name: "Home", href: "/" },
   { name: "Catalogue", href: "/catalogue" },
];

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false)
  const { formattedTotalPrice, cartCount, cartDetails, redirectToCheckout, clearCart, removeItem, incrementItem, decrementItem } = useShoppingCart();

  const cart = Object.values(cartDetails)

  const handleClick = event => {
    setOpen(true);
  };

   return (
     <>
       <nav className="flex py-5 sticky top-0 z-40 w-full bg-white drop-shadow-xl rounded-md">
        <div className="basis-2/12"></div>
        <div className="basis-1/6 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 512 512"><path d="M368 128h.09M479.55 96h-91.06l8.92-35.66 38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 00-20.54-10.73l-47 16a16 16 0 00-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 00224 128h2.75l1 8.66A8.3 8.3 0 00236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 01371 218.07a123.4 123.4 0 0110.12 29.51 7.83 7.83 0 003.29 4.88 72 72 0 0126.38 86.43 7.92 7.92 0 00-.15 5.53A96 96 0 01416 376c0 22.34-7.6 43.63-21.4 59.95a80.12 80.12 0 01-28.78 21.67 8 8 0 00-4.21 4.37 108.19 108.19 0 01-17.37 29.86 2.5 2.5 0 001.9 4.11h49.21a48.22 48.22 0 0047.85-44.14L477.4 128h2.6a16 16 0 0016-16.77c-.42-8.61-7.84-15.23-16.45-15.23z"/><path d="M108.69 320a23.87 23.87 0 0117 7l15.51 15.51a4 4 0 005.66 0L162.34 327a23.87 23.87 0 0117-7h196.58a8 8 0 008.08-7.92V312a40.07 40.07 0 00-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0016 312a8 8 0 008 8zM185.94 352a8 8 0 00-5.66 2.34l-22.14 22.15a20 20 0 01-28.28 0l-22.14-22.15a8 8 0 00-5.66-2.34h-69.4a15.93 15.93 0 00-15.76 13.17A65.22 65.22 0 0016 376c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 00-.9-10.83A15.93 15.93 0 00367.34 352z"/></svg>
          <h3 className="text-2xl font-medium translate-x-2"><span className="self-center text-3xl font-semibold whitespace-nowrap translate-x-2"><span className='text-green-400 font-bold'>e</span>Canteen</span></h3>
        </div>
        <div className="basis-full flex justify-center space-x-8 lg:flex">
          {navigation.map((item) => (
            <Link href={item.href} key={item.name}>
              <a
                className={classNames("inline-flex items-center px-1 pt-1 border-b-2 font-medium", router.route === item.href ? "border-green-500 text-gray-900" : "border-transparent text-gray-500 ease-in-out duration-300 hover:border-gray-300 hover:text-gray-700")}
                aria-current={router.route === item.href ? "page" : undefined}
                >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
        <div className="basis-1/6">
          <button className="flex items-center space-x-2" onClick={handleClick}>
            <a>
              
              <p></p>
            </a>
          </button>
          <button
          onClick={handleClick}
          type="button" className="flex items-center space-x-2 mt-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount}
          </button>
        </div>
        <div className="basis-2/12"></div>
      </nav>
      <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 ease-in-out duration-300 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cart.map((cartitem) => (
                              <li key={cartitem.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={cartitem.image}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{cartitem.name}</a>
                                      </h3>
                                      <p className="ml-4">{cartitem.formattedPrice}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty 
                                    <button onClick={() => decrementItem(cartitem.id)} className="translate-y-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                      </svg>
                                    </button>
                                    {cartitem.quantity}
                                    <button onClick={() => incrementItem(cartitem.id)} className="translate-y-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                      </svg>
                                    </button>
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() => removeItem(cartitem.id)}
                                        type="button"
                                        className="font-medium text-indigo-600 ease-in-out duration-300 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{formattedTotalPrice}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Carttotal</p>
                        <p>{cartCount}</p>
                      </div>
                      <div className="mt-6 flex justify-center">
                        <button 
                          type="button"
                          onClick={redirectToCheckout}
                          href="#"
                          className="w-full flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm ease-in-out duration-300 hover:bg-green-700"
                        >
                          Checkout
                        </button>
                        <button
                          type="button"
                          onClick={clearCart}
                          href="#"
                          className="w-16 mx-2.5 flex items-center justify-center rounded-md border border-transparent bg-red-600 py-3 text-base font-medium text-white shadow-sm ease-in-out duration-300 hover:bg-red-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-green-600 ease-in-out duration-300 hover:text-green-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
     </>
   );
}


