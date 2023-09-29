import Editor from '@/app/components/Editor'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id) => {
  const user = await getUserByClerkId()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

/**
 * This works fine, passing down props from a server component to a client one.
 *
 * If it can be stored in our DB it should work, unlike functions.
 */

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id)
  return (
    <div className="h-full w-full">
      <Editor entry={entry} />
    </div>
  )
}

export default EntryPage
