import { Request, Response } from "express";
import { app } from "./app";
import { connection } from "./data/connection";

app.get("/products", async (req: Request, res: Response) => {
  const pagina = req?.query?.page;
  const offset = 6 * (Number(pagina) - 1);

  if (pagina) {
    const products = await connection
      .select("*")
      .from("products")
      .limit(6)
      .offset(offset);
    res.status(200).send(products);
  } else {
    const products = await connection.select("*").from("products");
    res.status(200).send(products);
  }
});

app.post("/createProduct", async (req: Request, res: Response) => {
  try {
    const { name, category, price, quantity } = req.body;
    if (!name || !category || !quantity || !price) {
      res.statusCode = 400;
      throw new Error(
        "User_id, product_id and quantity are required. Please check your request!"
      );
    }
    const id = Date.now() + Math.random().toString();

    await connection
      .insert({ id, name, category, price, quantity })
      .into("products");

    res.status(201).send("Produto criado com sucesso");
  } catch (error: any) {
    console.log(error);
  }
});

app.put("/editProduct/:id", async (req: Request, res: Response) => {
  try {
    await connection("products")
      .update({
        name: req.body?.name,
        category: req.body?.category,
        price: req.body?.price,
        quantity: req.body?.quantity,
      })
      .where({ id: req.params?.id });

    res.send("Success!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Deu ruim ae, faz o bglh direito");
  }
});

app.delete("/deleteProduct/:id", async (req: Request, res: Response) => {
  try {
    await connection("products").del().where({ id: req.params?.id });

    res.send("Success!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Deu ruim ae, faz o bglh direito");
  }
});
