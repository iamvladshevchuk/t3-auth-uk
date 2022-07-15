import { Middleware } from "@src/types/helpers"

const registered: Middleware = (next, session, router) => {
  if (session.status === "unauthenticated") {
    router.push("/login")
    return
  }

  if (session.data?.user?.city) {
    router.push("/")
    return
  }

  next()
}

export default registered