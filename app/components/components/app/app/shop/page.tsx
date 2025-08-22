"use client";
import PlanCard from "@/components/PlanCard";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ShopPage() {
  const router = useRouter();
  const [tiktokUsername, setTikTokUsername] = useState("");
  const [coupon, setCoupon] = useState("");

  const handleBuy = (plan: string) => {
    if (plan === "PREMIUM" && tiktokUsername.trim() === "") {
      alert("Te rog să introduci username-ul tău de TikTok pentru planul PREMIUM!");
      return;
    }
    // Aici va fi logica de Stripe Checkout
    alert(`Alegere: ${plan}. Logica de checkout va fi implementată.`);
  };

  return (
    <div className="text-white text-center">
      <h1 className="text-2xl font-bold mb-6">Alege planul tău</h1>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <PlanCard
          title="THE CHANCE"
          price={149}
          oldPrice={349}
          description="7 episoade exclusive prin care vei învăța să faci bani online."
          onClick={() => handleBuy("THE CHANCE")}
        />

        <PlanCard
          title="PREMIUM"
          price={999}
          description="7 episoade + ajutor 1 la 1 de la bun început. Introdu username TikTok."
          onClick={() => handleBuy("PREMIUM")}
        />
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Username TikTok (doar PREMIUM)"
          value={tiktokUsername}
          onChange={(e) => setTikTokUsername(e.target.value)}
          className="p-2 rounded text-black mr-2"
        />
        <input
          type="text"
          placeholder="Cupon reducere (PREMIUM)"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="p-2 rounded text-black"
        />
      </div>
    </div>
  );
}
