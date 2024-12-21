"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ClientData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-[36px] font-bold mb-4 text-center">Client Side Data Fetching</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product) => (
          <div key={product.id} className="border p-4 shadow-md">
            <div className="w-40 h-40 flex items-center justify-center rounded-md mb-4">
              <Image
                src={product.image} 
                alt={product.title}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <h3 className="font-bold pt-4">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientData;
