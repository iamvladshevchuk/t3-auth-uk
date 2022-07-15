import Button from "@components/Button"
import Input from "@components/Input"
import reloadSession from "@src/helpers/reloadSession"
import useUser from "@src/hooks/useUser"
import authenticated from "@src/middleware/authenticated"
import { AuthenticatedUser, Route } from "@src/types/helpers"
import { trpc } from "@src/utils/trpc"
import type { NextPage } from "next"
import { signOut } from "next-auth/react"
import Head from "next/head"
import { SubmitHandler, useForm } from "react-hook-form"

const Profile: NextPage & Route = () => {
  const { handleSubmit, register } = useForm<Data>()
  const user = useUser<AuthenticatedUser>()
  const mutation = trpc.useMutation(["profile.update"])

  const save: SubmitHandler<Data> = data => {
    mutation.mutate(data, {
      onSuccess: reloadSession
    })
  }

  return (
    <>
      <Head>
        <title>Профіль</title>
      </Head>
      <div className="w-full min-h-screen centered">
        <div className="grid gap-[24px] w-[300px]">
          <div className="text-center grid gap-[8px]">
            <h1>Профіль</h1>
            <p>Привіт, {user.name}!</p><p>Твоє місто: {user.city}.</p>
            <div className="flex justify-center">
              <Button tertiary onClick={() => signOut()}>Вийти</Button>
            </div>
          </div>
          <form className="grid gap-[36px] p-[16px] rounded-[8px]" onSubmit={handleSubmit(save)}>
            <div className="grid gap-[16px]">
              <Input id="name" label="Ім'я" defaultValue={user.name} required {...register("name")} />
              <Input id="city" label="Місто" defaultValue={user.city} required {...register("city")} />
            </div>
            <Button>Зберегти</Button>
          </form>
        </div>
      </div>
    </>
  )
}

Profile.protected = authenticated

export default Profile

interface Data {
  name: string
  city: string
}