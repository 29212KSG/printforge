import CategoryNav from "../components/CategoryNav"

export default async function CategoryPageLayout({ children }: { children: React.ReactNode }) {    
    return (
        <div className="relative flex flex-col min-h-screen md:flex-row">
            {/* Responsive Navigation */}
            <CategoryNav />

            {/* Main Content Area */}
            <main className="flex-1 p-4 md:ml-64">{children}</main>
        </div>
    )
}