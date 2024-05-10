import express from "express";
import db from "../mockdb"

const router = express.Router();

router.get('/:id?', async (req, res, next) => {
    try {
        //destructure id
        const { id } = req.params;
        //declare variable named data
        let data;
        //create if/else statement
      if (id) {
        data = await db.getOne(id);
      } else {
        data = await db.getAll();
        }
        //send data as json response
      res.json(data);
    } catch (error) {
      next(error);
    }
  });


router.post(("/", async (req, res) => {
    try {
        //declare a newUser variable
        letnewUser = req.body;
        //declare a variable named data 
        let data = await db.add(newUser);
        res.json(data);
    } catch (error) {
        next(error)
    }
}));


router.put(("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let updatedUser = req.body;
        let data = await db.update(id, updatedUser);
        res.json(data)
    } catch (error) { next(error) }
}));



router.delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await db.remove(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  });

export default router