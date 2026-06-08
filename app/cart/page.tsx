"use client";

import { useState } from "react";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();
  
  const router = useRouter();

  const [removedItem, setRemovedItem] = useState<any>(null);

  return (
    <main className="bg-black min-h-screen text-white pt-40 pb-20">
      <div className="max-w-287.5 mx-auto px-4">
        
        {/* TITLE */}
        <h1 className="text-[48px] font-semibold text-[#8B0000] mb-10">
          Cart
        </h1>

        {/* REMOVE MESSAGE */}
        {removedItem && (
          <div className="mb-8 bg-[#dcdcdc] border-t-4 border-[#4B00C8] px-6 py-5 flex items-center gap-4">
            
            <div className="w-5 h-5 rounded-full bg-[#4B00C8] flex items-center justify-center text-white text-xs">
              ✓
            </div>

            <p className="text-black text-[20px]">
              “{removedItem.name}” removed.
            </p>

            <button
              onClick={() => {
                addToCart({
                  id: removedItem.id,
                  name: removedItem.name,
                  price: removedItem.price,
                  imageSrc: removedItem.imageSrc,
                  quantity: removedItem.quantity,
                });

                setRemovedItem(null);
              }}
              className="text-[#4B00C8] text-[20px] hover:underline"
            >
              Undo?
            </button>
          </div>
        )}

        {cart.length === 0 ? (
          <div className="border border-zinc-700 p-10 text-center">
            <p className="text-zinc-400 text-lg">
              Your cart is empty
            </p>
          </div>
        ) : (
          <>
            {/* TABLE */}
            <div className="border border-zinc-700 overflow-x-auto">
              
              {/* HEADER */}
              <div className="grid grid-cols-[120px_1fr_180px_180px_180px] bg-[#dcdcdc] text-black font-semibold min-w-250">
                <div className="py-5 px-4"></div>

                <div className="py-5 px-4">
                  Product
                </div>

                <div className="py-5 px-4">
                  Price
                </div>

                <div className="py-5 px-4">
                  Quantity
                </div>

                <div className="py-5 px-4">
                  Subtotal
                </div>
              </div>

              {/* ITEMS */}
              {cart.map((item) => {
                const itemTotal =
                  Number(item.price.replace("$", "")) *
                  item.quantity;

                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-[120px_1fr_180px_180px_180px] items-center border-t border-zinc-700 min-w-250"
                  >
                    {/* IMAGE + REMOVE */}
                    <div className="flex items-center gap-4 px-4 py-6">
                      
                      <button
                        onClick={() => {
                          // STORE ITEM
                          setRemovedItem(item);

                          // REMOVE ITEM
                          removeFromCart(item.id);

                          // AUTO HIDE MESSAGE
                          setTimeout(() => {
                            setRemovedItem(null);
                          }, 5000);
                        }}
                        className="w-7 h-7 rounded-full border border-zinc-500 flex items-center justify-center text-sm hover:bg-zinc-800"
                      >
                        ×
                      </button>

                      <div className="relative w-17.5 h-17.5 bg-white">
                        <Image
                          src={item.imageSrc}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* PRODUCT */}
                    <div className="px-4">
                      <h2 className="text-[20px] text-[#5f00ff]">
                        {item.name}
                      </h2>
                    </div>

                    {/* PRICE */}
                    <div className="px-4 text-[20px] font-semibold">
                      {item.price}
                    </div>

                    {/* QUANTITY */}
                    <div className="px-4">
                      <div className="flex items-center border border-zinc-600 w-fit">
                        
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="w-10 h-10 text-xl border-r border-zinc-600 hover:bg-zinc-800"
                        >
                          -
                        </button>

                        <span className="w-12 flex items-center justify-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="w-10 h-10 text-xl border-l border-zinc-600 hover:bg-zinc-800"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* SUBTOTAL */}
                    <div className="px-4 text-[20px] font-semibold">
                      ${itemTotal.toFixed(2)}
                    </div>
                  </div>
                );
              })}

              {/* COUPON */}
              <div className="flex items-center justify-between gap-5 border-t border-zinc-700 p-4 flex-wrap">
                
                <div className="flex items-center gap-4 flex-wrap">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="w-55 h-12.5 px-4 bg-white text-black outline-none"
                  />

                  <button className="bg-[#FFD800] hover:bg-yellow-400 text-[#8B0000] font-semibold px-8 h-13.75 rounded-full text-[24px] transition">
                    Apply coupon
                  </button>
                </div>

                <button className="bg-[#8a7b00] hover:bg-[#a08f00] text-[#5a0000] font-semibold px-10 h-12.5 rounded-full text-[20px] transition">
                  Update cart
                </button>
              </div>
            </div>

            {/* TOTALS */}
            <div className="flex justify-end mt-14">
              <div className="w-full max-w-130">
                
                <div className="bg-[#dcdcdc] p-6">
                  <h2 className="text-5xl leading-none font-semibold text-[#8B0000]">
                    Cart totals
                  </h2>
                </div>

                <div className="border border-zinc-700 border-t-0">
                  
                  <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-700">
                    <p className="text-lg font-semibold">
                      Subtotal
                    </p>

                    <p className="text-lg font-semibold">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between px-8 py-6">
                    <p className="text-lg font-bold">
                      Total
                    </p>

                    <p className="text-lg font-bold text-white">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* CHECKOUT */}
                <button onClick={() => {router.push("/checkout");}} className="w-full mt-6 bg-[#FFD800] hover:bg-yellow-400 text-[#8B0000] transition h-16.25 text-2xl font-semibold rounded-full">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}