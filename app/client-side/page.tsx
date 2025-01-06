"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const ClientData: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for products
  const [loading, setLoading] = useState<boolean>(true); // State to track loading

  useEffect(() => {
    // Fetch products
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data); // Set products in state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  // Show spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If products are empty (API returned no data)
  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">No products found!</p>
      </div>
    );
  }

  // Render products
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-[36px] font-bold mb-4 text-center">
        Client Side Data Fetching
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            <h3 className="font-bold pt-6">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
            <Link href={`/product/${product.id}`}>
              <button className="relative mt-4 bg-gradient-to-tl from-blue-500 via-indigo-700 to-purple-700 px-6 py-2 text-white rounded-lg font-semibold text-lg overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform group-hover:scale-y-100 scale-y-0 transition-transform duration-500 origin-bottom z-0"></span>
                <span className="relative z-10">View Details</span>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientData;
