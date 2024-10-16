import Main from "@/components/Main";
import MobileSidebar from "@/components/MobileSidebar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <MobileSidebar />
      <Sidebar />
      <Main />
    </div>
  );
}
