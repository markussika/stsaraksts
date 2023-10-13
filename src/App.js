
import Diena from "./Diena";



function App() {
  
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
        {diena: "tresdinea", 
        stundas:["padzilinatais kurss",
        "klases stunda",
         "fiika",
          "dabaszinibas"]},
        {diena: "ceturtdiena", 
        stundas:["sports",
        "sports",
         "ekskursija",
          "smaidins"]},
        {diena: "piektdiena", 
        stundas:["patstavigais",
        "datorsistemas unb datortikli",
         ]}
      ];
      const dienasJSX = visasStundas.map((diena, indekss) =>{
      return <Diena key={indekss} diena = {diena.diena} stundas = {diena.stundas}/>
      });
  return (
    <>
    
    
    
      <div >
        {dienasJSX}
        </div>
    </>
  )
  
  
  
}

export default App;

