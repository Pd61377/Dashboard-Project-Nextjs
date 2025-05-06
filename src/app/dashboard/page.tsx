import SideNav from "../ui/dashboard/sidebar";

export default function Page() {
    return <div className="flex flex-row gap-1 h-screen p-1">
         <div className="flex-none h-screen p-1">
            <SideNav/>
         </div>
         <div className="flex-1 h-screen p-1">
            <p>Dashboard Page</p>
         </div>
        </div>
  }
