// Ćwiczenie 1.

/* function Hello() {
 return <h1>Daniel Monkiewicz 20514</h1>;
}
export default Hello; */

// Ćwiczenie 2.

function HelloWithProps(props) {
 return <h1>Witaj, {props.name}!</h1>;
}

function App() {
 return (
 <div>
 <HelloWithProps name="Anna" />
 <HelloWithProps name="Bartek" />
 <HelloWithProps name="Celina" />
 </div>
 );
}
export default App;