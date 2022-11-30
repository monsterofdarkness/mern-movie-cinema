import express from "express";
import {
  createHotel,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from "../controllers/movie.js";

import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateMovie);
//DELETE
router.delete("/:id", verifyAdmin, deleteMovie);
//GET

router.get("/find/:id", getMovie);
//GET ALL

router.get("/", getMovies);

export default router;
