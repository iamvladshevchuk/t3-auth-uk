import { Middleware } from "@src/types/helpers"

const guest: Middleware = (next, session, router) => {
  if (session.status === "authenticated") {
    router.push("/")
    return
  }

  next()
}

export default guest