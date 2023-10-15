// to run the docker file run - "docker run -p 3000:3000 productivity-manager-client"
import Navbar from './components/Navbar';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <Navbar />
      {/* <h1>love you pankhuri deshmukh gupta</h1> */}
      <Counter />
    </div>
  )
}

export default App;
