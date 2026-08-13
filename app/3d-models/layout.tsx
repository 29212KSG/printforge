import { getAllCategories } from "@/app/lib/categories"
import Link from "next/link"

export default async function CategoryPageLayout({ children }: { children: React.ReactNode }) {
    const categories = getAllCategories()
    return (
        <div className="container px-4 py-8 mx-auto">
            <Link href="/3d-models"><p>All</p></Link>
            {
                categories.map((category) => (
                    <Link href={`/3d-models/categories/${category.slug}`} key={category.slug} >
                        <p>{category.displayName}</p>
                    </Link>
                ))
            }
            {children}
        </div>
    )
}