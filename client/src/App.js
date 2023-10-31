import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { StreamChat } from "stream-chat";
import Cookies from "universal-cookie";

function App() {
  const streamApiKey = process.env.STREAM_API_KEY;
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(streamApiKey);

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        console.log(user);
      });
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <SignUp />
        <Login />
      </ErrorBoundary>
    </div>
  );
}

export default App;
