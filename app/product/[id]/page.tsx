"use client"; 

import { useEffect, useState } from "react";

import Image from "next/image";

// Define the Product type
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

// Component to display product details
const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params; // Extract id from params
  const [product, setProduct] = useState<Product | null>(null);


  // Fetch product details based on the 'id'
  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data: Product) => {
          console.log("Fetched product data:", data);
          setProduct(data);
        })
        .catch((error) => {
          console.log("Error fetching product details:", error);
        });
    }
  }, [id]);

  // Show loading message until product details are available
  if (!product && id) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 mt-8">
      <h1 className="text-[40px] font-bold mb-4">{product?.title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-80 h-80 flex items-center justify-center rounded-md mb-6 mt-8">
          <Image
            src={product?.image || ""}
            alt={product?.title || "Product Image"}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="md:ml-6 mt-8">
          <p className="text-gray-600 font-semibold text-lg mb-4 text-[28px]">
            Category: <span className="text-purple-700">{product?.category}</span>
          </p>
          <p className="text-[#000] font-semibold mb-4">Price: ${product?.price}</p>
          <p className="text-gray-600 max-w-lg">{product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
