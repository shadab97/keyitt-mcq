import Quiz from "@/components/Quiz";
import BorderCard from "@/components/bordered-card";
export default function Home() {
  return (
    <main className="min-h-screen min-w-screen  p-4">
      <BorderCard>
        <h1 className="text-lg font-bold text-center">Quiz App</h1>
      </BorderCard>
      <Quiz />
    </main >
  )
}
