import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__body">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg"
        ></img>
      </div>
      <div className="howm__row">
        <Product
          id={1001}
          image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
          desc=" Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3
                3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows
                10 in S Mode, A515-43-R19L, Silver"
          price={2500}
        ></Product>
        <Product
          id={1002}
          image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg"
          desc=" Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3
               3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows
               10 in S Mode, A515-43-R19L, Silver"
          price={250}
        ></Product>
      </div>
      <div className="howm__row">
        <Product
          id={1003}
          image="https://m.media-amazon.com/images/I/61zOmbgYQSL._AC_UY327_FMwebp_QL65_.jpg"
          price="2500"
          desc="Intel PC Stick 8GB RAM 128GB ROM with Intel Atom Z8350 &amp; Windows 10 Pro Mini Computer Stick Support 4K HD,Dual Band WiFi 2.4G/5G, Bluetooth 4.2, Support Auto-on After Power Failure, AIOEXPC"
        ></Product>
        <Product
          id={1004}
          image="https://m.media-amazon.com/images/I/71WPGXQLcLL._AC_UY327_FMwebp_QL65_.jpg"
          price={25000}
          desc="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        ></Product>
        <Product
          id={1005}
          price={1500}
          image="https://m.media-amazon.com/images/I/51R2a9p-vNL._AC_UY436_FMwebp_QL65_.jpg"
          desc="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control and QoS"
        ></Product>
      </div>
      <div className="howm__row">
        <Product
          id={1006}
          price={12000}
          image="https://m.media-amazon.com/images/I/71gK7VlDnGL._AC_UY545_FMwebp_QL65_.jpg"
          desc="VicTsing MM057 2.4G Wireless Portable Mobile Mouse Optical Mice with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons for Notebook, PC, Laptop, Computer, Macbook - Black"
        ></Product>
        <Product
          id={1007}
          image="https://m.media-amazon.com/images/I/61lB0Ugp4aL._AC_UY436_FMwebp_QL65_.jpg"
          price={1300}
          desc="Jelly Comb 2.4G Slim Wireless Mouse with Nano Receiver MS001 (Black and Gold)"
        ></Product>

        <Product
          id={1008}
          price={999}
          image="https://m.media-amazon.com/images/I/51VQv0yZEvL._AC_UY545_FMwebp_QL65_.jpg"
          desc="Elgato Cam Link 4K — Broadcast Live, Record via DSLR, Camcorder, or Action Cam, 1080p60 or 4K at 30 FPS, Compact HDMI Capture Device, USB 3.0"
        ></Product>
      </div>
    </div>
  );
}

export default Home;
