import { uid } from "uid"
import { NavItems, Children } from "./types"

const navItems: NavItems[] = [
  {
    id: uid(4),
    name: 'products',
    withIcon: true,
    path: '/products',
    children: [
      {
        name: 'product1',
        path: '#',
        id: uid(4)
      },
      {
        name: 'product1',
        path: '#',
        id: uid(4)
      }
    ]
  },
  {
    id: uid(4),
    name: 'business',
    withIcon: false,
    path: '/business',
    beta: true,
    status: 'beta'
  },
  {
    id: uid(4),
    name: 'company',
    withIcon: true,
    path: '/company',
    children: [
      {
        name: 'product2',
        path: '#',
        id: uid(4)
      },
      {
        name: 'product2',
        path: '#',
        id: uid(4)
      }
    ]
  },
  {
    id: uid(4),
    name: 'learn',
    withIcon: false,
    path: '/learn',
  },
]
const mapItems: Children[] = [
  {
    name: 'Nigeria',
    path: '#',
    id: uid(4)
  }
]

export {navItems, mapItems}