import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { setReferralRoutes } from "./routes/referralRoutes";
import { errorHandler } from "./middleware/errorHandler";
import { validateReferral } from "./middleware/validation";

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", validateReferral);
setReferralRoutes(app);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
