import { getAllModels } from "@/app/lib/models"
import { Model } from "@/app/types"

export default async function ModelsPage() {
    const models = await getAllModels()
    return (
        <div>
            {models.map((model: Model) => (<p key={model.id}>{model.name}</p>))}
        </div>
    )
}