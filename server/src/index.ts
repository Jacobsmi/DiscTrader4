import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
  res.send({"status": "success"}).status(200);
})

app.post("/signin", (req: Request, res: Response)=>{
  res.send({status: "failure"});
})

app.listen(5000, ()=>{console.log("Server is listening at http://localhost:5000")})