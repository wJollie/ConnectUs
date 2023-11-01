import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import JoinGame from "./components/JoinGame";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { useState } from "react";

function App() {
  const streamApiKey = "dqpeuaduyk7t"; //temporary
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(streamApiKey);

  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("username");
    cookies.remove("hashedPassword");
    client.disconnectUser();
    setIsAuth(false);
  };

  // Check if the user is already connected before rendering the components.
  if (token && !client.userID) {
    const user = {
      id: cookies.get("userId"),
      name: cookies.get("username"),
      hashedPassword: cookies.get("hashedPassword"),
    };

    client
      .connectUser(user, token)
      .then((user) => {
        setIsAuth(true);
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
      {isAuth ? (
        <Chat client={client}>
          <JoinGame />
          <button onClick={logOut}>Log Out</button>
        </Chat>
      ) : (
        <>
          <SignUp setIsAuth={setIsAuth} />
          <Login setIsAuth={setIsAuth} />
        </>
      )}
    </div>
  );
}

export default App;
