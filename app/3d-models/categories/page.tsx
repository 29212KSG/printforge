import { getAllCategories } from "@/app/lib/categories"

export default async function CategoryPage() {
    const categories = await getAllCategories()
    return (
        <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-8 text-3xl font-bold">Categories</h1>
            {
                categories.map((category) => (
                    <div key={category.slug} className="mb-4">
                        <h2 className="text-xl font-semibold">{category.displayName}</h2>
                        <p>Slug: {category.slug}</p>
                    </div>
                ))
            }
        </div>
    )
}