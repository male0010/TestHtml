import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Testcatearray() {
  const [gunlist, setGunlist] = useState([]);

  useEffect(() => {
    axios.get('https://www.imgen.site/imgen2/api_male/subtype.php')
      .then(response => {
        const data = response.data;
        const mappedData = data.reduce((result, item) => {
          const typeId = item.id_type;
          if (!result[typeId]) {
            result[typeId] = [];
          }
          result[typeId].push(item);
          return result;
        }, {});
        setGunlist(mappedData);
      })
      .catch(error => {
        console.error(error);
      });

    let params = new URL(document.location).searchParams;
    let name = params.get("id"); // is the string "Jonathan Smith".
   console.log(name);
  }, []);

  const handleClick = (id) => {
    window.location.href = "http://localhost:3000/test2?id=" + id;
  };

  return (
    <>
      {Object.entries(gunlist).map(([typeId, typeArray]) => (
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
      ))}
    </>
  );
}