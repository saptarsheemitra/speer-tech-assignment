import './App.css';

import Home from "./pages/Home"

const App = () => {


    return (
      <div className="App flex justify-center items-center md:w-full md:h-[100vh] bg-gray-200">
        <div className="md:w-[400px] m-auto bg-white">
          <Home />
        </div>
      </div>
    );
  
}

export default App;
