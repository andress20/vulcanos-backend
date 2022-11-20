import mongoose from "mongoose";
import config from "../../config";

/**
 * 0 = Disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongooConnection = {
  isConnected: 0,
};

const connect = async () => {
  const mongoURI = config.MONGO_URI || "";
  const options = {
    dbName: "vulcanos-database",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  if (mongooConnection.isConnected) {
    console.log("We were already connected");
    return;
  }

  try {
    if (mongoose.connections.length > 0) {
      mongooConnection.isConnected = mongoose.connections[0].readyState;

      if (mongooConnection.isConnected === 1) {
        console.log("Using last conection");
        return;
      }
      await mongoose.disconnect();
    }
    console.log("Hey! be sure MongoDB is up");
    await mongoose.connect(mongoURI, options);
    mongooConnection.isConnected = 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    // handleError(error);
    mongoose.connection.on("error", (error: any) => {
      console.log("something went wrong", error);
    });
  } finally {
    return mongoose.connection;
  }
};

const disconnect = async () => {
  if (mongooConnection.isConnected === 0) return;
  await mongoose.disconnect();
  console.log("Disconnected of MongoDB");
};

export { connect, disconnect };
