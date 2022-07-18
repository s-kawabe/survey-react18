import { Route } from 'react-location'
import { AutomaticBatching } from '../templates/AutomaticBatching/AutomaticBatching'
import { Top } from '../templates/Top/Top'
import { SuspenseDemo } from '../templates/Suspense/Suspense'
import { NestedSuspense } from '../templates/NestedSuspense/NestedSuspense'
import { Transition } from '../templates/Transition/Transition'
import { UseDeferredValue } from '../templates/UseDeferredValue/UseDeferredValue'
import { UseId } from '../templates/UseId/UseId'

export const routes: Route[] = [
  {
    path: '/',
    element: <Top />,
  },
  {
    path: '/automaticBatching',
    element: <AutomaticBatching />,
  },
  {
    path: '/suspense',
    element: <SuspenseDemo />,
  },
  {
    path: '/nestedSuspense',
    element: <NestedSuspense />,
  },
  {
    path: '/transition',
    element: <Transition />,
  },
  {
    path: '/useDeferredValue',
    element: <UseDeferredValue />,
  },
  {
    path: '/useId',
    element: <UseId />,
  },
]
