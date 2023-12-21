import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PROJECT_DATA } from '../Data';
import Images from "../img";
import { Cursor, useTypewriter} from 'react-simple-typewriter';


const PRJSLD = () => {
  const [text] = useTypewriter({
    words: ["</projects>"],
    loop: {}
});

    const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    
    const handleErrorImage = (data) => {
        setDefaultImage((prev) => ({
          ...prev,
          [data.target.alt]: data.target.alt,
          linkDefault: Images.imgKen,
        }));
      };
    return ( 
      
        <div className="prcontainer">
          <h1>{text}<Cursor/></h1>
      <Slider {...settings}>
        {PROJECT_DATA.map((item, index) => (
          <div className="card" key={item.title + index}>
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title} 
               <a href={item.Repo}>
            <button className='repobttn' >
                REPO
            </button>
            </a></h1>
            </div>
            
            <div className="card-bottom">
              <h3>{item.Disc}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
      <video autoPlay loop muted>
      <source src={Images.video} type='video/mp4'/>
    </video>
    </div>
     );
}
 
export default PRJSLD;