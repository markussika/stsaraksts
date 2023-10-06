
import Diena from "./Diena";



function App() {
  // const pirmdienasStundas = ["sports",
  //    "dabaszinibas",
  //     "vesture un socialas zinibas", 
  //     "krievu valoda"];
  //     const otradienasStundas = ["matematikas specialas nodalas",
  //    "datorsistemas un datortikli",
  //     "dabaszinibas", 
  //     "matematika"];
      const visasStundas = {
        pirmdiena: [
          "sports",
     "dabaszinibas",
      "vesture un socialas zinibas", 
      "krievu valoda"
        ]
      }
  return (
    <>
    
    <Diena Diena="pirmdiena" stundas={pirmdienasStundas}/>
    <Diena Diena="otrdiena" stundas={otradienasStundas}/>
    {/* <Diena Diena="tresdiena"/>
    <Diena Diena="ceturdiena"/>
    <Diena Diena="piekdiena"/> */}
    </>
  )
  
  
  
}

export default App;

