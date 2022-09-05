const Tasks = require('../models/TasksModel')


module.exports = {
   
   // criar uma tarefa
  

    async createTasks(req, res) {
        try {
            const { description, done } = req.body
            await Tasks.create({description, done})
            res.status(200).send('tarefa adicionado com sucesso!')

        } catch (error) {
            res.status(400).send(error);

        }
       
    },

    // traz todos os item

    async allTasks(req, res) {
        try {
            const tasks = await Tasks.findAll();

            res.status(200).json(tasks);

        } catch (error) {

            res.status(400).send(error);
        }
    },

    // traz 1 item
    async Tasks(req, res) {
        try {
            const id = req.params.id

            const tasks = await Tasks.findOne({ where: { id } })

            if (!tasks) {
                return res.status(400).json('tarefa não encontrado!')
            }

            res.status(200).json(tasks);
        } catch (error) {

            res.status(400).send(error);
        }
    },

// atualiza 1 item
    async updateTasks(req, res) {
        try {
            const { description, done } = req.body

            const id = req.params.id

            const tasks = await Tasks.findOne({ where: { id } })


            if (!tasks) {
                return res.status(400).json('tarefa não encontrado')
            }

            await tasks.update({ description, done })

            res.status(201).json('tarefa editado com sucesso!')

        } catch (error) {
            res.status(400).send(error);
        }
    },


    // excluir 1 item

    async deleteTasks(req, res) {
        try {
            const id = req.params.id

            const tasks = await Tasks.findOne({ where: { id } })

            if (!tasks) {
                return res.status(400).json('tarefa não encontrado')
            }

             await tasks.destroy()

            res.status(200).json('tarefa excluido com sucesso!');
        } catch (error) {

            res.status(400).send(error);
        }
    }
}