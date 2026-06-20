export default function ArchitecturePage() {
    return (
        <div className="max-w-5xl">
            <h1 className="mb-8 text-4xl font-bold">
                MOVISA Architecture
            </h1>

            <div className="space-y-4 text-lg">
                <div>Agent</div>
                <div>↓</div>

                <div>OWS Wallet</div>
                <div>↓</div>

                <div>Monad USDC Treasury</div>
                <div>↓</div>

                <div>Purchase Request</div>
                <div>↓</div>

                <div>Approval Engine</div>
                <div>↓</div>

                <div>Marqeta Virtual Card</div>
                <div>↓</div>

                <div>Merchant Transaction</div>
            </div>
        </div>
    );
}