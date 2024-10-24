import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Recipes from "./components/ourRecipe/Recipes";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
};

export default App;