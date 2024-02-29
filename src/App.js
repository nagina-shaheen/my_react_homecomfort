import HomePage from "./pages/homePage";
import Layout from "./global/layout";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
        <HomePage />
        </Layout>
       
        <h1>Hello World</h1>
      </header>
    </div>
  );
}

export default App;
