import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Testcatearray() {
  const [typegunlist, settypegunlist] = useState([]);
  const [subtypegunlist, setsubtypegunlist] = useState([]);
  const [activeType, setActiveType] = useState(null);
  const [activesubType, setActivesubType] = useState(null);

  useEffect(() => {
    axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
      .then(response => {
        const data = response.data;
        const mappedData = data.reduce((result, item) => {
          const typeId = item.name_type;

          if (!result[typeId]) {
            result[typeId] = [];
          }
          result[typeId].push(item);
          return result;
        }, {});
        settypegunlist(mappedData);
        console.log(mappedData)
      })
  }, []);
  useEffect(() => {
    axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
      .then(response => {
        const data = response.data;
        const mappedData = data.reduce((result, item) => {
          const subtypeId = item.name_subtype;

          if (!result[subtypeId]) {
            result[subtypeId] = [];
          }
          result[subtypeId].push(item);
          return result;
        }, {});
        setsubtypegunlist(mappedData);
        console.log(mappedData)
      })
  }, []);

  const handleClick = (id) => {
    window.location.href = `http://localhost:3000/test2?id=${id}`;
  };

  const handleTypeClick = (typeId,subtypeId) => {
    setActiveType(typeId);
    setActivesubType(subtypeId)
  };
  // const type1Array = typegunlist[1] || [];
  // const type2Array = typegunlist[2] || [];
  // const type3Array = typegunlist[3] || [];

  return (
    <>
      <div className="container">
        {Object.keys(typegunlist).map((subtypeId, index) => (
          <div key={index} className="card">
            <div className="card-header btt" onClick={() => handleTypeClick(subtypeId)}>
              {subtypeId}
            </div>
            <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
            {activeType === subtypeId && typegunlist[subtypeId].map((item, index) => (
              <div key={index} className="card-body" onClick={() => handleClick(item.id)}>
                <div class="card card-body " key={index}>

                  <div className='card-body'>

                    <h5 className='card-title '>{item.Name_data}</h5>
                    <h6 className='card-subtitle mb-2 text-muted   '>{item.name_subtype}</h6>
                  </div>
                  <div className='card-body'>
                    <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        ))}
        
      </div>
    </>
  );
}


{/* {Object.entries(gunlist).map(([typeId, typeArray]) => (
  <div key={typeId}>
    <h3>Type {typeId}</h3>
    <div className="row">
      {typeArray.map((item) => (
        <div key={item.id_data} className="col">
          <div className="card" onClick={() => handleClick(item.id_data)}>
            <img width={500} height={350} src={'https://www.imgen.site/imgen2' + item.path} className="card-img-top img-fluid" alt="..." />
            <div className="card-body itemm">
              <h5 className="itemm">
                {(item.Name_data).toUpperCase()}
                <h6 className='card-subtitle mb-2 text-muted'>{item.name_subtype}</h6>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
))} */}
