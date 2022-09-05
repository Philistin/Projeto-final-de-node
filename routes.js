const express = require('express')


// importar o aquivo TasksController
const tasksController = require('./controllers/TasksControllers')



const router = express.Router()

// router.get('/',(req, res)=>{
//     res.send('salut le monde')
// })



// criar uma tarefa
router.post('/', tasksController.createTasks)


// traz todas as tarefas
router.get('/', tasksController.allTasks)

// traz uma tarefa
router.get('/:id', tasksController.Tasks)


// atualiza uma tarefa
router.put('/:id', tasksController.updateTasks)


// deletar uma tarefa
router.delete('/:id', tasksController.deleteTasks)



module.exports = router
