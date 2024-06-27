import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./containers/CakeContainer";
import Search from "./Search";
import CakeForm from "./components/CakeForm";



function App() {

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };



  return (
    <>
      <header>
        <NavBar />
        <title><Title></Title></title>
        <h1>Welcome to my bakery</h1>

      </header>
      <main>
        <RecipeList />
      </main>
      <footer>
         <CakeForm />
          </footer>
    </>
  );
}

export default App;
