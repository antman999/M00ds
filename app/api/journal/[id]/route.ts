import { NextResponse } from 'next/server'
import { getUserByClerkId } from '@/utils/auth'
import { prisma } from '@/utils/db'
import { analyze } from '@/utils/ai'

export const PATCH = async (request: Request, { params }) => {
  const user = await getUserByClerkId()
  const { content } = await request.json()

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },

    data: {
      content,
    },
  })

  const analysis = await analyze(updatedEntry)
  const updated = await prisma.analysis.upsert({
    where: {
      journalEntryId: updatedEntry.id,
    },
    create: {
      userId: user.id,
      journalEntryId: updatedEntry.id,
      ...analysis,
    },

    update: analysis,
  })

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } })
}
