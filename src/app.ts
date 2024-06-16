import express, { Request, Response } from "express";
import { UserRoutes } from "./modules/user/user.routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
const app = express();

//persers
app.use(express.json());
//user create route
app.use("/api", UserRoutes);
//globalerrorhandler
app.use(globalErrorHandler);
//not found
app.use(notFound);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello next!");
});

export default app;
