import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Recipes from "./components/ourRecipe/Recipes";
import Recepies from "./components/recepies/Recepies";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Banner></Banner>
      <main>
      <Recipes></Recipes>
      <section className="md:flex my-5 pt-2 gap-5">
        <Recepies></Recepies>
        <Sidebar></Sidebar>

      </section>
      </main>
    </div>
  );
};

export default App;