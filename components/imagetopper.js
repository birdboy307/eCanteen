export default function ImageTopper(props) {
    return (
        <div className="mx-auto container px-6 xl:px-0 py-12">
            <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    <div className="relative">
                        <img className="hidden object-cover h-96 sm:block w-full" src={props.imagelarge} alt="sofa" />
                        <img className="sm:hidden object-cover h-96 w-full" src={props.imagesmall} alt="sofa" />
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">{props.heading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}