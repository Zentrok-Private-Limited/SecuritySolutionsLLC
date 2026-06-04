"use client";

import Image from "next/image";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  return (
    <main className="pt-40 pb-20 bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        <h1 className="text-4xl font-bold mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-zinc-400">
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-8">
              {cart.map((item) => {
                const itemTotal =
                  Number(
                    item.price.replace("$", "")
                  ) * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="border border-zinc-800 p-6 rounded-xl flex flex-col md:flex-row gap-6"
                  >
                    {/* IMAGE */}
                    <div className="relative w-40 h-40 bg-zinc-900 rounded overflow-hidden">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* INFO */}
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold">
                        {item.name}
                      </h2>

                      <p className="text-red-500 text-lg mt-2">
                        {item.price}
                      </p>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-4 mt-6">
                        
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="w-10 h-10 border border-zinc-700 rounded hover:bg-zinc-800"
                        >
                          -
                        </button>

                        <span className="text-lg font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="w-10 h-10 border border-zinc-700 rounded hover:bg-zinc-800"
                        >
                          +
                        </button>
                      </div>

                      {/* SUBTOTAL */}
                      <div className="mt-5">
                        <p className="text-zinc-400">
                          Subtotal:
                        </p>

                        <p className="text-2xl font-bold">
                          $
                          {itemTotal.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* REMOVE */}
                    <div>
                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TOTAL */}
            <div className="mt-16 border-t border-zinc-800 pt-10 flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                Total
              </h2>

              <p className="text-4xl font-bold text-red-500">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}