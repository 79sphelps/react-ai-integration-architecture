import { Dashboard } from "../components/dashboard/Dashboard";
import { DemoControls } from "../components/dashboard/DemoControls";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="p-4 border-b bg-white shadow-sm">
        <h1 className="text-xl font-semibold">Observability Dashboard</h1>
        <p className="text-sm text-gray-500">Real-time provider monitoring</p>
      </header>

      <section className="border-b bg-gray-50">
        <DemoControls />
      </section>

      <section className="flex-1">
        <Dashboard />
      </section>
    </main>
  );
}
