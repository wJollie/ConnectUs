const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();
dotenv.config();

app.use(cors());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: authMiddleware,
    })
  );
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    

    // const httpServer = createServer(app);
    // const io = new Server(httpServer, {
    //   cors: { origin: "*" },
    // });
    // io.on("connection", (socket) => {
    //   console.log("connected", socket.id);
    //   // roomHandler(io, socket, rooms);
    //   socket.on("disconnect", () => {
    //     console.log("disconnected", socket.id);
    //   });
    // });

    // httpServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
