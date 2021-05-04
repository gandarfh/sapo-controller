import App from './app'

const app = new App()

const PORT = 3000

app.express.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
