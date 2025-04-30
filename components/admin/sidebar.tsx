import Link from 'next/link';

export default function AdminSidebar() {
    return (
        <div className="flex flex-col w-64 h-screen bg-gray-900 text-white shadow-lg fixed top-0 left-0">
            <div className="px-6 py-4">
                <h1 className="text-2xl font-bold">БичигAI</h1>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
                <Link href="/admin/home" className="block px-4 py-2 rounded hover:bg-gray-700 transition">Нүүр</Link>
                <Link href="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-700 transition">Хэрэглэгч</Link>
                <Link href="/admin/premium" className="block px-4 py-2 rounded hover:bg-gray-700 transition">Төлбөрт</Link>
            </nav>
        </div>
    );
}
