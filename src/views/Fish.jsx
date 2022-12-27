import {useState, useEffect} from 'react'
import axios from 'axios';
export default function Fish() {

  const [peces, setPeces] = useState([]);

  const probarApi = async () =>{
    const pecesApi = await axios.get('http://localhost:2022/api/peces')
    setPeces(pecesApi.data);
  }
  useEffect(() => {
    probarApi();
  }, []);

  let varPeces = peces;

  return (
    <>
      <section className="w-full">
          <div  id="banner1" className="flex items-center justify-center">
              <h2 className="text-white text-2xl">Peces</h2>  
          </div>
          <div className="w-[90%] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center mx-auto my-10 gap-7" id="peces">
            {varPeces.map(pez => 
              (
                <article key={pez._id}>
                    <figure className="flex flex-col items-center justify-center gap-y-3 text-center">
                      <img className="max-w-full sm:w-56 sm:h-56 object-cover"
                        src={`imgs/${pez.img}`} 
                        alt={pez.nombres} />
                        <figcaption class="flex flex-col gap-y-3">
                            <h3>{pez.nombres}</h3>
                            <button>Ver mas a detalle</button>
                        </figcaption>
                    </figure>
                </article>
              )
            )}
          </div>  
      </section>    
    </>
  )
}
