import axios from 'axios';
import React, { useEffect, useState } from'react';

export default function Testcatearray () {
  const [gunlist, setGunlist] = useState([]);

  useEffect(() => {
    axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
      .then(response => {
        const data = response.data;
        const mappedData = data.reduce((result, item) => {
          const typeId = item.id_subtype;
          if (!result[typeId]) {
            result[typeId] = [];
          }
          result[typeId].push(item);
          return result;
        }, {});console.log(mappedData);
        setGunlist(mappedData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const type1Array = gunlist[1] || [];
  const type2Array = gunlist[2] || [];
  const type3Array = gunlist[3] || [];

  return (
    <>
      <div className="row">
        {type1Array.map((item) => (
          <div key={item.id_data} className="col">
            <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
              <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
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

      <div className="row">
        {type2Array.map((item) => (
          <div key={item.id_data} className="col">
            <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
              <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
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
      <div className="row">
        {type3Array.map((item) => (
          <div key={item.id_data} className="col">
            <div className="card" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id_data}`}>
              <img width={500} height={350} src={`https://www.imgen.site/imgen2${item.path}`} className="card-img-top img-fluid" alt="..." />
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

     


        </>
    );
}

