import React, { useState } from 'react';
import axios from 'axios';


const ArrowRightMap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [gunlist, setgunlist] = useState();
  const getgunlist = () => {
      axios.get("https://www.imgen.site/imgen2/api_male/subtype.php").then((response) => {
          let datax = response.data
          setgunlist(datax)
          // console.log(datax)

      });
  };
  getgunlist()
  const items = gunlist;

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {items?.map((item, index) => (
        <div key={index} style={{ display: index === activeIndex ? 'block' : 'none' }}>
           <img width={500} height={350} src={'https://www.imgen.site/imgen2' + item.path} className="card-img-top img-fluid" alt="..." />
          {item.Name_data}
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ArrowRightMap;
