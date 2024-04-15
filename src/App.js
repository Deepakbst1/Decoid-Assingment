import {
	createBrowserRouter,
	RouterProvider,

} from "react-router-dom";
import Page1 from './pages/page1';
import Page2 from "./pages/page2";
import Register from "./component/register";
import Login from "./component/login";
import Goals from "./pages/goals";
import Tracker from "./pages/tracker";
import Schedule from "./pages/schedule";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Page1 />,
	},
	{
		path: "/page2",
		element: <Page2 />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/goals",
		element: <Goals />,
	},
	{
		path: "/tracker",
		element: <Tracker />,
	},
	{
		path: "/schedule",
		element: <Schedule />,
	}
	
]);

function App() {
  return (
	  <RouterProvider router={router} />
  );
}

export default App;
