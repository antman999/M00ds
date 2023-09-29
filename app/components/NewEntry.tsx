'use client'

import { createNewEntry } from '@/utils/api'
import { useRouter } from 'next/navigation'

const NewEntry = () => {
  const router = useRouter()

  const handleClick = async () => {
    const data = await createNewEntry()
    console.log(data)
    router.push(`/journal/${data.id}`)
  }

  return (
    <div className="cursor-pointer bg-indigo-600 text-white overflow-hidden rounded-lg shadow">
      <div className="px-4 py-5 sm:p-6" onClick={handleClick}>
        <span className="text-4xl">New Note+</span>
      </div>
    </div>
  )
}

export default NewEntry
