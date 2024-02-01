/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard"

const TopluCard = ({ ikili }) => {
    return (
        <div>
            {ikili ? <>
                <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5 mb-32">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

                <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5 mt-48 mb-32">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </> :
                <>
                    <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5 mb-32">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5 mt-48 mb-32">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="flex flex-row flex-wrap gap-2 mt-48 justify-center items-center mx-5 mb-32">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    <div className="flex flex-row flex-wrap gap-2 justify-center items-center mx-5 mt-48 mb-32">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </>}
        </div>
    )
}

export default TopluCard