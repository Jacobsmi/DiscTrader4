import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response)=>{
  res.send({"status": "success"}).status(200);
})

app.listen(5000, ()=>{console.log("Server is listening at http://localhost:5000")})