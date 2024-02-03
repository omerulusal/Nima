import ProductCard from "./ProductCard"


const BestSelling = () => {
    return (
        <div className="flex flex-row flex-wrap gap-2 justify-center">
            <ProductCard bestSelling/>
        </div>
    )
}

export default BestSelling