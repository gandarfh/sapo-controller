import express from 'express'
import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.middlewares()
    this.configs()
  }
  private middlewares() {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }
  private configs() {
    this.express.use('/api', routes)
  }
}

export default App
