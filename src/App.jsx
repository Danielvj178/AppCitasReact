import { Form } from "./components/Form";
import Header from "./components/Header"
import PacientsList from "./components/PacientsList";

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PacientsList />
      </div>
    </div>
  )
}

export default App;
