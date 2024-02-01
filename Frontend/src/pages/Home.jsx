import Slider from "react-slick";
import Title from "../components/Title";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import TopluCard from "../components/TopluCard";
import BestSelling from "../components/BestSelling";
import Cta from "../components/CTA";

const Home = () => {

    const navigate = useNavigate();
    const ayarlar = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slideData = [
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/34628741-0def-4bd5-9193-0bd7a80c8f06.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
        "https://www.mystic-runner.com/wp-content/uploads/2023/08/adidas-banner.jpg",
        "https://www.mystic-runner.com/wp-content/uploads/2023/08/nike-banner.jpg",
        "https://m.media-amazon.com/images/S/aplus-media/sota/d3497fb2-7789-478b-8ebd-70022c2b7d10.__CR0,0,970,300_PT0_SX970_V1___.jpg"
    ]
    return (
        <div className="overflow-x-clip mt-5 drop-shadow-md mb-28">
            <Slider {...ayarlar}>
                {slideData.map((item, id) => (
                    <div key={id}>
                        <img className="w-full h-[420px] object-cover opacity-90" src={item} alt="sale" />
                    </div>
                ))}
            </Slider>
            <div className="flex flex-row justify-between">
                <Title text={"Tum Urunler"} />
                <Button right text={"Hepsini Gör"} onClick={() => navigate("/products")} />
            </div>
            <p className="text-sm text-gray-500 -mt-8 mb-14 ml-5 mr-5 text-justify w-3/4 md:w-1/2" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <TopluCard ikili />

            <div className="flex flex-row justify-between mt-52">
                <Title text={"En Çok Satılanlar"} />
                <Button right text={"Detaylar"} onClick={() => navigate("/product/:id")} />
            </div>
            <p className="text-sm text-gray-500 -mt-8 mb-14 ml-5 mr-5 text-justify w-3/4 md:w-1/2" >Lorem ipsum dolor sit amet </p>
            <BestSelling />
            <Cta />
        </div>
    )
}

export default Home