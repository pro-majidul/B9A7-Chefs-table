import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Recipes from "./components/ourRecipe/Recipes";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
        <h3>Hellow world</h3>
    </div>
  );
};

export default App;