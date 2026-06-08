"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import countryList from "react-select-country-list";

export default function CheckoutPage() {
  const { cart, totalPrice } = useCart();

  const [showCoupon, setShowCoupon] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "United States",
    address1: "",
    address2: "",
    city: "",
    state: "California",
    zip: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState<any>({});

  // HANDLE INPUT CHANGE
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev: any) => ({
      ...prev,
      [name]: "",
    }));
  };

  // VALIDATION
  const validateForm = () => {
    let newErrors: any = {};

    // FIRST NAME
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // LAST NAME
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // ADDRESS
    if (!formData.address1.trim()) {
      newErrors.address1 = "Street address is required";
    }

    // CITY
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    // STATE
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }

    // ZIP
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{4,10}$/.test(formData.zip)) {
      newErrors.zip = "Invalid ZIP code";
    }

    // PHONE
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    // EMAIL
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // SUBMIT
  const submitOrder = async () => {
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ...formData,

          total: totalPrice,

          cartItems: cart
            .map((item) => `${item.name} x${item.quantity}`)
            .join(", "),
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Order placed!");

        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          country: "United States",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          phone: "",
          email: "",
          notes: "",
        });

        setErrors({});
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  // INPUT STYLE
  const inputStyle =
    "w-full h-[42px] bg-[#f1f1f1] text-black px-4 outline-none text-[14px] border";

  const errorInputStyle = "border-red-500 focus:border-red-500";

  const normalInputStyle = "border-transparent focus:border-[#FFD800]";

  return (
    <main className="bg-black min-h-screen text-white pt-35 pb-14">
      <div className="max-w-260 mx-auto px-4">
        {/* PAGE TITLE */}
        <h1 className="text-[24px] font-semibold text-[#8B0000] mb-6">
          Checkout
        </h1>

        {/* COUPON NOTICE */}
        <div className="bg-[#eeeeee] border-t-[3px] border-[#4B00C8] px-4 py-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 border border-[#4B00C8]"></div>

            <p className="text-black text-[14px]">
              Have a coupon?{" "}
              <button
                onClick={() => setShowCoupon(!showCoupon)}
                className="text-[#4B00C8]"
              >
                Click here to enter your code
              </button>
            </p>
          </div>
        </div>

        {/* COUPON BOX */}
        {showCoupon && (
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <input
              type="text"
              placeholder="Coupon code"
              className="w-55 h-10.5 px-4 bg-[#f1f1f1] text-black outline-none text-[14px]"
            />

            <button className="bg-[#FFD800] hover:bg-yellow-400 transition text-[#8B0000] font-semibold px-6 h-10.5 rounded-full text-[14px]">
              Apply coupon
            </button>
          </div>
        )}

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          {/* LEFT */}
          <div>
            {/* BILLING */}
            <h2 className="text-[20px] text-[#8B0000] mb-3">Billing details</h2>

            <div className="border-b border-zinc-700 mb-6"></div>

            {/* NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* FIRST NAME */}
              <div>
                <label className="block text-[#b30000] mb-2 text-[14px]">
                  First name *
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`${inputStyle} ${
                    errors.firstName ? errorInputStyle : normalInputStyle
                  }`}
                />

                {errors.firstName && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* LAST NAME */}
              <div>
                <label className="block text-[#b30000] mb-2 text-[14px]">
                  Last name *
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`${inputStyle} ${
                    errors.lastName ? errorInputStyle : normalInputStyle
                  }`}
                />

                {errors.lastName && (
                  <p className="text-red-500 text-[12px] mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            {/* COMPANY */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Company name (optional)
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`${inputStyle} ${normalInputStyle}`}
              />
            </div>

            {/* COUNTRY */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Country / Region *
              </label>

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`${inputStyle} ${normalInputStyle}`}
              >
                {countryList()
                  .getData()
                  .map((country: { label: string; value: string }) => (
                    <option key={country.value} value={country.label}>
                      {country.label}
                    </option>
                  ))}
              </select>
            </div>

            {/* ADDRESS */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Street address *
              </label>

              <input
                type="text"
                name="address1"
                placeholder="House number and street name"
                value={formData.address1}
                onChange={handleChange}
                className={`${inputStyle} mb-3 ${
                  errors.address1 ? errorInputStyle : normalInputStyle
                }`}
              />

              {errors.address1 && (
                <p className="text-red-500 text-[12px] mb-2">
                  {errors.address1}
                </p>
              )}

              <input
                type="text"
                name="address2"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={formData.address2}
                onChange={handleChange}
                className={`${inputStyle} ${normalInputStyle}`}
              />
            </div>

            {/* CITY */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Town / City *
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.city ? errorInputStyle : normalInputStyle
                }`}
              />

              {errors.city && (
                <p className="text-red-500 text-[12px] mt-1">{errors.city}</p>
              )}
            </div>

            {/* STATE */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                State *
              </label>

              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.state ? errorInputStyle : normalInputStyle
                }`}
              >
                <option value="">Select a state</option>

                <option value="Alabama">Alabama</option>

                <option value="Alaska">Alaska</option>

                <option value="Arizona">Arizona</option>

                <option value="Arkansas">Arkansas</option>

                <option value="California">California</option>

                <option value="Colorado">Colorado</option>

                <option value="Connecticut">Connecticut</option>

                <option value="Delaware">Delaware</option>

                <option value="Florida">Florida</option>

                <option value="Georgia">Georgia</option>

                <option value="Hawaii">Hawaii</option>

                <option value="Idaho">Idaho</option>

                <option value="Illinois">Illinois</option>

                <option value="Indiana">Indiana</option>

                <option value="Iowa">Iowa</option>

                <option value="Kansas">Kansas</option>

                <option value="Kentucky">Kentucky</option>

                <option value="Louisiana">Louisiana</option>

                <option value="Maine">Maine</option>

                <option value="Maryland">Maryland</option>

                <option value="Massachusetts">Massachusetts</option>

                <option value="Michigan">Michigan</option>

                <option value="Minnesota">Minnesota</option>

                <option value="Mississippi">Mississippi</option>

                <option value="Missouri">Missouri</option>

                <option value="Montana">Montana</option>

                <option value="Nebraska">Nebraska</option>

                <option value="Nevada">Nevada</option>

                <option value="New Hampshire">New Hampshire</option>

                <option value="New Jersey">New Jersey</option>

                <option value="New Mexico">New Mexico</option>

                <option value="New York">New York</option>

                <option value="North Carolina">North Carolina</option>

                <option value="North Dakota">North Dakota</option>

                <option value="Ohio">Ohio</option>

                <option value="Oklahoma">Oklahoma</option>

                <option value="Oregon">Oregon</option>

                <option value="Pennsylvania">Pennsylvania</option>

                <option value="Rhode Island">Rhode Island</option>

                <option value="South Carolina">South Carolina</option>

                <option value="South Dakota">South Dakota</option>

                <option value="Tennessee">Tennessee</option>

                <option value="Texas">Texas</option>

                <option value="Utah">Utah</option>

                <option value="Vermont">Vermont</option>

                <option value="Virginia">Virginia</option>

                <option value="Washington">Washington</option>

                <option value="West Virginia">West Virginia</option>

                <option value="Wisconsin">Wisconsin</option>

                <option value="Wyoming">Wyoming</option>
              </select>

              {errors.state && (
                <p className="text-red-500 text-[12px] mt-1">{errors.state}</p>
              )}
            </div>

            {/* ZIP */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                ZIP Code *
              </label>

              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.zip ? errorInputStyle : normalInputStyle
                }`}
              />

              {errors.zip && (
                <p className="text-red-500 text-[12px] mt-1">{errors.zip}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Phone *
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.phone ? errorInputStyle : normalInputStyle
                }`}
              />

              {errors.phone && (
                <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Email address *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${inputStyle} ${
                  errors.email ? errorInputStyle : normalInputStyle
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
              )}
            </div>

            {/* NOTES */}
            <div>
              <label className="block text-[#b30000] mb-2 text-[14px]">
                Order notes (optional)
              </label>

              <textarea
                rows={5}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes about your order..."
                className="w-full bg-[#f1f1f1] text-black px-4 py-3 outline-none resize-none text-[14px] border border-transparent focus:border-[#FFD800]"
              ></textarea>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="border border-zinc-700 p-5 bg-[#050505]">
              <h2 className="text-[20px] text-[#8B0000] mb-6">Your order</h2>

              <div className="space-y-4">
                {cart.map((item) => {
                  const itemTotal =
                    Number(item.price.replace("$", "")) * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="border-b border-zinc-700 pb-4"
                    >
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="text-[14px]">{item.name}</p>

                          <p className="text-[14px] mt-1">× {item.quantity}</p>
                        </div>

                        <p className="text-[14px]">${itemTotal.toFixed(2)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* TOTAL */}
              <div className="flex items-center justify-between border-b border-zinc-700 py-4 mt-4">
                <p className="text-[15px] font-semibold">Total</p>

                <p className="text-[15px] font-semibold">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>

              {/* NOTICE */}
              <div className="bg-[#eeeeee] border-t-[3px] border-[#4B00C8] px-4 py-4 mt-6">
                <div className="flex gap-3">
                  <div className="w-4 h-4 border border-[#4B00C8] mt-1"></div>

                  <p className="text-black text-[13px] leading-5.5">
                    Sorry, it seems that there are no available payment methods.
                    Please contact us if you require assistance or wish to make
                    alternate arrangements.
                  </p>
                </div>
              </div>

              {/* PRIVACY */}
              <p className="text-[13px] leading-5.5 mt-6">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <a href="/privacy-policy" className="text-[#4B00C8]">
                  privacy policy.
                </a>
              </p>

              {/* BUTTON */}
              <button
                onClick={submitOrder}
                className="w-full mt-6 bg-[#FFD800] hover:bg-yellow-400 transition text-[#8B0000] font-semibold h-11.5 rounded-full text-[14px]"
              >
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
