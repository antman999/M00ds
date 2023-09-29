import { auth } from '@clerk/nextjs'
import Link from 'next/link'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-2 sm:mx-auto">
        <h1 className="text-5xl mb-4 font-semibold">M00ds</h1>
        <p className="text-2xl mb-4">
          Track how you feel daily with the help of AI and journaling
        </p>
        <div>
          <Link href={href}>
            <button className="bg-indigo-600 px-4 py-2 rounded-md text-lg text-white ">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
