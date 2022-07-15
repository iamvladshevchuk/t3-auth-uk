import { AuthenticatedUser } from "@src/types/helpers"
import { TRPCError } from "@trpc/server"
import { createRouter } from "../router/context"

export default function createAuthenticatedRouter() {
  return createRouter().middleware(async ({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" })
    }

    if (!ctx.session.user.city) {
      throw new TRPCError({ code: "FORBIDDEN" })
    }

    return next({
      ctx: {
        ...ctx,
        session: {
          ...ctx.session,
          user: ctx.session.user as AuthenticatedUser,
        },
      },
    })
  })
}
