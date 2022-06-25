import { Route } from 'react-location'
import { Top } from '../templates/Top/Top'

export const routes: Route[] = [
  {
    path: '/',
    element: <Top />,
  },
  {
    path: '/automaticBatching',
    element: <div />,
  },
  {
    path: '/promise',
    element: <div />,
  },
  {
    path: '/suspense',
    element: <div />,
  },
  {
    path: '/nestedSuspense',
    element: <div />,
  },
  {
    path: '/transition',
    element: <div>startTransition/useTransition</div>,
  },
  {
    path: '/useDeferredValue',
    element: <div>useDeferredValue</div>,
  },
  {
    path: '/useId',
    element: <div>useId</div>,
  },
]
