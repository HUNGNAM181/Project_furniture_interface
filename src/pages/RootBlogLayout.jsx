import { Outlet } from "react-router-dom";

function RootBlogLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootBlogLayout;
