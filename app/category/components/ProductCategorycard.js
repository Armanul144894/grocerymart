"use client";

import products from "@/data/products";
import { ChevronRight, Heart, Home, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useMemo } from "react";




export default function ProductCategoryCard() {
    const { id } = useParams(); // ✅ correct param

    console.log(id)
    const slug = id
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const allProducts = products;

    /* ================= LOGIC ================= */



    const filteredProducts = useMemo(() => {
        return allProducts.filter(
            (p) =>
                p.category
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "") === slug
        );
    }, [slug]);

    console.log(filteredProducts)
    /* ================= UI ================= */

    return (
        <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
            {filteredProducts.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all p-4 relative group"
                >
                    <Link
                        href={`/product/${product.name
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        passHref
                    >
                        {product.discount && (
                            <div className="absolute top-2 left-2 z-10">
                                <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                                    -{product.discount}%
                                </div>
                            </div>
                        )}

                        <div className="aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 cursor-pointer">

                            <Image src={product.images[0]}
                                alt={product.name}
                                height={200}
                                width={400}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                            </Image>
                        </div>

                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={12}
                                    className={
                                        i < Math.floor(product.rating)
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300"
                                    }
                                />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                                ({product.rating})
                            </span>
                        </div>

                        <h3 className="font-semibold text-sm mb-1 text-gray-900 line-clamp-2 h-10 cursor-pointer hover:text-red-600">
                            {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 mb-2">
                            {product.brand}
                        </p>

                        <div className="mb-3">
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-red-600">
                                    ৳{product.price}
                                </span>
                                {product.oldPrice && (
                                    <span className="text-xs text-gray-400 line-through">
                                        ৳{product.oldPrice}
                                    </span>
                                )}
                            </div>
                            <div className="text-xs text-green-600 mt-1">
                                In Stock: {product.stock}
                            </div>
                        </div>


                    </Link>
                    <button
                        className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm font-semibold flex items-center justify-center gap-2"
                    >
                        <ShoppingCart size={16} />
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}
