const Pool = require('pg').Pool
const pool = new Pool({
  user: 'tyler',
  host: '192.168.5.21',
  database: 'todolist',
  password: 'SuperSecret',
  port: 5432,
})



const getTasks = (request, response) => {
  pool.query('SELECT * FROM listitems ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const getTaskById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM listitems WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const createTask = (request, response) => {
  const { username, details } = request.body

  pool.query('INSERT INTO listitems (username, details) VALUES ($1, $2)', [username, details], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Task added`)
  })
}



const updateTask = (request, response) => {
  const id = parseInt(request.params.id)
  const { username, details } = request.body

  pool.query(
    'UPDATE listitems SET username = $1, details = $2 WHERE id = $3',
    [username, details, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}



const deleteTask = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM listitems WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Task deleted with ID: ${id}`)
  })
}



module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
}
