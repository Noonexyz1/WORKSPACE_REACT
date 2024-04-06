import ButtonsForCard from './ButtonsForCard'
import StarRating from './StarRating'
import polera from '../assets/polera.png'

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: polera,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        descrip: 'Lorem sadf asdf asdf asdf asdf laskdfj lasdkfj alsdkfj alsdkjf alskdjf alsdkjf lasdkjf alsdkjf',
        isLoved: true,
        color: 'bg-red-600'
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: polera,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        descrip: 'Lorem sadf asdf asdf asdf asdf laskdfj lasdkfj alsdkfj alsdkjf alskdjf alsdkjf lasdkjf alsdkjf',
        isLoved: false,
        color: 'bg-orange-400'
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: polera,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        descrip: 'Lorem sadf asdf asdf asdf asdf laskdfj lasdkfj alsdkfj alsdkjf alskdjf alsdkjf lasdkjf alsdkjf',
        isLoved: true,
        color: 'bg-lime-800'
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: polera,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        descrip: 'Lorem sadf asdf asdf asdf asdf laskdfj lasdkfj alsdkfj alsdkjf alskdjf alsdkjf lasdkjf alsdkjf',
        isLoved: false,
        color: 'bg-indigo-500'
    }
]

export default function CardProductView() {
    return (
        <div className="bg-red-500 rounded-t-3xl rounded-b-3xl">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900">Selecciona una prenda</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-black group relative rounded-b-3xl">
                            <div className={product.color}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                            </div>
                            

                            <div className="mt-4 bg-orange-700 flex flex-col">
                                <div className='border-l-indigo-900 bg-red-400 flex justify-between'>
                                    <h3 className="text-2xl text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="text-2xl font-medium text-gray-900">{product.price}</p>
                                </div>

                                <StarRating valueToShow={5}/>

                                <p className="mt-1 text-sm text-gray-500 text-left">{product.descrip}</p>

                                <ButtonsForCard isLoved={product.isLoved}/>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    )
}