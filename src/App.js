import "./App.scss";
import "./assets/scss/todoList.scss";
import TodoList from "./components/TodoList";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from 'firebase/app'
import 'firebase/auth'

const AppTitle = "Todo List";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TodoList appName={AppTitle} />
    </div>
  );
}

export default App;
