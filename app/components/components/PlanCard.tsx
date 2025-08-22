import React from "react";

interface PlanCardProps {
  title: string;
  price: number;
  oldPrice?: number;
  description: string;
  onClick: () => void;
}

export default function PlanCard({ title, price, oldPrice, description, onClick }: PlanCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 text-center m-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {oldPrice && <p className="line-through text-gray-400">{oldPrice} lei</p>}
      <p className="text-2xl font-bold mb-4">{price} lei</p>
      <p className="mb-4">{description}</p>
      <button
        onClick={onClick}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        CUMPĂRĂ ACUM
      </button>
    </div>
  );
}
