import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const links = [
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen md:flex">
      <div className=" flex flex-col sidebar border-r border-zync-600 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Link
          href="/"
          className="text-2xl font-extrabold flex items-center space-x-2 px-4"
        >
          M00ds
        </Link>
        <ul className="grow">
          {links.map((link) => {
            return (
              <li
                key={link.href}
                className="block py-2.5 px-4 rounded transition duration-200 hover:bg-indigo-600 hover:text-white"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
        <div className="mt-auto block py-2.5 px-4 rounded">
          <UserButton showName userProfileMode="navigation" />
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  )
}

export default DashboardLayout
