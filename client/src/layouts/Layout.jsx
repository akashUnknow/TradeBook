import { Outlet } from "react-router-dom";
import NaviBar from "../components/NaviBar"
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NaviBar />
      <main className="flex-1 p-6">
        <Outlet />  
      </main>
    </div>
  )
}

export default Layout
