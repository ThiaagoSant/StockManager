import express from "express";
import cors from "cors";


export const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () =>
  console.log("Server is running in http://localhost:3003")
);