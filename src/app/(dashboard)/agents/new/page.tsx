import { CreateAgentForm } from "@/components/agents/create-agent-form";

export default function NewAgentPage() {
    return (
        <div className="max-w-2xl">
            <h1 className="mb-8 text-4xl font-bold">
                Create Agent
            </h1>

            <CreateAgentForm />
        </div>
    );
}