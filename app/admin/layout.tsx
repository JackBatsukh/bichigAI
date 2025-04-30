import AdminSidebar from "@/components/admin/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-[100%]">
            <div className=" flex w-[15%]">
                <AdminSidebar />
            </div>
            <main className="flex-1 p-8 w-[85%] overflow-y-auto">
                {children}
            </main>
        </div>
    );
} 