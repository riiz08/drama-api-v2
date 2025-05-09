import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dramaRoutes from "./routes/drama.route";
import episodeRoutes from "./routes/episode.route";
import proxyRoutes from "./routes/proxy.route";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v2/drama", dramaRoutes);
app.use("/api/v2/proxy", proxyRoutes);
app.use("/api/v2/episode", episodeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
