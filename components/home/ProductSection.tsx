import Image from "next/image";
import Button from "@/components/ui/Button";

const products = [
  {
    src: "/images/shawnie/product-formula-1.jpeg",
    alt: "Lab formula — single beaker",
    label: "The Formula",
    description: "Precision-crafted treatments developed exclusively for loc care.",
  },
  {
    src: "/images/shawnie/product-formula-2.jpeg",
    alt: "Lab formula — active pour",
    label: "The Process",
    description: "Science-backed application methods for lasting loc health.",
  },
];

export default function ProductSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">
              The Shop
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
              Products from<br />the lab.
            </h2>
          </div>
          <Button variant="outline" href="/shop">
            View All Products
          </Button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.label} className="group cursor-pointer">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-50 mb-5">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase text-black mb-1">
                {product.label}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
