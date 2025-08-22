import PlanCard from "@/components/PlanCard";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="text-white text-center">
      <h1 className="text-2xl font-bold mb-4">TREBUIE SĂ VEZI ACEST CLIP</h1>

      <div className="mb-6">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/R3BpTtSMcgc"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={() => router.push("/shop")}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded text-lg"
      >
        CUMPĂRĂ ACUM
      </button>
    </div>
  );
}
