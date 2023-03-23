import { stylesUtils } from '../utils/styles'
import React from 'react'
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false }
]

const SidebarLayout = (): JSX.Element => {
  return (
    <>
      <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={stylesUtils.classNames(
              item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
              'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
            )}
          >
            <item.icon
              className={stylesUtils.classNames(
                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 h-6 w-6 flex-shrink-0'
              )}
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </nav>
    </>
  )
}

export { SidebarLayout }
