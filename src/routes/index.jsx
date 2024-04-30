import { Navigate, useRoutes } from "react-router-dom";
import Login from '@/views/login/Login.jsx'
import ErrorPage from "@/components/errorpage/error-page";

export const rootRouter = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	{
		path: "*",
		element: <ErrorPage />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;