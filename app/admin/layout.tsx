import AdminSidebar from "@/components/admin/sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full">
            <div className="w-[15%]">
                <AdminSidebar />
            </div>
            <main className="flex-1 p-8 bg-gray-100 w-[85%]">
                {children}
            </main>
        </div>
    );
} 