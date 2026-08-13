import type { CategoryPageProps } from "@/app/types"
import { getCategoryBySlug } from "@/app/lib/categories"

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { categoryName } = await params
    const category = getCategoryBySlug(categoryName)
    console.log(category)
    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">{category.displayName}</h1>
            <p>{category.slug}</p>
        </div>
    )
}