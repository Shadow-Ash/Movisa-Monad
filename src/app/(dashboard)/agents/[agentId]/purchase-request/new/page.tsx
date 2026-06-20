import { CreatePurchaseRequestForm } from "@/components/purchase-requests/create-purchase-request-form";

export default async function NewPurchaseRequestPage({
    params,
}: {
    params: Promise<{
        agentId: string;
    }>;
}) {
    const { agentId } =
        await params;

    return (
        <div className="max-w-2xl">
            <h1 className="mb-8 text-4xl font-bold">
                New Purchase Request
            </h1>

            <CreatePurchaseRequestForm
                agentId={agentId}
            />
        </div>
    );
}