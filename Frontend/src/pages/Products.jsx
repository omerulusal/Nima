import ProductCard from "../components/ProductCard"
import { useSelector } from 'react-redux';

const Products = () => {
    const { loading } = useSelector((state) => state.products);
    return (
        <div className="w-full min-h-screen flex justify-center items-center mt-10 mb-24 gap-5">
            {loading ? "Loading..." : <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5 mb-32">
                <ProductCard />
            </div>}
        </div>
    )
}

export default Products