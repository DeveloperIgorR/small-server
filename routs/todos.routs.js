const express = require('express')
const router = express.Router()
const TasksController = require('../controllers/tasks.controller.js')

/**
 * @swagger
 * /api/todos:
 *  get:
 *      summary: Get all users
 *      description: Returns all users from DB
 *      tags:
 *          - Tasks
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get('/',TasksController.getAll)

/**
 * @swagger
 * /api/todos/{id}:
 *  get:
 *      summary: Get task with {id}
 *      tags:
 *        - Tasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of task
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */

router.get('/:id',TasksController.getOne)

/**
 * @swagger
 *  /api/todos/create:
 *    post:
 *      summary: Add new task
 *      description:
 *          Add new 'Task' object.
 *      tags:
 *          - Tasks
 *      parameters:
 *        - name: Task
 *          in: body
 *          description: task object
 *          required: true
 *          schema:
 *            $ref: '#/definitions/Tasks'
 *      responses:
 *        200:
 *          description: Successful response
 *          schema:
 *              title: Return String
 *              type: string
 *              example: "Section added succesfully"
 *        500:
 *          description: Error
 *          schema:
 *            type: string
 *            example: "Could not add Section"
 * definitions:
 *   Tasks:
 *     description: Tasks object
 *     properties:
 *       title:
 *         type: string
 *         example: Do this first
 *         description: Task title
 *       completed:
 *         type: boolean
 *         example: true
 *         description: task checked
 *     required:
 *      - title
 *      - completed
 */
router.post('/create',TasksController.create)

/**
 * @swagger
 * /api/todos/update/{id}:
 *  put:
 *      summary: Updates a task with {id}
 *      tags:
 *        - Tasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: Set an {id} of a task to update
 *          type: integer
 *        - in: body
 *          name: Task
 *          required: true
 *          description: Object to update
 *          schema:
 *              $ref: '#/definitions/Task'
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.put('/update/:id',TasksController.update)

/**
 * @swagger
 * /api/todos/delete/{id}:
 *  delete:
 *      summary: Delete task with {id}
 *      tags:
 *        - Tasks
 *      consumes:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: id of a task to delete
 *          type: integer
 *      responses:
 *          '200':
 *              description: Successfull response
 */
router.delete('/delete/:id',TasksController.delete)

module.exports = router