import React from "react";
import Image from "next/image";
import { clientsData } from "@/data/clients";

export default function ClientGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
      {clientsData.map((client) => (
        <div
          key={client.id}
          className="group relative flex items-center justify-center p-3 sm:p-6 bg-white border border-slate-200 rounded-xl transition-all duration-300 hover:border-brand-accent hover:shadow-lg h-20 sm:h-28 shadow-sm"
          title={client.name}
        >
          <div className="relative w-full h-10 sm:h-14 transition-all duration-300 filter grayscale contrast-110 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
