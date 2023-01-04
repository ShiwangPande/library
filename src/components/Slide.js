import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slide.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";
// import NavBar from './Navbar'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
// import Table from 'react-bootstrap/Table';
import Card from './cards/Card';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import Card5 from './cards/Card5';
import Card6 from './cards/Card6';
import Card7 from './cards/Card7';
import Card8 from './cards/Card8';
// import Footer from './Footer'
// import logo from '../images/mesa-logo.png'
// import Loader from "./Loader";
import Pyq1 from './PYQ/Pyq1';
import Pyq2 from './PYQ/Pyq2';
import Pyq3 from './PYQ/Pyq3';
import Pyq4 from './PYQ/Pyq4';
import Pyq5 from './PYQ/Pyq5';
import Pyq6 from './PYQ/Pyq6';
import Pyq7 from './PYQ/Pyq7';
import Pyq8 from './PYQ/Pyq8';

export default function Slide() {
  const [basicActive1, setBasicActive1] = useState('tab1');

  const handleBasicClick1 = (value: string) => {
    if (value === basicActive1) {
      return;
    }

    setBasicActive1(value);
  };
  const [basicActive2, setBasicActive2] = useState('tab4');

  const handleBasicClick2 = (value: string) => {
    if (value === basicActive2) {
      return;
    }

    setBasicActive2(value);
  };
  const [basicActive3, setBasicActive3] = useState('tab7');

  const handleBasicClick3 = (value: string) => {
    if (value === basicActive3) {
      return;
    }

    setBasicActive3(value);
  };
  const [basicActive4, setBasicActive4] = useState('tab10');

  const handleBasicClick4 = (value: string) => {
    if (value === basicActive4) {
      return;
    }

    setBasicActive4(value);
  };
  const [basicActive5, setBasicActive5] = useState('tab13');
  const handleBasicClick5 = (value: string) => {
    if (value === basicActive5) {
      return;
    }

    setBasicActive5(value);
  };
  const [basicActive6, setBasicActive6] = useState('tab16');
  const handleBasicClick6 = (value: string) => {
    if (value === basicActive6) {
      return;
    }

    setBasicActive6(value);
  };
  const [basicActive7, setBasicActive7] = useState('tab19');
  const handleBasicClick7 = (value: string) => {
    if (value === basicActive7) {
      return;
    }

    setBasicActive7(value);
  };
  const [basicActive8, setBasicActive8] = useState('tab22');
  const handleBasicClick8 = (value: string) => {
    if (value === basicActive8) {
      return;
    }

    setBasicActive8(value);
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
          <h2 className='m-0 pb-3 pt-3 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgb(57 62 70)', color: "#eeeeee" }}><strong>1st semester</strong></h2>
          <MDBTabs className='mb-3'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick1('tab1')} active={basicActive1 === 'tab1'}>
                Syllabus
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick1('tab2')} active={basicActive1 === 'tab2'}>
                Books
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleBasicClick1('tab3')} active={basicActive1 === 'tab3'}>
                Previous Year Papers
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={basicActive1 === 'tab1'}>
              <div className="cardss-list" style={{ justifyContent: 'center' }}>
                <div className='cards'>
                  <a href='https://drive.google.com/file/d/1lBtjmEvGk-1ulpV8kw1TABt8-LOMsnjR/view?usp=sharing' target="_blank">
                    <img src="https://www.linkpicture.com/q/Yellow-Notebook-Cutout-Notebook-Book-Cover-3.jpg" alt="" style={{ height: "213px" }} /> </a>

                </div></div>


            </MDBTabsPane>
            <MDBTabsPane show={basicActive1 === 'tab2'} >
              <div className="cardss-list" >
                <Card /></div>
            </MDBTabsPane>
            <MDBTabsPane show={basicActive1 === 'tab3'}>
              <div className="cardss-list" >
                <Pyq1 /></div>

            </MDBTabsPane>
          </MDBTabsContent></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
