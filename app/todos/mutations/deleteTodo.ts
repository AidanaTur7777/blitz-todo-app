import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const DeleteTodo = z.object({
  id: z.number(),
})

export default resolver.pipe(
  resolver.zod(DeleteTodo),
  resolver.authorize(),
  async ({ id }, ctx) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const todo = await db.todo.deleteMany({ where: { id, authorId: ctx.session.userId } })

    return todo
  }
)
