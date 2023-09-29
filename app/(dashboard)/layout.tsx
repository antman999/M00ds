import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/history', label: 'History' },
]

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-zinc-500/40">
        <div>M00ds</div>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.href} className="px-2 py-6 text-lg">
                <Link href={link.href}>{link.label}</Link>
              </li>
            )
          })}
        </ul>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-zinc-500/40">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-full">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
