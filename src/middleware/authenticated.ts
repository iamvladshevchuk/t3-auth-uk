import { Middleware } from "@src/types/helpers"

const authenticated: Middleware = (next, session, router) => {
  if (session.status === "unauthenticated") {
    router.push("/login")
    return
  }

  if (!session.data?.user?.city) {
    router.push("/registration")
    return
  }

  next()
}

export default authenticated