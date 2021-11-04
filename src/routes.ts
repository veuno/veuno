import { Router } from "../deps.ts"


const router = new Router()

router
    .get('/', (ctx) => {
        ctx.response.body = "Hello, World!"
    })
    .get("/new", ({ response }) => {
        response.body = "New endpoint!"
    })

export default router;