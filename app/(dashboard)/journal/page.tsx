import { prisma } from '@/utils/db'
import { getUserByClerkId } from '@/utils/auth'
import NewEntry from '@/app/components/NewEntry'
import EntryCard from '@/app/components/EntryCard'
import Link from 'next/link'
import { analyze } from '@/utils/ai'
import QuestionBar from '@/app/components/QuestionBar'

const getEntries = async () => {
  const user = await getUserByClerkId()
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },

    orderBy: {
      createdAt: 'desc',
    },
    include: {
      analysis: true,
    },
  })

  return entries
}

const JournalPage = async () => {
  const entries = await getEntries()
  console.log(entries)
  return (
    <div className="p-10">
      <h2 className="text-3xl mb-8">Entries</h2>
      <div className="my-8">
        <QuestionBar />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <NewEntry />
        {entries.map((entry) => {
          return (
            <Link key={entry.id} href={`/journal/${entry.id}`}>
              <EntryCard entry={entry} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default JournalPage
