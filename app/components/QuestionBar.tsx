'use client'

import { askQuestion } from '@/utils/api'
import { useState } from 'react'

const QuestionBar = () => {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const answer = await askQuestion(value)
    setResponse(answer)
    setLoading(false)
    setValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          disabled={loading}
          type="text"
          placeholder="Ask a question"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-md "
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-rose-500 text-white px-4 py-2 rounded-md text-md ml-2"
        >
          Ask!
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {response && <div>{response}</div>}
    </div>
  )
}

export default QuestionBar
