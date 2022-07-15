import { Middleware } from "@src/types/helpers"
import { useSession } from "next-auth/react"
import { NextRouter, useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Protected({
  middleware,
  children,
}: Props): JSX.Element {
  const router = useRouter()
  const session = useSession()
  const passed = useMiddleware(middleware, session, router)

  if (session.status === "loading" || !passed) {
    return (
      <div className="w-full min-h-screen centered">
        <p>Loading...</p>
      </div>
    )
  }

  return children
}

function useMiddleware(
  middleware: Middleware | undefined,
  session: ReturnType<typeof useSession>,
  router: NextRouter
) {
  const [passed, setPassed] = useState(middleware === undefined)

  useEffect(() => {
    if (session.status === "loading" || middleware === undefined) return

    middleware(() => setPassed(true), session, router)
  })

  return passed
}

interface Props {
  children: JSX.Element
  middleware: Middleware | undefined
}
