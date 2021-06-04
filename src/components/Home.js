import React from 'react'
import '../stylesheets/Home.css'
import Product from './Product'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div className="home">
            <Carousel className="bg-carousel" infiniteLoop showIndicators={false} showStatus={false} showThumbs={false}>
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-1x._CB658860139_.jpg" alt="" />
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/May/Headsets/OnePlusBudsSeries/D23519665_WLA_OnePlus_Buds_Series_Tall_Hero_1500x600._CB667954391_.jpg" alt="" />
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg" alt="" />
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/a_1500x600._CB669782425_.jpg" alt="" />
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg" alt="" />

            </Carousel>

            <div className="home_row">
                <Product
                    id="1"
                    title="Oculus - Quest 2 Advanced All-In-One Virtual Reality Headset - 256GB"
                    price={52940}
                    rating="4"
                    image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SY355_.jpg"
                />
                <Product
                    id="2"
                    title="Lenovo Yoga Slim 7 AMD Ryzen 7 4800U 14 (35.56cms) Full HD IPS Laptop (8GB/512GB SSD/Windows 10/MS Office 2019/Slate Grey/1.33Kg)"
                    price={76000}
                    rating="2"
                    image="https://images-na.ssl-images-amazon.com/images/I/61tcZHczA8L._SY355_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Yakult Probiotic Health Drink Bottle, 5 X 65 ml"
                    price={70}
                    rating="5"
                    image="https://images-na.ssl-images-amazon.com/images/I/71yxvAO2pfL._SX679_.jpg"
                />
                <Product
                    id="4"
                    title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
                    price={29500}
                    rating="3"
                    image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SX355_.jpg"
                />
                <Product
                    id="5"
                    title="crocs Unisex-Adult's Classic Slide Slipper"
                    price={1500}
                    rating="4"
                    image="https://images-na.ssl-images-amazon.com/images/I/61aBMZzvynL._UX500_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id="6"
                    title="LG QHD (2560 x 1440) 32 Inch IPS Display 3 Side Borderless - HDR 10, sRGB 99%, AMD Free sync - Dual HDMI, Display Port - 32QN600"
                    price={24000}
                    rating="5"
                    image="https://images-na.ssl-images-amazon.com/images/I/61jYCCxP5ZL._SX355_.jpg"
                />
            </div>
        </div>
    )
}

export default Home

