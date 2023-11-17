
export default function Home() {
  return (
    <main className="flex min-h-screen items-stretch  justify-between p-6">
      <div className="w-[30%] grow bg-transparent bg-slate-700 bordered">sidebar</div>
      <div className="w-[70%] grow border-1">
        dashboard
      </div>
    </main>
  )
}
