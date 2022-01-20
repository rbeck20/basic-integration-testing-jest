const request = require("supertest")
const app = require("../src/app")

const baseUrl = "/"

describe("GET /", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app.callback()).get(baseUrl)
        expect(response.statusCode).toBe(200)
    })

    test("should respond with JSON", async () => {
        const response = await request(app.callback()).get(baseUrl)
        expect(response.type).toBe("application/json")
    })

    test("should respond with the title", async () => {
        const response = await request(app.callback()).get(baseUrl)
        expect(response.body.msg).toBe("Hello World!")
    })
})
