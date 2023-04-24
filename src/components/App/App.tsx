import Button from "../Button/Button";
import Info from "../Info/Info";

const markAllGentlemen = () => {
  return;
};

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <Info />
        <Button text="Marcar todos" actionOnClick={markAllGentlemen} />
      </section>
    </div>
  );
};

export default App;
