import { Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div className="
      flex flex-col relative
      w-[375px] min-h-screen bg-white shadow-md
      max-[480px]:w-full
    ">
      <Outlet />
    </div>
  );
}
