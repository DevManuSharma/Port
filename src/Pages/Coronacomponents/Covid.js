import React, { useEffect ,useState } from "react";
import './Covid.css'
const Covid = () =>{
   
    const [data , setData] = useState([]);
    const getCovidData = async()=> {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
          const actualData = await res.json();
          console.log(actualData.statewise[0]);
          setData(actualData.statewise[0]);
        } catch(err){
           console.log(err);
        }
     
    }

    useEffect( () => {
      getCovidData()
    } , []

    );
   return(
       <>
       <section>
       <h1 className="text-center live"><i class="fa fa-3x fa-circle blink"/> LIVE</h1>
       <h2 className="text-center" >COVID-19 TRACKER</h2>

       <ul className="ul text-center" >
       <p className="cor_name text-center" ><span>Our</span> Country</p>
                    <p className="cor_total cor_india text-center"><img src="https://cdn.countryflags.com/thumbs/india/flag-3d-250.png" height="30px" width="40px"  alt="Flag" /> INDIA</p>
           
           <li className="cor d-flex justify-content-center">
            <div className="cor_main" >
                <div className="cor_inner recovered" >
                    <p className="cor_name text-center recovered" ><span>Total</span> Recovered</p>
                    <p className="cor_total cor_small text-center">{data.recovered}</p>
                    </div>

            </div>

           </li>
           <li className="cor d-flex justify-content-center ">
            <div className="cor_main" >
                <div className="cor_inner confirmed" >
                    <p className="cor_name text-center confirmed " ><span>Total</span> Confirmed</p>
                    <p className="cor_total cor_small text-center">{data.confirmed}</p>
                    </div>

            </div>

           </li>
           <li className="cor d-flex justify-content-center">
            <div className="cor_main " >
                <div className="cor_inner  death" >
                    <p className="cor_name text-center  death" ><span>Total</span> Death</p>
                    <p className="cor_total cor_small text-center">{data.deaths}</p>
                     </div>

            </div>

           </li>
           <li className="cor d-flex justify-content-center ">
            <div className="cor_main " >
                <div className="cor_inner activenow" >
                    <p className="cor_name text-center activenow" ><span>Total</span> Active</p>
                    <p className="cor_total cor_small text-center">{data.active}</p>
                    
                </div>

            </div>

           </li>

         
           <p className="cor_name text-center" ><span>Last</span> Updated</p>
                    <p className="cor_total cor_updated text-center">{data.lastupdatedtime}</p>
                    <p>The Above Shown Data Will Be Updated Automatically </p>
       </ul>
      
       </section>
       <footer className="page-footer font-small blue  footer "  >

  

</footer>
       </>
   )
}

export default Covid;