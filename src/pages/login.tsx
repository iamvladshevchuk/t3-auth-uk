import Button from "@components/Button"
import GithubIcon from "@src/icons/github.svg"
import guest from "@src/middleware/guest"
import { Route } from "@src/types/helpers"
import type { NextPage } from "next"
import { signIn } from "next-auth/react"
import Head from "next/head"
import { useForm } from "react-hook-form"

const Login: NextPage & Route = () => {
  const { handleSubmit } = useForm()

  return (
    <>
      <Head>
        <title>Логін</title>
      </Head>
      <div className="w-full min-h-screen centered">
        <form
          className="grid gap-[36px] w-[300px]"
          onSubmit={handleSubmit(() => signIn("github"))}
        >
          <Button icon={<GithubIcon width="24px" height="24px" fill="white" />}>
            Увійти
          </Button>
        </form>
      </div>
    </>
  )
}

Login.protected = guest

export default Login
