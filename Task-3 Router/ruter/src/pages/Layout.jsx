import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="h-[2rem] w-full bg-red-200">
        <ul className="flex flex-column gap-20">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;