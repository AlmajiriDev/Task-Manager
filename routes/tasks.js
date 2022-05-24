const express = require("express");
const router = express.Router();
const {getAllTasks,createTask,getTask,udpateTask,deleteTask} = require("../controllers/tasks")


router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(udpateTask).delete(deleteTask)




module.exports = router;
