import { z } from "zod"
import createAuthenticatedRouter from "../middleware/createAuthenticatedRouter"

export const profileRouter = createAuthenticatedRouter()
  .mutation("update", {
    input: z.object({
      city: z.string(),
      name: z.string()
    }),
    async resolve({ ctx, input }) {
      await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: { ...input }
      })
    },
  })
