import { User } from "@prisma/client";
import { useSession } from "next-auth/react";

export default function useUser<T extends User>() {
  const { data } = useSession()

  return data?.user as T
}