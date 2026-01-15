import Hello from "./Hello";
import Counter from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div>
      <Hello name="Anna" />
      <Hello name="Bartek" />
      <Hello name="Celina" />
      <Counter />
      <InputTracker />
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />
      <TodoList todos={["Zrobić trening", "Zrobić zakupy", "Posprzątać auto"]} />
      <LoginForm />
    </div>
  );
}
export default App;
