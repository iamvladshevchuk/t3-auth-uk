import { createRouter } from "./context"
import superjson from "superjson"
import { authRouter } from "./auth"
import { profileRouter } from "./profile"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", authRouter)
  .merge("profile.", profileRouter)

export type AppRouter = typeof appRouter
