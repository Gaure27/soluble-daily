import { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setError(true));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-slate-50">
      <h1 className="text-4xl text-slate-900">
        <span className="font-bold">Soluble</span> Daily
      </h1>
      <p className="text-slate-500">Better Food. Healthier You.</p>
      <p className="text-sm text-slate-700">
        API:{' '}
        {error ? '❌ unreachable' : health ? `✅ ${health.status} (db: ${health.db})` : 'checking...'}
      </p>
    </div>
  );
}