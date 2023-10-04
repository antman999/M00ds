const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString()
  return (
    <div className=" h-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="px-4 py-5 sm:px-6">{date}</div>
      <div className="px-4 py-5 sm:p-6">{entry.analysis.summary}</div>
      <div className="px-4 py-4 sm:px-6">{entry.analysis.mood}</div>
    </div>
  )
}

export default EntryCard
