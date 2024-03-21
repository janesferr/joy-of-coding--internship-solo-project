import {options} from "./api/auth/[...nextauth]/options"
import {getServerSession} from "next-auth/next"

import Navbar from "@/components/Navbar";

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
    {session ? (
      <Navbar user={session?.user} pagetype={"Home"} />
    ): (
      <h1> Please Sign in </h1>
    
    )}
    </>
  );
}
