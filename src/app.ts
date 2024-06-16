import express, { Request, Response } from "express";
import { UserRoutes } from "./modules/user/user.routes";
const app = express();

//persers
app.use(express.json());
//user create route
app.use("/api", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello next!");
});

export default app;
