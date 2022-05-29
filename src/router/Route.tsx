import { Route } from "react-location";
import { Top } from "../page/Top/Top";

export const routes: Route[] = [
  {
    path: "/",
    element: <Top />,
  },
  {
    path: "/useTransition",
    element: <div>useTransition</div>
  },
  {
    path: "/useDeferredValue",
    element: <div>useDeferredValue</div>
  },
  {
    path: "/useId",
    element: <div>useId</div>
  }
]
