"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const drama_route_1 = __importDefault(require("./routes/drama.route"));
const episode_route_1 = __importDefault(require("./routes/episode.route"));
const proxy_route_1 = __importDefault(require("./routes/proxy.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/v2/drama", drama_route_1.default);
app.use("/api/v2/proxy", proxy_route_1.default);
app.use("/api/v2/episode", episode_route_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
