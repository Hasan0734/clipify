import { AppSidebar } from "@/components/AppSidebar";
import Clipboards from "@/components/Clipboards";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <Navbar />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <Clipboards />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
