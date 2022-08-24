import Link from 'next/link'

export default function success() {
    return (
        <div className='flex justify-center bg-gray-50 h-screen items-center text-center'>
            <div className="grid grid-rows-3 gap-2">
                <h2 className='text-4xl font-semibold pb-4'>Thanks For Ordering</h2>
                <div>
                    <p className="mb-2">Please pickup the order from the canteen at either recess or lunch.</p>
                    <p>To pickup the order tell the canteen staff that you have a online order.</p> 
                </div>
                <Link href='/'>
                    <a className="border-4 font-medium rounded-lg mt-8 py-2.5 bg-white ease-in-out duration-300 hover:bg-gray-300">Return to home</a>
                </Link>
            </div>
        </div>
    )
}
