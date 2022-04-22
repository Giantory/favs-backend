const supertest = require('supertest')
const app = require ('./index')

const api = supertest(app)

test('create a valid user' , async () => {
    await api
    const newUser = {
        correo: "johndoe@gmail.com",
        password: "johndoe123"
    }
})