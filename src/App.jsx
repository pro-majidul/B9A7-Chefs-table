import { useState } from "react";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Recipes from "./components/ourRecipe/Recipes";
import Recepies from "./components/recepies/Recepies";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [cookes , setCookes]= useState([]);
  const handelCookes = (cook) =>{
    const isExist = cookes.find(cooks => cooks.receip_id ==cook.receip_id );
    if(isExist){
      
      return alert('already exist')
    }{
      setCookes([...cookes , cook])
    }
  }

  const [prepareRecepi , setPrepareRecepi] = useState([]);
  const handelPreparedRecepy = id =>{
    const findinThisData = cookes.find( cook => cook.receip_id == id);
    const removingThisData = cookes.filter(coke => coke.receip_id !== id)
    setCookes(removingThisData)
    setPrepareRecepi([...prepareRecepi ,findinThisData])
    
  }

  const [times , setTimes] = useState(0);
  const [calores , setCalores] = useState(0)
  const handelTimeCalores = (time , calory) =>{
    setTimes(times + time);
    setCalores(calores + calory)
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <main>
      <Recipes></Recipes>
      <section className="md:flex my-5 pt-2 gap-5">
        <Recepies
         handelCookes={handelCookes}
         ></Recepies>

        <Sidebar
         cookes={cookes} 
        handelPreparedRecepy={handelPreparedRecepy}
        prepareRecepi={prepareRecepi}
        times={times}
        calores={calores}
        handelTimeCalores={handelTimeCalores}
         ></Sidebar>

      </section>
      </main>
    </div>
  );
};

export default App;