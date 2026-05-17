const styles = ["Documentary", "Luxury", "Dark cinematic", "Finance", "Tech", "Educational"];

export default function NewProjectPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <h1 className="text-3xl font-bold">Create Video Project</h1>
      <form className="mt-6 grid gap-4 max-w-3xl">
        <input className="bg-zinc-900 p-3 rounded" placeholder="Video Title" />
        <textarea className="bg-zinc-900 p-3 rounded" placeholder="Video Idea" />
        <div className="grid grid-cols-2 gap-4">
          <input className="bg-zinc-900 p-3 rounded" placeholder="Duration (seconds)" />
          <input className="bg-zinc-900 p-3 rounded" placeholder="Language" />
        </div>
        <select className="bg-zinc-900 p-3 rounded">
          {styles.map((s) => <option key={s}>{s}</option>)}
        </select>
        <button className="bg-indigo-600 rounded p-3 font-semibold">Generate</button>
      </form>
    </main>
  );
}
