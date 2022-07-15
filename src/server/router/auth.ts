import { z } from "zod"
import createRegisteredRouter from "../middleware/createRegisteredRouter"

export const authRouter = createRegisteredRouter()
  .mutation("register", {
    input: z.object({
      city: z.string(),
    }),
    async resolve({ ctx, input }) {
      await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: { city: input.city }
      })
    },
  })
