import Book from "../model/Book.js";
import express from "express";
import { getBook, getAllBook, createBook,deleteBook,updateBook } from "../controller/BookController.js";



const router = express.Router();


// CREATE
router.post("/add", createBook);
//UPDATE

router.put("/update/:id",  updateBook);

//DELETE

router.delete("/delete/:id",  deleteBook);

//GET
router.get("/:id", getBook);

//GET ALL

router.get("/", getAllBook);


export default router










