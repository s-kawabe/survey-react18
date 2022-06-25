import { Route } from 'react-location'
import { AutomaticBatching } from '../templates/AutomaticBatching/AutomaticBatching'
import { Top } from '../templates/Top/Top'
import { Promise as PromiseComponent } from '../templates/Promise/Promise'
import { Suspense } from '../templates/Suspense/Suspense'
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
    path: '/promise',
    element: <PromiseComponent />,
  },
  {
    path: '/suspense',
    element: <Suspense />,
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
