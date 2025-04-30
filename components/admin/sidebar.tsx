import Link from "next/link";
import MenuIcon from "./menu";
export default function AdminSidebar() {
  return (
    <div className="flex flex-col w-64 h-screen bg-[#07173C] text-white shadow-lg fixed top-0 left-0">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold">БичигAI</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <div className="flex items-center  mb-4 gap-4 block px-4 py-2 rounded hover:bg-gray-700 transition">
          <MenuIcon />
          <Link href="/admin/home" className="text-[20px]">
            Нүүр
          </Link>
        </div>
        <div className="flex items-center  mb-4 gap-4 block px-4 py-2 rounded hover:bg-gray-700 transition">
          <Link
            href="/admin/users"
          >
            Хэрэглэгч
          </Link>
        </div>
        <div className="flex items-center  mb-4 gap-4 block px-4 py-2 rounded hover:bg-gray-700 transition">
          <Link
            href="/admin/premium"
          >
            Төлбөрт
          </Link>
        </div>
      </nav>
    </div>
  );
}
