import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  let a;
  res.send(a);
});

export default app;
