const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mimi",
      animal: "cat",
      breed: "?",
    }),
    React.createElement(Pet, {
      name: "Mimi",
      animal: "cat",
      breed: "?",
    }),
    React.createElement(Pet, {
      name: "Mimi",
      animal: "cat",
      breed: "?",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
