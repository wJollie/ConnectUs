import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { StreamChat } from "stream-chat";
import Cookies from "js-cookie";
import dotenv from "dotenv";

function App() {
  const streamApiKey = process.env.REACT_APP_STREAM_API_KEY; //temporary
  const token = Cookies.get("token");
  const client = StreamChat.getInstance(streamApiKey);

  // Check if the user is already connected before rendering the components.
  if (token && !client.userID) {
    const user = {
      id: Cookies.get("userId"),
      name: Cookies.get("username"),
      hashedPassword: Cookies.get("hashedPassword"),
    };

    client
      .connectUser(user, token)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.error("Error connecting user:", error);

        if (
          error.code === "ERR_TOKEN_INVALID" ||
          error.code === "ERR_TOKEN_EXPIRED"
        ) {
          // Handle token-related errors specifically.
          console.error("Token validation error details:", error.response.data);
        }
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
