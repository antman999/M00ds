'use client'
import { updateEntry } from '@/utils/api'
import React from 'react'
import { useAutosave } from 'react-autosave'
import Spinner from './Spinner'

const Editor = ({ entry }) => {
  const [value, setValue] = React.useState(entry.content)
  const [isSaving, setIsSaving] = React.useState(false)
  const [analysis, setAnalysis] = React.useState(entry.analysis)

  const { mood, summary, color, subject, negative } = analysis
  const moodData = [
    { name: 'Summary', value: summary },
    { name: 'Subject', value: subject },
    { name: 'Mood', value: mood },
    { name: 'Negative', value: negative ? 'True' : 'False' },
  ]

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsSaving(true)
      const data = await updateEntry(entry.id, _value)
      setAnalysis(data.analysis)
      setIsSaving(false)
    },
  })

  return (
    <div className="w-full h-full grid grid-cols-3 gap-0 relative">
      <div className="absolute left-0 top-0 p-2">
        {isSaving ? (
          <Spinner />
        ) : (
          <div className="w-[16px] h-[16px] rounded-full bg-green-500"></div>
        )}
      </div>
      <div className="col-span-2">
        <textarea
          value={value}
          onChange={handleChange}
          className="w-full h-full p-8 text-lg"
        />
      </div>

      <div className="border-l border-zinc-600">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2>Analysis</h2>
        </div>
        <div>
          <ul>
            {moodData.map((item) => {
              return (
                <li
                  className=" px-2 py-4 border-b border-t border-zinc-400/10 flex items-center justify-between"
                  key={item.name}
                >
                  <span className="text-lg font-semibold">{item.name}</span>
                  <span>{item.value}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Editor
