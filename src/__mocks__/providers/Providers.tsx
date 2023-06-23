import RouterProvider from "./RouterProvider";
import ReactQueryProvider from "./ReactQueryProvider";

const Providers = ({ children}: { children: React.ReactNode}) => {
  return <ReactQueryProvider>
      <RouterProvider>{children}</RouterProvider>
    </ReactQueryProvider>
};

export default Providers;
