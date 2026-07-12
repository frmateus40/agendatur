import Image from "next/image";
import { TRAVEL_TIPS } from "@/data/tips";

export default function TipsSection() {
  return (
    <section id="tips" className="scroll-mt-24 bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 md:text-4xl">Tips del viajero</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
            Consejos prácticos para que tu viaje sea perfecto de principio a fin.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TRAVEL_TIPS.map((tip) => (
            <article
              key={tip.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden="true">
                    {tip.icon}
                  </span>
                  <h3 className="text-base font-bold text-gray-900">{tip.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{tip.content}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
