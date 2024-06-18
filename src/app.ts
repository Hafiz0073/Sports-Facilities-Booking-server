import express, { Request, Response } from "express";

// import { UserRoutes } from "./modules/user/user.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./routes";
const app = express();

//persers
app.use(express.json());
//user create route
// app.use("/api", UserRoutes);
app.use("/api", router);
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

//test route
const test = (req: Request, res: Response) => {
  res.send("Hello next!");
};

app.get("/", test);
//globalerrorhandler
app.use(globalErrorHandler);
//not found
app.use(notFound);
export default app;
