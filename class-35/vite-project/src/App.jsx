import "./App.css";
import Parent1 from "./component/Parent1";
import Parent2 from "./component/Parent2";
import Parent3 from "./component/Parent3";


import { Parkcontext } from "./component/Parkcontext";

function App() {

  const parkInfo = {
    parkName: "Imagica Amusement park",

    rollerCoaster: "Must be taller than 48 inches",
    waterSlide: "You must know how to Swim",
    merryGoRound: "Children must age less than 10",

    ticketForRollerCoaster: () => {
      return "RollerCoaster Started";
    },

    ticketforWaterSlide: () => {
      return "WaterSlide Started";
    },

    ticketForMerryGoRound: () => {
      return "Merry go Round Started";
    },
  };

  return (
    <>
      
       <Parkcontext.Provider value={parkInfo}>
      <Parent1 parkInfo={parkInfo}/>
      <Parent2/>
      <Parent3/>
       </Parkcontext.Provider>
     
     {/* other component who would not have a access of that data */}
    </>
  );
}

export default App;
