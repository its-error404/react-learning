import ButtonComponent from "./components/Button";
import Card from "./components/Card";
import { CORE_CONCEPTS } from "./Data/data";

function App() {
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <div className="content-box">
          <div className="content-heading">
            <h1>Core Concepts</h1>
          </div>
          <div className="concepts-container d-flex">
            {CORE_CONCEPTS.map((concept, key) => {
              return (
                <div className="each-concept" key={key}>
                  <img src={concept.image} width={100} height={100} />
                  <h3>{concept.title}</h3>
                  <p>{concept.description}</p>
                </div>
              );
            })}
          </div>
          <div>
            <ButtonComponent>Hello World</ButtonComponent>
            <Card name="Karthi" email="karthiben16@gmail.com" designation="Web Developer (FrontEnd)"/>
          </div>
        </div>
        <div>
        <ButtonComponent>Hello World</ButtonComponent>
        <ButtonComponent>Hello World</ButtonComponent>
      </div>
      </main>
     
    </div>
  );
}

export default App;
