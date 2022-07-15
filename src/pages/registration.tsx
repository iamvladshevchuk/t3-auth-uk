import Button from "@components/Button"
import Input from "@components/Input"
import reloadSession from "@src/helpers/reloadSession"
import registered from "@src/middleware/registered"
import { Route } from "@src/types/helpers"
import { trpc } from "@src/utils/trpc"
import type { NextPage } from "next"
import Head from "next/head"
import { SubmitHandler, useForm } from "react-hook-form"

const Profile: NextPage & Route = () => {
  const { handleSubmit, register } = useForm<Data>()
  const mutation = trpc.useMutation(["auth.register"])

  const next: SubmitHandler<Data> = ({ city }) => {
    mutation.mutate({ city }, {
      onSuccess: reloadSession
    })
  }

  return (
    <>
      <Head>
        <title>Реєстрація</title>
      </Head>
      <div className="w-full min-h-screen centered">
        <form className="grid gap-[36px] w-[300px]" onSubmit={handleSubmit(next)}>
          <div className="grid gap-[24px]">
            <h1 className="text-center">Реєстрація</h1>
            <div className="grid gap-[16px]">
              <Input id="city" label="Місто" required {...register("city")} />
            </div>
          </div>
          <div className="grid gap-[16px]">
            <Button>Продовжити</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Profile

Profile.protected = registered

interface Data {
  city: string
}