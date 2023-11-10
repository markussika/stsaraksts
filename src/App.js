
import Diena from "./Diena";
import { useEffect, useState } from "react";



function App() {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
async function getLessons() {
  const response = await fetch("http://cheese-cake.onthewifi.com/api/lessons")
  const data = await response.json();
  console.log(data.DP20[4]);
  const cleansedData = [
    {
    diena : "pirmdiena",
    stundas: data.DP20[0].classes,
  },
  {
    diena : "otrdiena",
    stundas: data.DP20[1].classes,
  },
  {
    diena : "tresdiena",
    stundas: data.DP20[2].classes,
  },
  {
    diena : "ceturtdiena",
    stundas: data.DP20[3].classes,
  },
  {
    diena : "piektdiena",
    stundas: data.DP20[4].classes,
  }
  
]
  setLessons(data);
  setLoading(false);

}
getLessons();

  
    
  })
 
  
      const visasStundas = [
        {diena: "pirmdiena", 
      stundas:["sports",
      "dabaszinibas",
       "vesture",
        "smaidins"]},
        {diena: "otradiena", 
        stundas:["dabaszinibas",
        "krivu valdoa",
         "tava mamma",
          "pavarstunda"]},
        {diena: "tresdiena", 
        stundas:["padzilinatais kurss",
        "klases stunda",
         "fizika",
          "dabaszinibas"]},
        {diena: "ceturtdiena", 
        stundas:["sports",
        "sports",
         "ekskursija",
          "smaidins"]},
        {diena: "piektdiena", 
        stundas:["patstavigais darbs",
        "datorsistemas un datortikli",
         ]}
      ];
      const dienasJSX = visasStundas.map((diena, indekss) =>{
      return <Diena key={indekss} diena = {diena.diena} stundas = {diena.stundas}/>
      });
  return (
    <>
    
    
    
      <div >
        {loading ? <p>Loading...</p> : dienasJSX}
        </div>
        
    </>
  )
  
  
  
}

export default App;

