import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

export const FenhiFashionApp = () => {
  return <RouterProvider router={appRouter} />;
};
