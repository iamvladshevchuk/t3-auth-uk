import { User } from "@prisma/client"
import { createRouter } from "@src/server/router/context"
import { NextComponentType } from "next"
import { useSession } from "next-auth/react"
import Router from "next/dist/server/router"
import {
  AppContextType,
  AppInitialProps,
  AppPropsType,
  NextPageContext,
} from "next/dist/shared/lib/utils"
import { NextRouter } from "next/router"

export type Route = { protected?: Middleware }

export type CustomAppType = NextComponentType<
  AppContextType,
  AppInitialProps,
  AppPropsType & { Component: NextComponentType<NextPageContext, any, {}> & Route }
>

export type NonNullableProperties<T, P extends keyof T> = Omit<T, P> & {
  [K in P]: NonNullable<T[K]>
}

export type Middleware = (next: () => void, session: ReturnType<typeof useSession>, router: NextRouter) => void

export type AuthenticatedUser = NonNullableProperties<User, "city" | "name" | "email">
export type RegisteredUser = NonNullableProperties<User, "name" | "email">

export type GetRouterMiddleware<T extends typeof createRouter> = Parameters<ReturnType<T>["middleware"]>[0]