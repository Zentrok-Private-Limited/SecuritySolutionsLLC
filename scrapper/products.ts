export interface Product {
  id: string;
  name: string;
  price: string;
  partnumber: string;
  sku: string;
  imageSrc: string;
  images: string[];
  description: string;
  features: string[];
}

export interface CategoryData {
  id: string;
  name: string;
  products: Product[];
}

export const categoryProductsData: Record<string, CategoryData> = {
  "ac-compressor": {
    id: "ac-compressor",
    name: "A/C Compressor and Component Kit",
    products: [
      {
        id: "ac-comp-001",
        name: "Carquest Premium A/C Compressor and Component Kit",
        price: "$449.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-5.webp",
        ],
        description:
          "Save time on installation with everything you need in one box for an air conditioning replacement. The Carquest Premium A/C Compressor and Component Kit includes the necessary compressor, accumulator/receiver drier, and orifice tube/expansion valve, along with the necessary O-rings, gaskets, and oil. The parts are manufactured with strict quality standards from Gilmore, a climate control partner to Advance Auto Parts for over 25 years.",
        features: [
          "Complete A/C Repair Kit includes compressor (T198381), accumulator/receiver drier (T83382), expansion device (T39460), refrigerant oil (T59007), and application specific o-rings and gaskets.",
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "Accumulators and receiver driers meet or exceed original equipment standards for moisture absorption, pressure and temperature resistance, air tightness, vibration resistance, corrosiveness, and pulse pressure.",
          "Desiccant is 100% tested and assembled in a controlled environment to ensure performance meets or exceeds original equipment standards.",
          "All accumulators are helium leak tested prior to packaging.",
          "Each orifice tube and expansion valve is tested for function and leakage according to OEM specifications to ensure optimal performance of the air conditioning system.",
          "The specific PAG oil required by your vehicle application is included.",
          "O-rings and gaskets for all parts are application specific and packaged with the correct part to save time and eliminate the possibility of a leak from using the wrong O-ring or gasket.",
        ],
      },
      {
        id: "ac-comp-002",
        name: "Carquest Premium A/C Compressor and Component Kit",
        price: "$420.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-10.webp",
        ],
        description:
          "Save time on installation with everything you need in one box for an air conditioning replacement. The Carquest Premium A/C Compressor and Component Kit includes the necessary compressor, accumulator/receiver drier, and orifice tube/expansion valve, along with the necessary O-rings, gaskets, and oil. The parts are manufactured with strict quality standards from Gilmore, a climate control partner to Advance Auto Parts for over 25 years.",
        features: [
          "Complete A/C Repair Kit includes compressor (T78377), accumulator/receiver drier (T83208), expansion device (T38638), refrigerant oil (T59007), and application specific o-rings and gaskets.",
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "Accumulators and receiver driers meet or exceed original equipment standards for moisture absorption, pressure and temperature resistance, air tightness, vibration resistance, corrosiveness, and pulse pressure.",
          "Desiccant is 100% tested and assembled in a controlled environment to ensure performance meets or exceeds original equipment standards.",
          "All accumulators are helium leak tested prior to packaging.",
          "Each orifice tube and expansion valve is tested for function and leakage according to OEM specifications to ensure optimal performance of the air conditioning system.",
          "The specific PAG oil required by your vehicle application is included.",
          "O-rings and gaskets for all parts are application specific and packaged with the correct part to save time and eliminate the possibility of a leak from using the wrong O-ring or gasket.",
        ],
      },
      {
        id: "ac-comp-003",
        name: "Carquest Premium A/C Compressor, New, with Clutch, with 7SAS18A Compressor",
        price: "$489.49",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-11.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-11.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-14.webp",
        ],
        description:
          "Carquest New Compressors are designed, manufactured and tested to meet or exceed strict original equipment specifications for superior quality and performance. Each new compressor is tested to provide durable life to the vehicle’s air conditioning system. All new compressor components are assembled using state of the art equipment and techniques to ensure smooth operation. Each part is equipped with a clutch and connector that matches the original equipment part and provides an exact replacement to your vehicle’s part. All compressors are supplied with the necessary gaskets and o-rings for installation.",
        features: [
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "O-Rings and gaskets necessary for installation are included.",
        ],
      },
      {
        id: "ac-comp-004",
        name: "Carquest Premium A/C Compressor, New, with Clutch, with 7SBH17 Compressor",
        price: "$419.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-15.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-18.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-19.webp",
        ],
        description:
          "Carquest New Compressors are designed, manufactured and tested to meet or exceed strict original equipment specifications for superior quality and performance. Each new compressor is tested to provide durable life to the vehicle’s air conditioning system. All new compressor components are assembled using state of the art equipment and techniques to ensure smooth operation. Each part is equipped with a clutch and connector that matches the original equipment part and provides an exact replacement to your vehicle’s part. All compressors are supplied with the necessary gaskets and o-rings for installation.",
        features: [
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "O-Rings and gaskets necessary for installation are included.",
        ],
      },
      {
        id: "ac-comp-005",
        name: "Carquest Premium A/C Replacement Kit",
        price: "$499.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-20.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-20.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-22.webp",
        ],
        description:
          "Save time on installation with everything you need in one box for an air conditioning replacement. The Carquest Premium A/C Compressor and Component Kit includes the necessary compressor, accumulator/receiver drier, and orifice tube/expansion valve, along with the necessary O-rings, gaskets, and oil. The parts are manufactured with strict quality standards from Gilmore, a climate control partner to Advance Auto Parts for over 25 years.",
        features: [
          "Complete A/C Repair Kit includes compressor (T158333), accumulator/receiver drier (T83008), expansion device (T39186), refrigerant oil (T59007), and application specific o-rings and gaskets.",
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "Accumulators and receiver driers meet or exceed original equipment standards for moisture absorption, pressure and temperature resistance, air tightness, vibration resistance, corrosiveness, and pulse pressure.",
          "Desiccant is 100% tested and assembled in a controlled environment to ensure performance meets or exceeds original equipment standards.",
          "All accumulators are helium leak tested prior to packaging.",
          "Each orifice tube and expansion valve is tested for function and leakage according to OEM specifications to ensure optimal performance of the air conditioning system.",
          "The specific PAG oil required by your vehicle application is included.",
          "O-rings and gaskets for all parts are application specific and packaged with the correct part to save time and eliminate the possibility of a leak from using the wrong O-ring or gasket.",
        ],
      },
      {
        id: "ac-comp-006",
        name: "Carquest Premium A/C Replacement Kit",
        price: "$499.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-23.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-23.webp",
        ],
        description:
          "Save time on installation with everything you need in one box for an air conditioning replacement. The Carquest Premium A/C Compressor and Component Kit includes the necessary compressor, accumulator/receiver drier, and orifice tube/expansion valve, along with the necessary O-rings, gaskets, and oil. The parts are manufactured with strict quality standards from Gilmore, a climate control partner to Advance Auto Parts for over 25 years.",
        features: [
          "Complete A/C Repair Kit includes compressor (T198381), accumulator/receiver drier (T83382), front expansion device (T39601), rear expansion device (T39512), 2 bottles of refrigerant oil (T59234), and application specific o-rings / gaskets.",
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "Accumulators and receiver driers meet or exceed original equipment standards for moisture absorption, pressure and temperature resistance, air tightness, vibration resistance, corrosiveness, and pulse pressure.",
          "Desiccant is 100% tested and assembled in a controlled environment to ensure performance meets or exceeds original equipment standards.",
          "All accumulators are helium leak tested prior to packaging.",
          "Each orifice tube and expansion valve is tested for function and leakage according to OEM specifications to ensure optimal performance of the air conditioning system.",
          "The specific PAG oil required by your vehicle application is included.",
          "O-rings and gaskets for all parts are application specific and packaged with the correct part to save time and eliminate the possibility of a leak from using the wrong O-ring or gasket.",
        ],
      },
      {
        id: "ac-comp-007",
        name: "Carquest Premium A/C Replacement Kit",
        price: "$399.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-24.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-24.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/ac-compressor-26.webp",
        ],
        description:
          "Save time on installation with everything you need in one box for an air conditioning replacement. The Carquest Premium A/C Compressor and Component Kit includes the necessary compressor, accumulator/receiver drier, and orifice tube/expansion valve, along with the necessary O-rings, gaskets, and oil. The parts are manufactured with strict quality standards from Gilmore, a climate control partner to Advance Auto Parts for over 25 years.",
        features: [
          "Complete A/C Repair Kit includes compressor (T58901), accumulator/receiver drier (T83208), expansion device (T38638), refrigerant oil (T59007), and application specific o-rings and gaskets.",
          "Each new compressor design undergoes rigorous life cycle testing at high RPMs and pressures to ensure that they can withstand years in the harshest conditions.",
          "New compressors are designed with utmost precision using 3D coordinate measuring machines to ensure a perfect fit.",
          "The production process contains automated controls at every stage that alerts and halts production in case of an error, assuring that the finished product will always be flawless.",
          "All new compressors must pass a helium leak test and pump up function test prior to packaging.",
          "Accumulators and receiver driers meet or exceed original equipment standards for moisture absorption, pressure and temperature resistance, air tightness, vibration resistance, corrosiveness, and pulse pressure.",
          "Desiccant is 100% tested and assembled in a controlled environment to ensure performance meets or exceeds original equipment standards.",
          "All accumulators are helium leak tested prior to packaging.",
          "Each orifice tube and expansion valve is tested for function and leakage according to OEM specifications to ensure optimal performance of the air conditioning system.",
          "The specific PAG oil required by your vehicle application is included.",
          "O-rings and gaskets for all parts are application specific and packaged with the correct part to save time and eliminate the possibility of a leak from using the wrong O-ring or gasket.",
        ],
      },
    ],
  },
  "abs-sensor": {
    id: "abs-sensor",
    name: "ABS Wheel Speed Sensor",
    products: [
      {
        id: "abs-sensor-001",
        name: "Carquest Premium ABS sensor",
        price: "$49.99",
        partnumber: "ARC1005",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-1.jpg",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-2.jpg",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-3.jpg",
        ],
        description:
          "Advance Auto Parts is committed to providing high-quality ABS sensors. The entire manufacturing process is closely managed to deliver high quality products.",
        features: [
          "High grade materials that are equal to or better than OE provide durability and long service life",
          "All ABS sensors are tested for proper fit, form, and function",
          "Wire diameter and sheathing same or larger than OE to ensure product quality",
          "Glass filled reinforced plastic for superior resistance to automotive fluids, dirt, salt and road debris",
          "Includes all necessary brackets and hardware",
          "Connector Color: Black",
          "Connector Gender: Female",
          "Connector Shape: Oval",
          "Mounting Hardware Included: No",
          "Terminal Gender: Male",
          "Terminal Quantity: 2",
          "Terminal Type: Pin",
        ],
      },
      {
        id: "abs-sensor-002",
        name: "Carquest Premium ABS sensor",
        price: "$69.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-7.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-9.webp",
        ],
        description:
          "Specifications Connector Color: Black Connector Gender: Female Connector Shape: Square Mounting Hardware Included: No Terminal Gender: Male Terminal Quantity: 2 Terminal Type: Blade",
        features: [
          "High grade materials that are equal to or better than OE provide durability and long service life",
          "All ABS sensors are tested for proper fit, form, and function",
          "Wire diameter and sheathing same or larger than OE to ensure product quality",
          "Glass filled reinforced plastic for superior resistance to automotive fluids, dirt, salt and road debris",
          "Includes all necessary brackets and hardware",
          "Connector Color: Black",
          "Connector Gender: Female",
          "Connector Shape: Square",
          "Mounting Hardware Included: No",
          "Terminal Gender: Male",
          "Terminal Quantity: 2",
          "Terminal Type: Blade",
        ],
      },
      {
        id: "abs-sensor-003",
        name: "Carquest Premium ABS Wheel Speed Sensor",
        price: "$49.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/abs.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/abs.webp",
        ],
        description:
          "Carquest Premium anti-lock brake system (ABS) wheel speed sensors are designed to perform in harsh environments and meet or exceed original equipment (O.E.) specifications. Carquest Premium ABS sensors are built by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Each ABS sensor undergoes extensive validation testing to ensure long-lasting performance and reliability. Carquest Premium ABS sensors are part of our Carquest Vehicle Solutions, which is a full line of engine management and electronics products that help control ignition, fuel delivery and emission systems. Carquest Vehicle Solutions are OE-quality parts designed, engineered and tested by world-class manufacturers to ensure a reliable and long-lasting repair.",
        features: [
          "Connector Color: Black",
          "Connector Gender: Female",
          "Connector Shape: Oblong",
          "Mounting Hardware Included: No",
          "Terminal Gender: Male",
          "Terminal Quantity: 2",
          "Terminal Type: Blade",
        ],
      },
      {
        id: "abs-sensor-004",
        name: "Carquest Premium ABS Wheel Speed Sensor",
        price: "$39.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/abs-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/abs-1.webp",
        ],
        description:
          "Carquest Premium anti-lock brake system (ABS) wheel speed sensors are designed to perform in harsh environments and meet or exceed original equipment (O.E.) specifications. Carquest Premium ABS sensors are built by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Each ABS sensor undergoes extensive validation testing to ensure long-lasting performance and reliability. Carquest Premium ABS sensors are part of our Carquest Vehicle Solutions, which is a full line of engine management and electronics products that help control ignition, fuel delivery and emission systems. Carquest Vehicle Solutions are OE-quality parts designed, engineered and tested by world-class manufacturers to ensure a reliable and long-lasting repair",
        features: [
          "Connector Color: Black",
          "Connector Gender: Female",
          "Connector Shape: Square",
          "Mounting Hardware Included: Yes",
          "Terminal Gender: Male",
          "Terminal Quantity: 2",
          "Terminal Type: Blade",
        ],
      },
      {
        id: "abs-sensor-005",
        name: "Carquest Premium ABS Wheel Speed Sensor",
        price: "$44.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/abs-2.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/abs-2.webp",
        ],
        description:
          "Carquest Premium anti-lock brake system (ABS) wheel speed sensors are designed to perform in harsh environments and meet or exceed original equipment (O.E.) specifications. Carquest Premium ABS sensors are built by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Each ABS sensor undergoes extensive validation testing to ensure long-lasting performance and reliability. Carquest Premium ABS sensors are part of our Carquest Vehicle Solutions, which is a full line of engine management and electronics products that help control ignition, fuel delivery and emission systems. Carquest Vehicle Solutions are OE-quality parts designed, engineered and tested by world-class manufacturers to ensure a reliable and long-lasting repair.",
        features: [
          "Connector Color: Black",
          "Connector Gender: Female",
          "Connector Shape: Oblong",
          "Mounting Hardware Included: Yes",
          "Terminal Gender: Male",
          "Terminal Quantity: 2",
          "Terminal Type: Pin",
        ],
      },
      {
        id: "abs-sensor-006",
        name: "Carquest Premium ABS Wheel Speed Sensor",
        price: "$59.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-10.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-10.webp",
        ],
        description:
          "Carquest Premium anti-lock brake system (ABS) wheel speed sensors are designed to perform in harsh environments and meet or exceed original equipment (O.E.) specifications. Carquest Premium ABS sensors are built by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Each ABS sensor undergoes extensive validation testing to ensure long-lasting performance and reliability. Carquest Premium ABS sensors are part of our Carquest Vehicle Solutions, which is a full line of engine management and electronics products that help control ignition, fuel delivery and emission systems. Carquest Vehicle Solutions are OE-quality parts designed, engineered and tested by world-class manufacturers to ensure a reliable and long-lasting repair.",
        features: [
          "Computer-Aided Design (CAD), laser scanning and 3D printing – utilizing Fused Deposition Modeling (FDM) and Stereolithography (SLA) – in the part design process ensures speed-to-market and a precise fit guaranteed.",
          "O-rings or seals are included (where applicable)",
          "Weather-tight connectors prevent leaks and corrosion for longer life",
          "Includes all necessary brackets and grommets for easier installation",
          "Extensive design validation testing and 100% end-of-line tested",
          "Fluorocarbon high-temperature o-ring seals coated with lubricant for easy installation prevents hub contamination.",
          "Carquest Vehicle Solutions Technical Support available from ASE certified technicians: 1-866-687-5413",
        ],
      },
      {
        id: "abs-sensor-007",
        name: "Carquest Premium ABS Wheel Speed Sensor",
        price: "$22.99",
        partnumber: "ARA1038",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-11.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-11.webp",
        ],
        description:
          "Carquest Premium anti-lock brake system (ABS) wheel speed sensors are designed to perform in harsh environments and meet or exceed original equipment (O.E.) specifications. Carquest Premium ABS sensors are built by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Each ABS sensor undergoes extensive validation testing to ensure long-lasting performance and reliability. Carquest Premium ABS sensors are part of our Carquest Vehicle Solutions, which is a full line of engine management and electronics products that help control ignition, fuel delivery and emission systems. Carquest Vehicle Solutions are OE-quality parts designed, engineered and tested by world-class manufacturers to ensure a reliable and long-lasting repair.",
        features: [
          "Connector Color: Black",
          "Connector Gender: Female",
          "Connector Shape: Square",
          "Mounting Hardware Included: No",
          "Terminal Gender: Male",
          "Terminal Quantity: 2",
          "Terminal Type: Blade",
        ],
      },
      {
        id: "abs-sensor-008",
        name: "NTK ABS Wheel Speed Sensor",
        price: "$49.99",
        partnumber: "AB2048",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-4.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sensor-abs-6.webp",
        ],
        description:
          "The ABS or Anti-Lock Brake System ECU monitors the Wheel Speed Sensors rotational speed for anti-lock brake function, stability control and traction control. The ABS sensors report the speed of all four wheels to the ECU to determine if the wheels are locking up and to help provide safer stopping. Reasons for replacement include: ABS/brake lamp illumination, no or erratic ABS operation or problems with stability and or traction control systems.",
        features: [
          "OE MATCHED: Manufactured to OE performance standards. Connectors, mounts and wire lengths are exact match to OE for worry free installation.",
          "INSTALLATION AND SUPPORT: Includes all necessary brackets and hardware. Application specific harness length",
          "THE DIFFERENCE: Glass reinforced plastic for better contamination resistance. Weather pack connectors prevent dirt and moisture contamination. Grease, mounting nut and instruction sheet included where applicable.",
        ],
      },
    ],
  },
  alternator: {
    id: "alternator",
    name: "Alternator",
    products: [
      {
        id: "alternator-001",
        name: "Carquest Standard Alternator: Remanufactured, 100 Amps, 1 Year Limited Warranty",
        price: "$149.99",
        partnumber: "8283AV",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-36-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-36-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-37.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-38.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-39.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 100.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: ",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-002",
        name: "Carquest Standard Alternator: Remanufactured, 102 Amps, 1 Year Limited Warranty (32 reviews)",
        price: "$109.99",
        partnumber: "8234605AV",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-20.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-20.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-22.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-23.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 102.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 4",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-003",
        name: "Carquest Standard Alternator: Remanufactured, 105 Amps, 1 Year Limited Warranty",
        price: "$224.99",
        partnumber: "8247AV",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-24.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-24.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-26.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-27.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 105.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 11",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-004",
        name: "Carquest Standard Alternator: Remanufactured, 105 Amps, 1 Year Limited Warranty",
        price: "$199.99",
        partnumber: "8206-5AV",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-28.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-28.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-29.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-30.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-31.jpg",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 105.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 5",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-005",
        name: "Carquest Standard Alternator: Remanufactured, 110 Amps, 1 Year Limited Warranty",
        price: "$184.99",
        partnumber: "13980AV",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-3.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 110.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Ford",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 10",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 7",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-006",
        name: "Carquest Standard Alternator: Remanufactured, 110 Amps, 1 Year Limited Warranty",
        price: "$224.99",
        partnumber: "8318AV",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-16.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-18.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-19.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 110.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Ford",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 10",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 7",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-007",
        name: "Carquest Standard Alternator: Remanufactured, 145 Amps, 1 Year Limited Warranty",
        price: "$220.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-4.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-7.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 145.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 3",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-008",
        name: "Carquest Standard Alternator: Remanufactured, 60 Amps, 1 Year Limited Warranty",
        price: "$109.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-44.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-44.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-45.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-46.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-47.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 60.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Ford",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 8",
          "Pulley Belt Type: V-Belt",
          "Pulley Groove Quantity: 1",
          "Pulley Included: Yes",
          "Regulator Type: EXternal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-009",
        name: "Carquest Standard Alternator: Remanufactured, 63 Amps, 1 Year Limited Warranty",
        price: "$99.99",
        partnumber: "7127-3AV",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-8.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-11.webp",
        ],
        description:
          "Specifications Amperage Rating: 63.0 A Decoupled Or Clutch Pulley: No Family: Delco Fan Type: External Plug Clock Rear View Main Mounting Ear at 6 O Clock: 3 Pulley Belt Type: V-Belt Pulley Groove Quantity: 1 Pulley Included: Yes Regulator Type: Internal Rotation Direction: Clockwise (Right) Voltage: 12.0 VDC",
        features: [
          "Designed to meet OE specifications for fit, form and function",
          "Remanufactured by an IATF/TS 16949 supplier that meets or exceeds the highest standards in the industry",
          "Application-specific technical bulletins included where applicable",
          "All units are 100% triple tested to ensure quality and performance",
          "Technical support team staffed with ASE Certified Technicians: 1-800-228-9672",
          "Amperage Rating: 63.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: External",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 3",
          "Pulley Belt Type: V-Belt",
          "Pulley Groove Quantity: 1",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-010",
        name: "Carquest Standard Alternator: Remanufactured, 90 Amps, 1 Year Limited Warranty",
        price: "$140.99",
        partnumber: " 13341AV",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-33.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-33.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-34.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-35.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-36.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 90.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Nippondenso",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 1",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: External",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-011",
        name: "Carquest Standard Alternator: Remanufactured, 95 Amps, 1 Year Limited Warranty",
        price: "$179.99",
        partnumber: "7759AV",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-12.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-14.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-15.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 95.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Ford",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 2",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
      {
        id: "alternator-012",
        name: "Product main large Carquest Standard Alternator: Remanufactured, 150 Amps, 1 Year Limited Warranty",
        price: "$220.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-40.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-40.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-41.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-42.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/Alternator-43.webp",
        ],
        description:
          "Carquest Standard alternators are designed and built to meet original equipment (O.E.) specifications, while providing great value. Our alternators are remanufactured by an IATF/TS 16949 certified supplier that meets the highest standards achievable. All of our Carquest Standard alternators are inspected and 100% tested to ensure they are built to meet OEM fit, form and function. We also offer technical support at 1-800-228-9672 for product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians.",
        features: [
          "Amperage Rating: 150.0 A",
          "Decoupled Or Clutch Pulley: No",
          "Family: Delco",
          "Fan Type: Internal",
          "Plug Clock Rear View Main Mounting Ear at 6 O Clock: 4",
          "Pulley Belt Type: Serpentine",
          "Pulley Groove Quantity: 6",
          "Pulley Included: Yes",
          "Regulator Type: Internal",
          "Rotation Direction: Clockwise (Right)",
          "Voltage: 12.0 VDC",
        ],
      },
    ],
  },
  battery: {
    id: "battery",
    name: "Battery",
    products: [
      {
        id: "battery-001",
        name: "DieHard Gold Battery : 124R Group Size, 700 CCA, 875 CA, 120 Minute Reserve Capacity",
        price: "$319.00",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. 124R-2 Warranty Details (3 YR FREE REPLACEMENT) DieHard Gold batteries are engineered for maximum starting power in any climate. That means you can relax knowing you will get your car started, even on the coldest or hottest of days. DieHard Gold automotive batteries meet or exceed the manufacturers power (CCA) and reserve capacity requirements for your vehicle, ensuring you get the power you need for a quick start every time. DieHard Gold batteries are engineered with Stamped Grid technology, which is a stronger and more durable positive grid. If you are looking for more power, upgrade to the DieHard Platinum. Don’t want to bother with installing your new DieHard battery – Stop by your nearest Advance Auto Parts store and take advantage of our FREE battery testing and installation on most vehicles and at most locations. We offer free battery and electrical system testing and free recycling of your old automotive battery. Order your DieHard vehicle battery replacement today. Enjoy reliable starting power with no maintenance every season. Product Features: Made for conventional vehicles with low electrical demands and accessories. Made for conventional vehicles with low electrical demands and accessories. Maximum starting power and reliability with increased battery lifespan. Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements. Maintenance free for maximum convenience. Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs. Our stamped grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods. For vehicles with increased electrical load, upgrade to a DieHard Platinum AGM Battery",
        features: [
          "Made for conventional vehicles with low electrical demands and accessories.",
          "Made for conventional vehicles with low electrical demands and accessories.",
          "Maximum starting power and reliability with increased battery lifespan.",
          "Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements.",
          "Maintenance free for maximum convenience.",
          "Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs.",
          "Our stamped grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods.",
          "For vehicles with increased electrical load, upgrade to a DieHard Platinum AGM Battery",
        ],
      },
      {
        id: "battery-002",
        name: "DieHard Gold Battery : H6 Group Size, 750 CCA, 935 CA, 115 Minute Reserve Capacity",
        price: "$309.00",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold3.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. 48H6 Warranty Details (3 YR FREE REPLACEMENT) DieHard Gold batteries are engineered for maximum starting power in any climate. That means you can relax knowing you will get your car started, even on the coldest or hottest of days. DieHard Gold automotive batteries meet or exceed the manufacturers power (CCA) and reserve capacity requirements for your vehicle, ensuring you get the power you need for a quick start every time. DieHard Gold batteries are engineered with Stamped Grid technology, which is a stronger and more durable positive grid. If you are looking for more power, upgrade to the DieHard Platinum. Don’t want to bother with installing your new DieHard battery – Stop by your nearest Advance Auto Parts store and take advantage of our FREE battery testing and installation on most vehicles and at most locations. We offer free battery and electrical system testing and free recycling of your old automotive battery. Order your DieHard vehicle battery replacement today. Enjoy reliable starting power with no maintenance every season. Product Features: Made for conventional vehicles with low electrical demands and accessories. Maximum starting power and reliability with increased battery lifespan. Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements. Maintenance free for maximum convenience. Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs. Our stamped grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods. For vehicles with increased electrical load, upgrade to a DieHard Platinum AGM Battery",
        features: [
          "Made for conventional vehicles with low electrical demands and accessories.",
          "Maximum starting power and reliability with increased battery lifespan.",
          "Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements.",
          "Maintenance free for maximum convenience.",
          "Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs.",
          "Our stamped grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods.",
          "For vehicles with increased electrical load, upgrade to a DieHard Platinum AGM Battery",
        ],
      },
      {
        id: "battery-003",
        name: "DieHard Gold Battery: 65 Group Size, 850 CCA, 1060 CA, 150 Minute Reserve Capacity",
        price: "$319.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-gold-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. 65-2 Warranty Details (3 YR REPLACEMENT IF DEFECTIVE) DieHard Gold batteries are engineered for maximum starting power in any climate. That means you can relax knowing you will get your car started, even on the coldest or hottest of days. DieHard Gold automotive batteries meet or exceed the manufacturers power (CCA) and reserve capacity requirements for your vehicle, ensuring you get the power you need for a quick start every time. If you are looking for more power, upgrade to the DieHard Platinum. Donft.t want to bother with installing your new DieHard battery – Stop by your nearest Advance Auto Parts store and take advantage of our FREE battery testing and installation on most vehicles and at most locations. We offer free battery and electrical system testing and free recycling of your old automotive battery. Order your DieHard vehicle battery replacement today. Enjoy reliable starting power with no maintenance every season. Product Features: Ideal for conventional vehicles with standard electrical demands and accessories LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability Maximum starting power and reliability with increased battery lifespan Maintenance free for maximum convenience For vehicles with increased electrical load, upgrade to a DieHard Enhanced Flooded or Platinum AGM Battery",
        features: [
          "Ideal for conventional vehicles with standard electrical demands and accessories",
          "LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability",
          "Maximum starting power and reliability with increased battery lifespan",
          "Maintenance free for maximum convenience",
          "For vehicles with increased electrical load, upgrade to a DieHard Enhanced Flooded or Platinum AGM Battery",
        ],
      },
      {
        id: "battery-004",
        name: "DieHard Platinum AGM Battery : H7 Group Size, 850 CCA, 1000 CA, 140 Minute Reserve Capacity",
        price: "$449.00",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. H7-AGM Warranty Details (4 YR REPLACEMENT IF DEFECTIVE) DieHard Platinum AGM (Absorbent Glass Mat) batteries are specifically designed for today’s power hungry vehicles. DieHard Platinum AGM batteries are engineered to provide up to 2x the life vs. a standard flooded battery. This battery is ideal for vehicles with start-stop technology or high demand electrical accessories (back-up cameras, heated seats, navigation, plug-in accessories) which put a heavier load on the battery. DieHard Platinum AGM batteries are engineered with Stamped Grid technology, which features a stronger and more durable positive and negative grid design. Order your DieHard vehicle battery replacement today. Enjoy reliable starting power with no maintenance every season. Product Features: AGM technology supports high power demands and accessories or newer vehicles with start-stop technology. Up to 2X longer lifespan compared to standard flooded batteries. Exceptional performance in high temperature climates. Superior starting power in cold weather conditions. Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements with added AGM technology. Maintenance free with a non-spillable design allows for installation in any location, including inside passenger compartment. Higher level of vibration resistance compared to standard flooded batteries. Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs. Our Stamped Grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods",
        features: [
          "AGM technology supports high power demands and accessories or newer vehicles with start-stop technology.",
          "Up to 2X longer lifespan compared to standard flooded batteries.",
          "Exceptional performance in high temperature climates.",
          "Superior starting power in cold weather conditions.",
          "Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements with added AGM technology.",
          "Maintenance free with a non-spillable design allows for installation in any location, including inside passenger compartment.",
          "Higher level of vibration resistance compared to standard flooded batteries.",
          "Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs.",
          "Our Stamped Grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods",
        ],
      },
      {
        id: "battery-005",
        name: "DieHard Platinum AGM Battery : H7 Group Size, 850 CCA, 1000 CA, 140 Minute Reserve Capacity",
        price: "$429.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-11.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-11.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. H7-AGM Warranty Details (4 YR REPLACEMENT IF DEFECTIVE) DieHard Platinum AGM (Absorbent Glass Mat) batteries are specifically designed for today’s power hungry vehicles. DieHard Platinum AGM batteries are engineered to provide up to 2x the life vs. a standard flooded battery. This battery is ideal for vehicles with start-stop technology or high demand electrical accessories (back-up cameras, heated seats, navigation, plug-in accessories) which put a heavier load on the battery. DieHard Platinum AGM batteries are engineered with Stamped Grid technology, which features a stronger and more durable positive and negative grid design. Order your DieHard vehicle battery replacement today. Enjoy reliable starting power with no maintenance every season. Product Features: AGM technology supports high power demands and accessories or newer vehicles with start-stop technology. Up to 2X longer lifespan compared to standard flooded batteries. Exceptional performance in high temperature climates. Superior starting power in cold weather conditions. Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements with added AGM technology. Maintenance free with a non-spillable design allows for installation in any location, including inside passenger compartment. Higher level of vibration resistance compared to standard flooded batteries. Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs. Our Stamped Grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods",
        features: [
          "AGM technology supports high power demands and accessories or newer vehicles with start-stop technology.",
          "Up to 2X longer lifespan compared to standard flooded batteries.",
          "Exceptional performance in high temperature climates.",
          "Superior starting power in cold weather conditions.",
          "Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements with added AGM technology.",
          "Maintenance free with a non-spillable design allows for installation in any location, including inside passenger compartment.",
          "Higher level of vibration resistance compared to standard flooded batteries.",
          "Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs.",
          "Our Stamped Grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods",
        ],
      },
      {
        id: "battery-006",
        name: "DieHard Platinum AGM Battery : H8 Group Size, 900 CCA, 1000 CA, 160 Minute Reserve Capacity",
        price: "$429.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-14.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-14.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. H8-AGM Warranty Details (4 YR REPLACEMENT IF DEFECTIVE) DieHard Platinum AGM (Absorbent Glass Mat) batteries are specifically designed for today’s power hungry vehicles. DieHard Platinum AGM batteries are engineered to provide up to 2x the life vs. a standard flooded battery. This battery is ideal for vehicles with start-stop technology or high demand electrical accessories (back-up cameras, heated seats, navigation, plug-in accessories) which put a heavier load on the battery. DieHard Platinum AGM batteries are engineered with Stamped Grid technology, which features a stronger and more durable positive and negative grid design. Order your DieHard vehicle battery replacement today. Enjoy reliable starting power with no maintenance every season. Product Features: AGM technology supports high power demands and accessories or newer vehicles with start-stop technology. Up to 2X longer lifespan compared to standard flooded batteries. Exceptional performance in high temperature climates. Superior starting power in cold weather conditions. Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements with added AGM technology. Maintenance free with a non-spillable design allows for installation in any location, including inside passenger compartment. Higher level of vibration resistance compared to standard flooded batteries. Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs. Our Stamped Grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods",
        features: [
          "AGM technology supports high power demands and accessories or newer vehicles with start-stop technology.",
          "Up to 2X longer lifespan compared to standard flooded batteries.",
          "Exceptional performance in high temperature climates.",
          "Superior starting power in cold weather conditions.",
          "Exceeds the vehicle manufacturer’s battery starting and reserve capacity power requirements with added AGM technology.",
          "Maintenance free with a non-spillable design allows for installation in any location, including inside passenger compartment.",
          "Higher level of vibration resistance compared to standard flooded batteries.",
          "Constructed with stamped grid technology for 3X more corrosion resistance, increased durability and full grid utilization for 60% more electrical flow compared to other grid designs.",
          "Our Stamped Grid manufacturing process uses 20% less energy and releases 20% fewer greenhouse gas emissions than other manufacturing methods",
        ],
      },
      {
        id: "battery-007",
        name: "Diehard Platinum Enhanced Flooded Battery: 24F Group Size, 750 CCA, 130 Minute Reserve Capacity",
        price: "$399.00",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum5.webp",
        ],
        description:
          "Part No. 24F-EFB Warranty Details (4 YR REPLACEMENT IF DEFECTIVE) Built to withstand the increased electrical demands of today’s vehicles including Start-Stop and hybrid technology. Product Features: Reinforced pasting provides added plate protection for 2x the cycle life of a competing flooded battery SureLife graphite technology provides greater dynamic charge acceptance by strengthening and maintaining charge pathways for faster recharge. LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability. 95% of EFB materials come from recycled sources and our superior power for Star-Stop technology is helping lower emissions",
        features: [
          "Reinforced pasting provides added plate protection for 2x the cycle life of a competing flooded battery",
          "SureLife graphite technology provides greater dynamic charge acceptance by strengthening and maintaining charge pathways for faster recharge.",
          "LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability.",
          "95% of EFB materials come from recycled sources and our superior power for Star-Stop technology is helping lower emissions",
        ],
      },
      {
        id: "battery-008",
        name: "Diehard Platinum Enhanced Flooded Battery: 35 Group Size, 620 CCA, 105 Minute Reserve Capacity",
        price: "$399.00",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. 35-EFB Warranty Details (4 YR REPLACEMENT IF DEFECTIVE) Built to withstand the increased electrical demands of today’s vehicles including Start-Stop and hybrid technology Product Features: Reinforced pasting provides added plate protection for 2x the cycle life of a competing flooded battery SureLife graphite technology provides greater dynamic charge acceptance by strengthening and maintaining charge pathways for faster recharge. LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability. 95% of EFB materials come from recycled sources and our superior power for Start-Stop technology is helping lower emissions",
        features: [
          "Reinforced pasting provides added plate protection for 2x the cycle life of a competing flooded battery",
          "SureLife graphite technology provides greater dynamic charge acceptance by strengthening and maintaining charge pathways for faster recharge.",
          "LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability.",
          "95% of EFB materials come from recycled sources and our superior power for Start-Stop technology is helping lower emissions",
        ],
      },
      {
        id: "battery-009",
        name: "Diehard Platinum Enhanced Flooded Battery: H5 Group Size, 650 CCA, 110 Minute Reserve Capacity",
        price: "$399.00",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery-platinum2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/03/diehard-battery.webp",
        ],
        description:
          "Part No. H5-EFB Warranty Details (4 YR REPLACEMENT IF DEFECTIVE) Built to withstand the increased electrical demands of today’s vehicles including Start-Stop and hybrid technology. Reinforced pasting provides added plate protection for 2x the cycle life of a competing flooded battery SureLife graphite technology provides greater dynamic charge acceptance by strengthening and maintaining charge pathways for faster recharge. LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability. 95% of EFB materials come from recycled sources and our superior power for Start-Stop technology is helping lower emissions",
        features: [
          "Reinforced pasting provides added plate protection for 2x the cycle life of a competing flooded battery",
          "SureLife graphite technology provides greater dynamic charge acceptance by strengthening and maintaining charge pathways for faster recharge.",
          "LifeGrid Technology calcium/lead alloy punched-grid plates that provide maintenance-free performance, consistent power and enhanced durability.",
          "95% of EFB materials come from recycled sources and our superior power for Start-Stop technology is helping lower emissions",
        ],
      },
    ],
  },
  "battery-charger": {
    id: "battery-charger",
    name: "Battery Charger",
    products: [
      {
        id: "battery-charger-001",
        name: "Battery Tender Battery Tender 12V Battery Charger, 1 AMP Selectable Lead Acid/Lithium",
        price: "$49.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-8.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-11.webp",
        ],
        description:
          "Specifications 6 Volt Compatible: No AGM Compatible: Yes Battery Cables Length: 10.8 ft Body Color: Black Cable Gauge: 18 AWG Carry Handle: No Charging Configuration: Automatic Cooling Fan: No Gel Cell Type Compatible: Yes Height: 2.9 in Length: 4.4 in Lithium Compatible: Yes Maximum Amperage: 1 A Onboard Mounting: No Rolling: No Voltage: 12 VAC Width: 2.15 in",
        features: [],
      },
      {
        id: "battery-charger-002",
        name: "Battery Tender Battery Tender 6V/12V, 3A Selectable Battery Charger",
        price: "$69.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-4.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-7.webp",
        ],
        description:
          "Specifications 6 Volt Compatible: Yes AGM Compatible: Yes Battery Cables Length: 5 ft Body Color: Black Cable Gauge: 18 AWG Carry Handle: No Charging Configuration: Automatic Cooling Fan: No Deep Cycle Compatible: Yes Gel Cell Type Compatible: Yes Height: 8.3 in Length: 3.86 in Lithium Compatible: Yes Maximum Amperage: 3 A Onboard Mounting: Yes Power Cord Length: 6.1 ft Resistant To: Water Rolling: No Voltage: 12 VAC Width: 1.87 in",
        features: [],
      },
      {
        id: "battery-charger-003",
        name: "DieHard 2-in-1 6-Volt/12-Volt 2-Amp Battery Charger and Maintainer, Fully Automatic",
        price: "$47.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-29.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-29.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-30.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-32.webp",
        ],
        description:
          "Product Features: 2-IN-1 DEVICE: Battery charger and maintainer CHARGE AND MAINTAIN: The DH0159 features a 2-amp 6-volt/12-volt charge/maintain rate FULLY AUTOMATIC: The DH0159 is a fully automatic charger with advanced features including auto voltage detection and multi-stage charging FOR MANY VEHICLES: The DH0159 can be used with ATVs, cars, boats, personal watercraft, farm equipment, motorcycles, and many other vehicles QUICK-CONNECT HARNESS: The quick-connect harness lets users use a clamp adapter, ring adapter, or 12-volt accessory plug BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt AGM, gel, standard lead-acid, and lithium (LiFEPO4) batteries REVERSE HOOK-UP PROTECTION: The DH0159 will not operate if the clamps are reversed, preventing damage to your vehicle’s battery AUTO VOLTAGE DETECTION: The DH0159’s microprocessor automatically detects connected 6-volt and 12-volt batteries MULTI-STAGE CHARGING: An advanced charging algorithm optimizes a connected battery’s charge, health, and longevity FLOAT MODE MONITORING: In float mode, the charger and maintainer delivers a trickle of current when needed to keep a connected battery fully charged IN THE BOX: DieHard DH0159 Battery Charger and Maintainer, battery clamp adapter, permanent ring adapter, 12-volt DC accessory plug, and user manual",
        features: [
          "2-IN-1 DEVICE: Battery charger and maintainer",
          "CHARGE AND MAINTAIN: The DH0159 features a 2-amp 6-volt/12-volt charge/maintain rate",
          "FULLY AUTOMATIC: The DH0159 is a fully automatic charger with advanced features including auto voltage detection and multi-stage charging",
          "FOR MANY VEHICLES: The DH0159 can be used with ATVs, cars, boats, personal watercraft, farm equipment, motorcycles, and many other vehicles",
          "QUICK-CONNECT HARNESS: The quick-connect harness lets users use a clamp adapter, ring adapter, or 12-volt accessory plug",
          "BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt AGM, gel, standard lead-acid, and lithium (LiFEPO4) batteries",
          "REVERSE HOOK-UP PROTECTION: The DH0159 will not operate if the clamps are reversed, preventing damage to your vehicle’s battery",
          "AUTO VOLTAGE DETECTION: The DH0159’s microprocessor automatically detects connected 6-volt and 12-volt batteries",
          "MULTI-STAGE CHARGING: An advanced charging algorithm optimizes a connected battery’s charge, health, and longevity",
          "FLOAT MODE MONITORING: In float mode, the charger and maintainer delivers a trickle of current when needed to keep a connected battery fully charged",
          "IN THE BOX: DieHard DH0159 Battery Charger and Maintainer, battery clamp adapter, permanent ring adapter, 12-volt DC accessory plug, and user manual",
        ],
      },
      {
        id: "battery-charger-004",
        name: "DieHard 3-in-1 6-Volt/12-Volt 3-Amp Battery Charger and Maintainer: Digital Display",
        price: "$69.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-3.webp",
        ],
        description:
          "Product Features: 3-IN-1 DEVICE: Battery charger, battery maintainer, and desulfator CHARGE AND MAINTAIN: The DH0160 features 3-amp 12-volt charge and 2-amp 6-volt charge rates SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts FULLY AUTOMATIC: The DH0160 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries HOOK ATTACHMENT: The hook attachment allows you to hang the charger outside of your workspace for added safety and convenience QUICK CONNECT: Quick-connect clamps and ring adapters lets you connect the charger in seconds IN THE BOX: DieHard 6-Volt/12-Volt 3-Amp Battery Charger and Maintainer, spark-resistant smart clamps, ring adapter, 12V accessory plug, and user manual",
        features: [
          "3-IN-1 DEVICE: Battery charger, battery maintainer, and desulfator",
          "CHARGE AND MAINTAIN: The DH0160 features 3-amp 12-volt charge and 2-amp 6-volt charge rates",
          "SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts",
          "FULLY AUTOMATIC: The DH0160 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more",
          "BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries",
          "HOOK ATTACHMENT: The hook attachment allows you to hang the charger outside of your workspace for added safety and convenience",
          "QUICK CONNECT: Quick-connect clamps and ring adapters lets you connect the charger in seconds",
          "IN THE BOX: DieHard 6-Volt/12-Volt 3-Amp Battery Charger and Maintainer, spark-resistant smart clamps, ring adapter, 12V accessory plug, and user manual",
        ],
      },
      {
        id: "battery-charger-005",
        name: "DieHard Gold 2-in-1 12V Manual Wheeled 6A Battery Charger and 200A Engine Starter: 40A Boost",
        price: "$199.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-24.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-24.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-26.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-27.webp",
        ],
        description:
          "Product Features: 2-IN-1 DEVICE: Battery charger and engine starter POWERFUL JUMP START: The DH0168 delivers 200-amp 12-volt jump starts, powerful enough for larger engines BOOST MODE: A 40-amp boost mode quickly restores charge to depleted batteries CHARGING: The DH0168 features a 6-amp charge rate MANUAL OPERATION: The DH0168 gives you complete control of the charging process with a 135-minute timer and a charge rate selector switch BATTERY TYPES: The charger/maintainer is compatible with 12-volt standard, AGM, gel, and deep-cycle batteries AMMETER: The ammeter indicates the amount of current (amps) that is being drawn by the battery and indicates when charging is complete STORES NEATLY: A retractable handle and compact wheels allow you to easily store the DH0168 when it is not in use EFFICIENT POWER TRANSFER: Heavy-duty clamps and 8-gauge booster cables with a 12-foot total reach feature superior power transfer IN THE BOX: DieHard 2-in-1 12-Volt Manual Wheeled 6-Amp Battery Charger and 200-Amp Engine Starter and user manual",
        features: [
          "2-IN-1 DEVICE: Battery charger and engine starter",
          "POWERFUL JUMP START: The DH0168 delivers 200-amp 12-volt jump starts, powerful enough for larger engines",
          "BOOST MODE: A 40-amp boost mode quickly restores charge to depleted batteries",
          "CHARGING: The DH0168 features a 6-amp charge rate",
          "MANUAL OPERATION: The DH0168 gives you complete control of the charging process with a 135-minute timer and a charge rate selector switch",
          "BATTERY TYPES: The charger/maintainer is compatible with 12-volt standard, AGM, gel, and deep-cycle batteries",
          "AMMETER: The ammeter indicates the amount of current (amps) that is being drawn by the battery and indicates when charging is complete",
          "STORES NEATLY: A retractable handle and compact wheels allow you to easily store the DH0168 when it is not in use",
          "EFFICIENT POWER TRANSFER: Heavy-duty clamps and 8-gauge booster cables with a 12-foot total reach feature superior power transfer",
          "IN THE BOX: DieHard 2-in-1 12-Volt Manual Wheeled 6-Amp Battery Charger and 200-Amp Engine Starter and user manual",
        ],
      },
      {
        id: "battery-charger-006",
        name: "DieHard Gold 3-in-1 6-Volt/12-Volt 15-Amp Battery Charger and Maintainer: Digital Display",
        price: "$109.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-16.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-18.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-19.webp",
        ],
        description:
          "Product Features: 3-IN-1 DEVICE: Battery charger, battery maintainer, and desulfator CHARGE AND MAINTAIN: The DH0162 features 15-amp and 5-amp charge rates SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts FULLY AUTOMATIC: The DH0162 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries HOOK ATTACHMENT: The swivel hook attachment allows you to hang the charger outside of your workspace for added safety and convenience IN THE BOX: DieHard 3-in-1 6-Volt/12-Volt Automotive 15-Amp Battery Charger and Maintainer and user manual",
        features: [
          "3-IN-1 DEVICE: Battery charger, battery maintainer, and desulfator",
          "CHARGE AND MAINTAIN: The DH0162 features 15-amp and 5-amp charge rates",
          "SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts",
          "FULLY AUTOMATIC: The DH0162 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more",
          "BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries",
          "HOOK ATTACHMENT: The swivel hook attachment allows you to hang the charger outside of your workspace for added safety and convenience",
          "IN THE BOX: DieHard 3-in-1 6-Volt/12-Volt Automotive 15-Amp Battery Charger and Maintainer and user manual",
        ],
      },
      {
        id: "battery-charger-007",
        name: "DieHard Gold 5-in-1 6V/12V 6-Amp Battery Charger and 125-Amp Engine Starter: 40-Amp Boost",
        price: "$174.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-48.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-48.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-49.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-50.webp",
        ],
        description:
          "Product Features: 5-IN-1 DEVICE: Battery charger, engine starter, battery maintainer, battery tester, and alternator tester POWERFUL JUMP START: The DH0163 delivers a 125-amp jump start to 6-volt and 12-volt vehicles, powerful enough for larger engines BOOST MODES: 40-amp/15-amp boost mode quickly restores charge to depleted batteries CHARGE AND MAINTAIN: The DH0163 features a 6-amp (12-volt) and a 2-amp (6-volt) charge/maintain rate BUILT-IN DIAGNOSTICS: Monitor battery health and diagnose electrical issues in your vehicle with the built-in battery and alternator tester FULLY AUTOMATIC: The DH0163 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts REVERSE HOOK-UP PROTECTION: Prevent damage to your battery and vehicle when the battery clamps are connected incorrectly CORD MANAGEMENT: Neatly wrap the power cord and booster cables in the recessed channel for easy storage IN THE BOX: DieHard 5-in-1 6-Volt/12-Volt 6-Amp Battery Charger and 125-Amp Engine Starter and user manual",
        features: [
          "5-IN-1 DEVICE: Battery charger, engine starter, battery maintainer, battery tester, and alternator tester",
          "POWERFUL JUMP START: The DH0163 delivers a 125-amp jump start to 6-volt and 12-volt vehicles, powerful enough for larger engines",
          "BOOST MODES: 40-amp/15-amp boost mode quickly restores charge to depleted batteries",
          "CHARGE AND MAINTAIN: The DH0163 features a 6-amp (12-volt) and a 2-amp (6-volt) charge/maintain rate",
          "BUILT-IN DIAGNOSTICS: Monitor battery health and diagnose electrical issues in your vehicle with the built-in battery and alternator tester",
          "FULLY AUTOMATIC: The DH0163 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more",
          "BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries",
          "SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts",
          "REVERSE HOOK-UP PROTECTION: Prevent damage to your battery and vehicle when the battery clamps are connected incorrectly",
          "CORD MANAGEMENT: Neatly wrap the power cord and booster cables in the recessed channel for easy storage",
          "IN THE BOX: DieHard 5-in-1 6-Volt/12-Volt 6-Amp Battery Charger and 125-Amp Engine Starter and user manual",
        ],
      },
      {
        id: "battery-charger-008",
        name: "DieHard Silver 3-in-1 6-Volt/12-Volt 10-Amp Battery Charger and Maintainer: Digital Display",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-33.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-33.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-34.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-35.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-36.webp",
        ],
        description:
          "Product Features: 3-IN-1 DEVICE: Battery charger, battery maintainer, and desulfator CHARGE AND MAINTAIN: The DH0161 features 10-amp and 3-amp charge rates SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts FULLY AUTOMATIC: The DH0161 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries HOOK ATTACHMENT: The swivel hook attachment allows you to hang the charger outside of your workspace for added safety and convenience IN THE BOX: DieHard 3-in-1 6-Volt/12-Volt Automotive 10-Amp Battery Charger and Maintainer and user manual",
        features: [
          "3-IN-1 DEVICE: Battery charger, battery maintainer, and desulfator",
          "CHARGE AND MAINTAIN: The DH0161 features 10-amp and 3-amp charge rates",
          "SCROLLING DIGITAL DISPLAY: The digital display takes you step-by-step through the charging process, shows charging status, and displays alerts",
          "FULLY AUTOMATIC: The DH0161 features fully automatic operation with multi-stage charging, auto-voltage detection, float mode monitoring, and more",
          "BATTERY TYPES: The charger/maintainer is compatible with 6-volt and 12-volt standard, AGM, and lithium (LiFEPO4) batteries",
          "HOOK ATTACHMENT: The swivel hook attachment allows you to hang the charger outside of your workspace for added safety and convenience",
          "IN THE BOX: DieHard 3-in-1 6-Volt/12-Volt Automotive 10-Amp Battery Charger and Maintainer and user manual",
        ],
      },
      {
        id: "battery-charger-009",
        name: "Schumacher 12 Amp Level 1 Portable EV Charger: 20 Foot Cable, J1772 Connector, SEV1670",
        price: "$159.99",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-39.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-39.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-40.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-41.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-42.webp",
        ],
        description:
          "Product Features: Automatic charging with easy operation, simply insert the NEMA 5-15 plug into an AC outlet and connect the charging gun to your EV’s charging port Charging gun features universal J1772 Connector Level 1 portable charging Input voltage is 120 volts Max input amperage is 12 amps continuous Output voltage is 120 volts Output Power is 1.44 kW Plug Type is NEMA 5-15 for standard household 120 volt AC outlet 20.5 foot charging cable is long enough to reach both garage bays and from garage to driveway Use indoors and outdoors with dust and water resistance featuring an ingress protection rating of IP66 (enclosure) Comprehensive safety features include leakage, under voltage, overvoltage, overcurrent, over temperature, ground fault, and relay fault protection LED indicators Comfort grip handle Rubber cap on charging gun In the Box: Schumacher Electric SEV1670 12A Level 1 Portable EV Charger and user manual",
        features: [
          "Automatic charging with easy operation, simply insert the NEMA 5-15 plug into an AC outlet and connect the charging gun to your EV’s charging port",
          "Charging gun features universal J1772 Connector",
          "Level 1 portable charging",
          "Input voltage is 120 volts",
          "Max input amperage is 12 amps continuous",
          "Output voltage is 120 volts",
          "Output Power is 1.44 kW",
          "Plug Type is NEMA 5-15 for standard household 120 volt AC outlet",
          "20.5 foot charging cable is long enough to reach both garage bays and from garage to driveway",
          "Use indoors and outdoors with dust and water resistance featuring an ingress protection rating of IP66 (enclosure)",
          "Comprehensive safety features include leakage, under voltage, overvoltage, overcurrent, over temperature, ground fault, and relay fault protection",
          "LED indicators",
          "Comfort grip handle",
          "Rubber cap on charging gun",
          "In the Box: Schumacher Electric SEV1670 12A Level 1 Portable EV Charger and user manual",
        ],
      },
      {
        id: "battery-charger-010",
        name: "Schumacher 3-in-1 6V/12V Fully Automatic 6A Battery Charger and Maintainer",
        price: "$62.99",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-12.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-14.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-15.webp",
        ],
        description:
          "Product Features: 3-in-1 Device: Battery charger, battery maintainer, and desulfator 6A 12V charge, 2A 6V charge, and 3A charge/maintain modes Microprocessor controlled and automatically adjusts the amperage rate to charge and maintain Multi-stage charging uses an advanced algorithm for added precision, safety, and battery life Multi-stage charging employs an advanced algorithm to maximize battery charge, health, and lifespan In float mode, the battery charger delivers a small current when necessary to keep the unit fully charged Auto voltage detection automatically determines the voltage of a connected battery Reverse hook-up protection prevents damage to the charger and battery if the connections are reversed Compatible with 6 volt and 12 volt standard and AGM batteries 6-foot power cord and 6-foot booster cables for 12 feet of total reach Built-in LED indicators Retractable handle 6-foot booster cable and 6-foot power cord for 12-foot total reach Battery Type:áStandard,áAGM Input Voltage:á120V AC Input Current:á1.5A Output Voltage:á6/12V Output Current:á6V/2A, 12V/6A Dimensions:á3.25 x 10.25 x 7.38 in Weight:á2.39 lb Safety Certifications:áUL ULC BC Sell Country: USA",
        features: [
          "3-in-1 Device: Battery charger, battery maintainer, and desulfator",
          "6A 12V charge, 2A 6V charge, and 3A charge/maintain modes",
          "Microprocessor controlled and automatically adjusts the amperage rate to charge and maintain",
          "Multi-stage charging uses an advanced algorithm for added precision, safety, and battery life",
          "Multi-stage charging employs an advanced algorithm to maximize battery charge, health, and lifespan",
          "In float mode, the battery charger delivers a small current when necessary to keep the unit fully charged",
          "Auto voltage detection automatically determines the voltage of a connected battery",
          "Reverse hook-up protection prevents damage to the charger and battery if the connections are reversed",
          "Compatible with 6 volt and 12 volt standard and AGM batteries",
          "6-foot power cord and 6-foot booster cables for 12 feet of total reach",
          "Built-in LED indicators",
          "Retractable handle",
          "6-foot booster cable and 6-foot power cord for 12-foot total reach",
          "Battery Type:áStandard,áAGM",
          "Input Voltage:á120V AC",
          "Input Current:á1.5A",
          "Output Voltage:á6/12V",
          "Output Current:á6V/2A, 12V/6A",
          "Dimensions:á3.25 x 10.25 x 7.38 in",
          "Weight:á2.39 lb",
          "Safety Certifications:áUL ULC BC",
          "Sell Country: USA",
        ],
      },
      {
        id: "battery-charger-011",
        name: "Schumacher 4-in-1 6V/12V 6A Battery Charger and 55A Engine Starter with 10A Boost",
        price: "$139.99",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-44.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-44.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-45.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-46.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-47.webp",
        ],
        description:
          "Product Features: Fully Automatic 4-in-1 Device: Battery charger, engine starter, battery maintainer, and desulfator Provides 6 amp to 2 amp battery charging and maintaining, 55 cranking amp engine start and 10 amp boost mode Charges standard, AGM, and gel batteries 55A engine starter is powerful enough for starting cars, SUVs, and small trucks Desulfation mode restores sulfated batteries to health Microprocessor controlled and automatically adjusts the amperage rate to charge and maintain Microprocessor controlled andáautomatically adjusts the amperage rate to charge and maintain Multi-stage charging for added precision, safety, and battery life Reverse hook-up protection prevents charger from operating if clamps are reversed; LED will flash Multi-stage charging for added precision, safety, and battery life Reverse hook-up protection prevents the charger from operating if clamps are reversed; LED will flash In the box: Schumacher Electric SC1340 4-in-1 6A Battery Charger and 55A Engine Starter and user manual In the box: Schumacher Electric SC1341 4-in-1 Engine Starter and Battery Charger and user manual Input Voltage: 120V AC Input Voltage:á120V AC Input Current: 2.2A cont/12A int Input Current:á2.2A cont/12A int Output Voltage: 6/12V Output Voltage:á6/12V Output Current: 6V, 2A cont; 12V, 6 2A cont; 6/12V, 55A int Output Current:á6V, 2A cont; 12V, 6 2A cont; 6/12V, 55A int Dimensions: 5.5 x 11 x 11.38 in Dimensions:á5.5 x 11 x 11.38 in Weight: 11.55 lb Weight:á11.55 lb Safety Certifications: UL ULC BC Safety Certifications:áUL ULC BC YOU MAY ALSO LIK",
        features: [
          "Fully Automatic 4-in-1 Device: Battery charger, engine starter, battery maintainer, and desulfator",
          "Provides 6 amp to 2 amp battery charging and maintaining, 55 cranking amp engine start and 10 amp boost mode",
          "Charges standard, AGM, and gel batteries",
          "55A engine starter is powerful enough for starting cars, SUVs, and small trucks",
          "Desulfation mode restores sulfated batteries to health",
          "Microprocessor controlled and automatically adjusts the amperage rate to charge and maintain",
          "Microprocessor controlled andáautomatically adjusts the amperage rate to charge and maintain",
          "Multi-stage charging for added precision, safety, and battery life",
          "Reverse hook-up protection prevents charger from operating if clamps are reversed; LED will flash",
          "Multi-stage charging for added precision, safety, and battery life",
          "Reverse hook-up protection prevents the charger from operating if clamps are reversed; LED will flash",
          "In the box: Schumacher Electric SC1340 4-in-1 6A Battery Charger and 55A Engine Starter and user manual",
          "In the box: Schumacher Electric SC1341 4-in-1 Engine Starter and Battery Charger and user manual",
          "Input Voltage: 120V AC",
          "Input Voltage:á120V AC",
          "Input Current: 2.2A cont/12A int",
          "Input Current:á2.2A cont/12A int",
          "Output Voltage: 6/12V",
          "Output Voltage:á6/12V",
          "Output Current: 6V, 2A cont; 12V, 6 2A cont; 6/12V, 55A int",
          "Output Current:á6V, 2A cont; 12V, 6 2A cont; 6/12V, 55A int",
          "Dimensions: 5.5 x 11 x 11.38 in",
          "Dimensions:á5.5 x 11 x 11.38 in",
          "Weight: 11.55 lb",
          "Weight:á11.55 lb",
          "Safety Certifications: UL ULC BC",
          "Safety Certifications:áUL ULC BC",
        ],
      },
      {
        id: "battery-charger-20",
        name: "Schumacher 6V/12V 3 In 1 Fully Automatic 1A Battery Charger And Maintainer",
        price: "$29.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-20.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-20.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-22.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/battery-charger-23.webp",
        ],
        description:
          "Specifications 6 Volt Compatible: Yes AGM Compatible: Yes Amperage Intervals: 1 AMP Battery Cables Length: 11 ft Body Color: Gray Carry Handle: No Charging Configuration: Automatic Deep Cycle Compatible: Yes Gel Cell Type Compatible: Yes Height: 7.2 in Length: 3.82 in Lithium Compatible: Yes Maximum Amperage: 1 A Rolling: No Voltage: 120 VAC Width: 4.76 in",
        features: [],
      },
    ],
  },
  "brake-pads": {
    id: "brake-pads",
    name: "Brake Pads",
    products: [
      {
        id: "brake-pads-001",
        name: "Carquest Premium Gold Brake Pads: With Hardware, Ceramic, Long Life and Quiet – Front",
        price: "$95.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-4.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD914C Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance.",
        features: [],
      },
      {
        id: "brake-pads-002",
        name: "Carquest Premium Gold Brake Pads: With Hardware, Ceramic, Long Life and Quiet – Rear",
        price: "$89.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1393 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance.",
        features: [],
      },
      {
        id: "brake-pads-003",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/front-break-pads.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/front-break-pads.webp",
        ],
        description:
          "Part No. GNAD1363 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance. Carquest Brakes also offers technical support at 1-833-BRAKE HQ (833-272-5347) for help with product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians. Product Features: Application-specific friction formulations provide shorter stopping distances and extended pad life Hardware included for most applications OE-designed slots and chamfers to reduce noise and vibration Multi-layer shim provides near silent braking Powder-coated backing plate prevents corrosion",
        features: [
          "Application-specific friction formulations provide shorter stopping distances and extended pad life",
          "Hardware included for most applications",
          "OE-designed slots and chamfers to reduce noise and vibration",
          "Multi-layer shim provides near silent braking",
          "Powder-coated backing plate prevents corrosion",
        ],
      },
      {
        id: "brake-pads-004",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$109.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1414 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance. Carquest Brakes also offers technical support at 1-833-BRAKE HQ (833-272-5347) for help with product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians. Product Features: Application-specific friction formulations provide shorter stopping distances and extended pad life Hardware included for most applications OE-designed slots and chamfers to reduce noise and vibration Multi-layer shim provides near silent braking Powder-coated backing plate prevents corrosion",
        features: [
          "Application-specific friction formulations provide shorter stopping distances and extended pad life",
          "Hardware included for most applications",
          "OE-designed slots and chamfers to reduce noise and vibration",
          "Multi-layer shim provides near silent braking",
          "Powder-coated backing plate prevents corrosion",
        ],
      },
      {
        id: "brake-pads-005",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-8.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1089 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance.",
        features: [],
      },
      {
        id: "brake-pads-006",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$89.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-13.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-13.webp",
        ],
        description:
          "Part No. GNAD1169A Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance. Carquest Brakes also offers technical support at 1-833-BRAKE HQ (833-272-5347) for help with product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians. Product Features: Application-specific friction formulations provide shorter stopping distances and extended pad life Hardware included for most applications OE-designed slots and chamfers to reduce noise and vibration Multi-layer shim provides near silent braking Powder-coated backing plate prevents corrosion",
        features: [
          "Application-specific friction formulations provide shorter stopping distances and extended pad life",
          "Hardware included for most applications",
          "OE-designed slots and chamfers to reduce noise and vibration",
          "Multi-layer shim provides near silent braking",
          "Powder-coated backing plate prevents corrosion",
        ],
      },
      {
        id: "brake-pads-007",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$89.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-14.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-14.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1815 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance. Carquest Brakes also offers technical support at 1-833-BRAKE HQ (833-272-5347) for help with product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians. Product Features: Application-specific friction formulations provide shorter stopping distances and extended pad life Hardware included for most applications OE-designed slots and chamfers to reduce noise and vibration Multi-layer shim provides near silent braking Powder-coated backing plate prevents corrosion",
        features: [
          "Application-specific friction formulations provide shorter stopping distances and extended pad life",
          "Hardware included for most applications",
          "OE-designed slots and chamfers to reduce noise and vibration",
          "Multi-layer shim provides near silent braking",
          "Powder-coated backing plate prevents corrosion",
        ],
      },
      {
        id: "brake-pads-008",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$89.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-15.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1653 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance. Carquest Brakes also offers technical support at 1-833-BRAKE HQ (833-272-5347) for help with product questions, diagnostic troubleshooting and installation assistance by ASE Certified Technicians. Product Features: Application-specific friction formulations provide shorter stopping distances and extended pad life Hardware included for most applications OE-designed slots and chamfers to reduce noise and vibration Multi-layer shim provides near silent braking Powder-coated backing plate prevents corrosion",
        features: [
          "Application-specific friction formulations provide shorter stopping distances and extended pad life",
          "Hardware included for most applications",
          "OE-designed slots and chamfers to reduce noise and vibration",
          "Multi-layer shim provides near silent braking",
          "Powder-coated backing plate prevents corrosion",
        ],
      },
      {
        id: "brake-pads-009",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust – Front",
        price: "$89.99",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-10.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1650 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance. Product Features: Application-specific friction formulations provide shorter stopping distances and extended pad life Hardware included for most applications OE-designed slots and chamfers to reduce noise and vibration Multi-layer shim provides near silent braking Powder-coated backing plate prevents corrosion",
        features: [
          "Application-specific friction formulations provide shorter stopping distances and extended pad life",
          "Hardware included for most applications",
          "OE-designed slots and chamfers to reduce noise and vibration",
          "Multi-layer shim provides near silent braking",
          "Powder-coated backing plate prevents corrosion",
        ],
      },
      {
        id: "brake-pads-010",
        name: "Carquest Premium Gold Front Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust – Front",
        price: "$95.99",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-11.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-11.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD976 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance.",
        features: [],
      },
      {
        id: "brake-pads-011",
        name: "Carquest Premium Gold Rear Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dus",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-7.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1114 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance.",
        features: [],
      },
      {
        id: "brake-pads-012",
        name: "Carquest Premium Gold Rear Brake Pads: Ceramic, With Hardware, Long Life, Quiet, and Low Dust",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-3.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/break-pads-2.webp",
        ],
        description:
          "Part No. GNAD1212 Warranty Details (LIMITED LIFETIME REPLACEMENT) Carquest Premium Gold brake pads are original equipment (O.E.) replacement brake pads designed for consistent, quiet and clean braking. Our brake pads are engineered by manufacturers that meet IATF 16949 certified framework, an internationally recognized proof of quality in the automotive industry. Carquest Premium Gold brake pads utilize application-specific friction formulations that provide extended pad life and cleaner wheels. These brake pads also feature OE-designed slots and chamfers for consistent performance. To prevent noise, our Carquest Premium Gold brake pads also utilize a multi-layer shim and are supplied with new brake hardware (most applications-see fitment notes). Carquest Premium Gold brake pads are the best choice when looking for brake pads that meet or exceed the OE stopping performance.",
        features: [],
      },
    ],
  },
  carburetor: {
    id: "carburetor",
    name: "Carburetor",
    products: [
      {
        id: "carburetor-001",
        name: "Edelbrock Performer 1403 Carburetor: 500 CFM, 4 Barrel, Square Bore, Electric Choke Inlet",
        price: "$518.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-8-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-8-1.webp",
        ],
        description:
          "Specifications Barrel Quantity: 4 CFM Rating: 500 cfm Choke Type: Electrical Emission: No Finish: Ball Burnished Mounting Flange Type: Square Bore",
        features: [],
      },
      {
        id: "carburetor-002",
        name: "Edelbrock Performer 1405 Carburetor: 600 CFM, 4 Barrel, Square Bore, Manual Choke Inlet",
        price: "$414.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-7.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-8.webp",
        ],
        description:
          "Specifications Barrel Quantity: 4 CFM Rating: 600 cfm Choke Type: Manual Emission: No Finish: Ball Burnished Mounting Flange Type: Square Bore",
        features: [],
      },
      {
        id: "carburetor-003",
        name: "Edelbrock Performer 1406 Carburetor: 600 CFM, 4 Barrel, Square Bore, Electric Choke Inlet",
        price: "$450.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor.webp",
        ],
        description:
          "Specifications Barrel Quantity: 4 CFM Rating: 600 cfm Choke Type: Electrical Emission: No Finish: Ball Burnished Mounting Flange Type: Square Bore",
        features: [],
      },
      {
        id: "carburetor-004",
        name: "Holley Off Road Carbs",
        price: "$819.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-11.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-11.webp",
        ],
        description:
          "Specifications Barrel: Four Booster Type: Annular / Straight Carburetor Type: 4150 Choke: Electric Cubic Feet Per Minute Rating: 670 cfm Emission: Without EGR Finish: Dichromate Gold Flange: Square Bore Fuel Inlet: Single Fuel Type: Gasoline Material: Zinc Primary Main Jet: 68 Primary Power Valve: 6.5 Secondary Main Jet: 89 Secondary Type: Vacuum Supercharged Application: No Throttle Bore: 1.563 in Type: Automotive Usage: Street/Strip Vacuum Port Quantity: 1 timed (spark); 2 full; 1 PCV",
        features: [],
      },
      {
        id: "carburetor-005",
        name: "Holley Prem Street Carbs (Avengers)",
        price: "$716.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-10.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-10.webp",
        ],
        description:
          "Specifications Barrel: Four Booster Type: Straight Leg Carburetor Type: 4150 Choke: Electric Cubic Feet Per Minute Rating: 770 cfm Emission: Without EGR Finish: Shiny Flange: Square Bore Fuel Inlet: Dual Fuel Type: Gasoline Material: Zinc Primary Main Jet: 70 Primary Power Valve: 6.5 Secondary Main Jet: 75 Secondary Type: Vacuum Supercharged Application: No Throttle Bore: 1.688 in Type: Automotive Usage: Street/Hi-Performance Vacuum Port Quantity: 1 timed (spark); 2 full; 1 PCV",
        features: [],
      },
      {
        id: "carburetor-006",
        name: "Holley Street Carburetor: 600 CFM, Electric Choke, 4 Barrel, Square Bore, Single Inlet, Shiny",
        price: "$509.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-2.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-5.webp",
        ],
        description:
          "Specifications Barrel: Four Billet Color: None Booster Type: Straight Carburetor Type: 4160 Choke: Electric Cubic Feet Per Minute Rating: 600 cfm Emission: Without EGR Finish: Shiny Flange: Square Bore Fuel Inlet: Single Fuel Type: Gasoline Material: Aluminum Primary Main Jet: 66 Primary Power Valve: 6.5 Secondary Type: Vacuum Supercharged Application: No Throttle Bore: 1.563 in Type: Automotive Usage: Street/Hi-Performance",
        features: [],
      },
      {
        id: "carburetor-007",
        name: "Holley Street Carburetor: 670 CFM, Electric Choke, 4 Barrel, Square Bore, Dual Inlet, Shiny",
        price: "$699.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-6.webp",
        ],
        description:
          "Specifications Barrel: Four Booster Type: Straight Carburetor Type: 4150 Choke: Electric Cubic Feet Per Minute Rating: 670 cfm Emission: Without EGR Finish: Shiny Flange: Square Bore Fuel Inlet: Dual Fuel Type: Gasoline Material: Zinc Primary Main Jet: 65 Primary Power Valve: 6.5 Secondary Main Jet: 72 Secondary Type: Vacuum Supercharged Application: No Throttle Bore: 1.563 in Type: Automotive Usage: Street/Hi-Performance Vacuum Port Quantity: 1 timed (spark); 2 full; 1 PCV",
        features: [],
      },
      {
        id: "carburetor-008",
        name: "Omix EMPI Carburetor; 300CFM; 72-90 Jeep CJ/Wrangler YJ",
        price: "$775.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-9.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/carburetor-9.webp",
        ],
        description:
          "Product Features: Upgrade 34mm DGEV Replaces Carter 2 Barrel YF Up To 18 Percent HP Gain Includes Everything Needed For Installation",
        features: [
          "Upgrade",
          "34mm DGEV",
          "Replaces Carter 2 Barrel YF",
          "Up To 18 Percent HP Gain",
          "Includes Everything Needed For Installation",
        ],
      },
    ],
  },
  "exhaust-kit": {
    id: "exhaust-kit",
    name: "Exhaust System Kit",
    products: [
      {
        id: "exhaust-kit-001",
        name: "BRExhaust Direct-Fit Exhaust System Kit",
        price: "$397.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-2.webp",
        ],
        description:
          "Specifications Catalytic Converter Included: No Clamp Type: U-Bolt Clamp Clamping Type: U Bolt Clamps Included: Yes Exhaust Tip Diameter: 2.25 in Exhaust Tip Finish: Aluminized Exhaust Tip Intercooled: No Exhaust Tip Material: Aluminized Steel Exhaust Tip Quantity: 1 Exit Style: OEM Location Finish: Satin Gasket Or Seal Included: No Grade Type: Regular Hangers Included: Yes Inlet Type: Clamp-On Main Piping Diameter: 2.25 in Mounting Bracket Included: No Muffler (Front) Body Height: 4.5 in Muffler (Front) Body Length: 14 in Muffler (Front) Body Width: 9.75 in Muffler (Rear) Body Height: 5 in Muffler (Rear) Body Length: 26.5 in Muffler (Rear) Body Width: 11 in Muffler Body Material: Aluminized Steel Muffler Finish: Aluminized Muffler Quantity: 2 Pipe Material: Aluminized Steel Series: Direct-Fit Exhaust Spring Bolt Kit Included: No Tip Shape: Slant-Cut Type: Direct-Fit",
        features: [],
      },
      {
        id: "exhaust-kit-002",
        name: "BRExhaust Direct-Fit Exhaust System Kit",
        price: "$427.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-3.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-5.webp",
        ],
        description:
          "Specifications Catalytic Converter Included: No Clamp Type: U-Bolt Clamp Clamping Type: U Bolt Clamps Included: Yes Exhaust Tip Diameter: 2.25 in Exhaust Tip Finish: Aluminized Exhaust Tip Intercooled: No Exhaust Tip Material: Aluminized Steel Exhaust Tip Quantity: 1 Exit Style: OEM Location Finish: Satin Gasket Or Seal Included: No Grade Type: Regular Hangers Included: Yes Inlet Type: Clamp-On Main Piping Diameter: 2.25 in Mounting Bracket Included: No Muffler (Center) Body Height: 5 in Muffler (Center) Body Length: 25 in Muffler (Center) Body Width: 11 in Muffler (Front) Body Height: 4 in Muffler (Front) Body Length: 12.5 in Muffler (Front) Body Width: 4 in Muffler (Rear) Body Height: 4 in Muffler (Rear) Body Length: 12.5 in Muffler (Rear) Body Width: 4 in Muffler Body Material: Aluminized Steel Muffler Finish: Aluminized Muffler Quantity: 3 Pipe Material: Aluminized Steel Series: Direct-Fit Exhaust Spring Bolt Kit Included: No Tip Shape: Slant-Cut Type: Direct-Fit",
        features: [],
      },
      {
        id: "exhaust-kit-003",
        name: "BRExhaust Direct-Fit Exhaust System Kit",
        price: "$231.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-8.webp",
        ],
        description:
          "Specifications Catalytic Converter Included: No Clamp Type: U-Bolt Clamp Clamping Type: U Bolt Clamps Included: Yes Exhaust Tip Diameter: 2.5 in Exhaust Tip Finish: Aluminized Exhaust Tip Intercooled: No Exhaust Tip Material: Aluminized Steel Exhaust Tip Quantity: 1 Exit Style: OEM Location Finish: Satin Gasket Or Seal Included: No Grade Type: Regular Hangers Included: Yes Inlet Type: Clamp-On Main Piping Diameter: 2.5 in Mounting Bracket Included: No Muffler (Front) Body Height: 5.125 in Muffler (Front) Body Length: 25 in Muffler (Front) Body Width: 11 in Muffler (Rear) Body Height: 5 in Muffler (Rear) Body Length: 10.25 in Muffler (Rear) Body Width: 5 in Muffler Body Material: Aluminized Steel Muffler Finish: Aluminized Muffler Quantity: 2 Pipe Material: Aluminized Steel Series: Direct-Fit Exhaust Spring Bolt Kit Included: No Tip Shape: Slant-Cut Type: Direct-Fit",
        features: [],
      },
      {
        id: "exhaust-kit-004",
        name: "BRExhaust Direct-Fit Exhaust System Kit",
        price: "$203.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-9.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-11.webp",
        ],
        description:
          "Product Features: Leaves all emissions equipment intact, maintaining emissions compliance Bolt-on, multi-piece design for smooth and easy DIY installation around obstructions, ensuring quality fitment and function without requiring fabrication All components, gaskets, clamps, and hardware required, along with installation instructions, are packaged together in a single protective box Leaves all emissions equipment intact, maintaining emissions compliance",
        features: [
          "Leaves all emissions equipment intact, maintaining emissions compliance",
          "Bolt-on, multi-piece design for smooth and easy DIY installation around obstructions, ensuring quality fitment and function without requiring fabrication",
          "All components, gaskets, clamps, and hardware required, along with installation instructions, are packaged together in a single protective box",
          "Leaves all emissions equipment intact, maintaining emissions compliance",
        ],
      },
      {
        id: "exhaust-kit-005",
        name: "BRExhaust Direct-Fit Exhaust System Kit",
        price: "$639.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-12.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-14.webp",
        ],
        description:
          "Specifications Catalytic Converter Included: No Clamp Type: U-Bolt Clamp Clamping Type: U Bolt Clamps Included: Yes Exhaust Tip Diameter: 3 in Exhaust Tip Finish: Polished Exhaust Tip Intercooled: No Exhaust Tip Material: Stainless Steel Exhaust Tip Quantity: 2 Exhaust Tip Resonated: No Exhaust Tip Shape: Slant-Cut Exit Style: OEM Location Finish: Satin Gasket Or Seal Included: Yes Grade Type: Regular Hangers Included: Yes Inlet Type: Bolt-On Main Piping Diameter: 2 in Mounting Bracket Included: No Muffler (Center) Body Height: 5 in Muffler (Center) Body Length: 9.75 in Muffler (Center) Body Width: 5 in Muffler (Front) Body Height: 3.5 in Muffler (Front) Body Length: 12.25 in Muffler (Front) Body Width: 3.5 in Muffler (Rear) Body Height: 5 in Muffler (Rear) Body Length: 25.5 in Muffler (Rear) Body Width: 11 in Muffler Body Material: Aluminized Steel Muffler Finish: Aluminized Muffler Quantity: 3 Pipe Material: Aluminized Steel Series: Direct-Fit Exhaust Spring Bolt Kit Included: Yes Tip Shape: Slant-Cut Type: Direct-Fit",
        features: [],
      },
      {
        id: "exhaust-kit-006",
        name: "BRExhaust Direct-Fit Exhaust System Kit",
        price: "$429.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-15.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/exhaust-17.webp",
        ],
        description:
          "Specifications Catalytic Converter Included: No Clamp Type: U-Bolt Clamp Clamping Type: U Bolt Clamps Included: Yes Exhaust Tip Diameter: 3 in Exhaust Tip Finish: Aluminized Exhaust Tip Intercooled: No Exhaust Tip Material: Aluminized Steel Exhaust Tip Quantity: 1 Exit Style: OEM Location Finish: Satin Gasket Or Seal Included: No Grade Type: Regular Hangers Included: Yes Inlet Type: Bolt-On Main Piping Diameter: 3 in Mounting Bracket Included: No Muffler (Front) Body Height: 5 in Muffler (Front) Body Length: 7.75 in Muffler (Front) Body Width: 5 in Muffler (Rear) Body Height: 7 in Muffler (Rear) Body Length: 21.75 in Muffler (Rear) Body Width: 9 in Muffler Body Material: Aluminized Steel Muffler Finish: Aluminized Muffler Quantity: 2 Pipe Material: Aluminized Steel Series: Direct-Fit Exhaust Spring Bolt Kit Included: Yes Tip Shape: Round Type: Direct-Fit",
        features: [],
      },
    ],
  },
  "floor-mat": {
    id: "floor-mat",
    name: "Floor Mat",
    products: [
      {
        id: "floor-mat-001",
        name: "AutoCraft Car & SUV & Truck Floor Mat, Tan Rubber, Premium Heavy-Duty, Trim to Fit, 4 Piece",
        price: "$47.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-46.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-46.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-43.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-45.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-44.webp",
        ],
        description:
          "Specifications Color: Tan Material: Rubber Position: Front and Rear Type: Rubber With Non Slip Grips: Yes",
        features: [],
      },
      {
        id: "floor-mat-002",
        name: "AutoCraft Car & SUV Floor Mat, Black Rubber Heavy-Duty/All-Season, Trim to Fit, 4 Piece",
        price: "$31.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-8.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-11.webp",
        ],
        description:
          "Specifications Color: Black Configuration: Multi-Piece Cutting Required: Yes Design: Trim-to-fit Floor Material Compatibility: All Material: Rubber Non Slip Backing: Yes Quantity in Set: 4 Seasonal: Yes Thickness: 0.709 in Type: Trimmable Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
      {
        id: "floor-mat-003",
        name: "AutoCraft Car & SUV Floor Mat, Black Rubber, All-Season, Trim to Fit, 4 Piece",
        price: "$25.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-1.jpg",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-3.webp",
        ],
        description:
          "Specifications Color: Black Configuration: Multi-Piece Cutting Required: No Design: Automotive Floor Material Compatibility: All Material: PVC Non Slip Backing: Yes Seasonal: Yes Thickness: 0.29 in Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
      {
        id: "floor-mat-004",
        name: "AutoCraft Car & SUV Floor Mat, Black Rubber, All-Season, Universal, 4 Piece",
        price: "$39.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-19.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-19.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-20.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-22.webp",
        ],
        description:
          "Specifications Color: Black Configuration: Multi-Piece Cutting Required: No Design: Non-trimmable Floor Material Compatibility: All Material: Rubber Non Slip Backing: Yes Seasonal: Yes Thickness: 0.323 in Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
      {
        id: "floor-mat-005",
        name: "AutoCraft Car & SUV Floor Mat, Black/Matt Red Stripe Rubber, Sporty, All-Season, Trim to Fit, 4 Piece",
        price: "$49.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-15-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-15-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-18.webp",
        ],
        description:
          "Product Features: Front size: 27.55″ x 18.89″ Rear size: 14.96″ x 18.11″ All-season rubber mat Matte red foiling for sport trend Raised border/edge traps dirt, fluids and debris Rubberized nibs and anti-slip hook on the bottom can attach to your carpet liner firmly Trim-to-fit lines around the edge to make the mat fit the specific shape Simple installation and easy to clean",
        features: [
          "Front size: 27.55″ x 18.89″ Rear size: 14.96″ x 18.11″",
          "All-season rubber mat",
          "Matte red foiling for sport trend",
          "Raised border/edge traps dirt, fluids and debris",
          "Rubberized nibs and anti-slip hook on the bottom can attach to your carpet liner firmly",
          "Trim-to-fit lines around the edge to make the mat fit the specific shape",
          "Simple installation and easy to clean",
        ],
      },
      {
        id: "floor-mat-006",
        name: "AutoCraft Car & SUV Floor Mat, Clear Rubber, Heavy-Duty/All-Season, Trim to Fit, 4 Piece",
        price: "$29.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-27.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-27.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-28.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-29.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-30.webp",
        ],
        description:
          "Specifications Color: Clear Configuration: Multi-Piece Cutting Required: Yes Design: Trim-to-fit Floor Material Compatibility: All Material: Rubber Non Slip Backing: Yes Quantity in Set: 4 Seasonal: Yes Thickness: 0.591 in Type: Trimmable Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
      {
        id: "floor-mat-007",
        name: "AutoCraft Car & SUV Floor Mat, Grey Rubber, All-Season, Universal, 4 Piece",
        price: "$26.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-23.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-23.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-24.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-26.webp",
        ],
        description:
          "Specifications Color: Grey Configuration: Multi-Piece Cutting Required: No Design: Non-trimmable Floor Material Compatibility: All Material: Rubber Non Slip Backing: Yes Seasonal: Yes Thickness: 0.323 in Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
      {
        id: "floor-mat-008",
        name: "AutoCraft Car & SUV Floor Mat, Grey Rubber, Heavy-Duty/All-Season, Trim to Fit, 4 Piece",
        price: "$34.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-30-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-30-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-31.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-32.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-33.webp",
        ],
        description:
          "Specifications Color: Grey Configuration: Multi-Piece Cutting Required: Yes Design: Trim-to-fit Floor Material Compatibility: All Material: Rubber Non Slip Backing: Yes Seasonal: Yes Thickness: 0.709 in Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
      {
        id: "floor-mat-009",
        name: "AutoCraft Car & SUV Front Tray Floor Mat, Black Rubber, Heavy-Duty/All-Season, Trim to Fit, 2 Piece",
        price: "$55.99",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-35.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-35.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-36-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-36.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-37.webp",
        ],
        description:
          "Product Features: Anti-slip nib backing Extra depth raised border traps water, snow and dirt Trim-to-fit design All-season heavy-duty Front size: 27.95″ x 19.68″",
        features: [
          "Anti-slip nib backing",
          "Extra depth raised border traps water, snow and dirt",
          "Trim-to-fit design",
          "All-season heavy-duty",
          "Front size: 27.95″ x 19.68″",
        ],
      },
      {
        id: "floor-mat-010",
        name: "AutoCraft Car & SUV Rear Floor Mat, Black Rubber, All-Season, Universal, 2 Piece",
        price: "$12.99",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-12.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-13.jpg",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-14.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-15.webp",
        ],
        description:
          "Specifications Color: Black Configuration: Two-Piece Cutting Required: No Design: Automotive Floor Material Compatibility: All Length: 17.32 in Material: PVC Non Slip Backing: Yes Seasonal: Yes Thickness: 0.42 in Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No Width: 13.19 in",
        features: [],
      },
      {
        id: "floor-mat-011",
        name: "AutoCraft Floor Mat, Lighted, Color Selection-Blue, Green, Red",
        price: "$34.99",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-45-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-45-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-47.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-48.webp",
        ],
        description:
          "Product Features: 3 vibrant color modes Battery Saver-Automatic 30 minute shutoff Battery included (6 AAA batteries) Front size: 25.98″ x 17.32″",
        features: [
          "3 vibrant color modes",
          "Battery Saver-Automatic 30 minute shutoff",
          "Battery included (6 AAA batteries)",
          "Front size: 25.98″ x 17.32″",
        ],
      },
      {
        id: "floor-mat-012",
        name: "AutoCraft RBR MAT BK/RED 4PC",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-39.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-39.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-40.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-41.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/floor-mat-42.webp",
        ],
        description:
          "Specifications Color: Black/Red Configuration: Multi-Piece Cutting Required: Yes Design: Automotive Floor Material Compatibility: All Material: PVC Non Slip Backing: Yes Seasonal: Yes Thickness: 0.54 in Universal Or Specific Fit: Universal Water Resistant: Yes Waterproof: No",
        features: [],
      },
    ],
  },
  headlight: {
    id: "headlight",
    name: "Headlight",
    products: [
      {
        id: "headlight-001",
        name: "Carquest 9005 Standard Halogen Headlight Capsule, 1 Pack",
        price: "$13.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-27.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-27.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-28.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-29.webp",
        ],
        description:
          "Specifications Amperage: 5.08 amps Amperage Rating: 5.08 A Average Rated Life: 150 hr Base Diameter: 20 mm Base Type: P20D Beam Type: High Beam Bulb Base Type: P20d Bulb Category: Halogen Bulb Configuration: MOUNTED HORIZONTAL Bulb Finish: Clear Bulb Material Color: Clear Bulb Part Number: 9005 Bulb Quantity: 1 Bulb Type: T4 Color Temperature: 3000 Diameter: 13 mm DOT / SAE Approved: Yes Filament Configuration: VERTICAL Filament Quantity: 1 Filament Type: C-8 Glass Color: Clear Glass Diameter: 12.45 mm Height: 78.49 mm High Beam Wattage: 65 W Length: 78.49 mm Lens Color: Clear Light Center Length: 1.24 mm Light Color Temperature: 3000 K Lumens: 1700 m Overall Length: 78.49 mm Rated Life: 150 Street Legal: Yes Voltage: 12.8 V Wattage: 65 W Width: 46 mm",
        features: [],
      },
      {
        id: "headlight-002",
        name: "Carquest H11/55W Standard Halogen Headlight Bulb, 1 Pack",
        price: "$24.79",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-18.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-18.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-19.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-20.webp",
        ],
        description:
          "Specifications Amperage: 4.58 amps Amperage Rating: 4.58 A Average Rated Life: 600 hr Base Type: Right Angle Beam Type: Low Beam Bulb Configuration: Mounted Horizontal Bulb Material Color: Clear Bulb Part Number: LTH11/55WBX Bulb Quantity: 1 Bulb Type: H11/55W Color Temperature: 3000 Diameter: 11.5 mm DOT / SAE Approved: Yes Filament Configuration: Vertical Filament Quantity: 1 High Beam Wattage: 55 Housing Color: Black Housing Material: Plastic Length: 66.8 mm Lens Color: Clear Lens Material: Glass Light Center Length: 25 mm Light Color Temperature: 3000 K Lumens: 1350 m Rated Life: 500 Shape: T3 1/2 Street Legal: Yes Voltage: 12 Wattage: 55 W",
        features: [],
      },
      {
        id: "headlight-003",
        name: "Carquest H7/55W Standard Halogen Headlight Bulb, 1 Pack",
        price: "$24.79",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-42.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-42.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-43.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-44.webp",
        ],
        description:
          "Specifications Amperage: 4.58 amps Amperage Rating: 4.58 A Average Rated Life: 250 hr Base Diameter: 26 mm Base Type: PX26D Beam Type: Low Beam Bulb Base Type: PX26d Bulb Category: Halogen Bulb Configuration: MOUNTED HORIZONTAL Bulb Finish: Clear Bulb Material Color: Clear Bulb Part Number: H7/55 W Bulb Quantity: 1 Bulb Type: T3 1/2 Color Temperature: 3000 Diameter: 11.5 mm DOT / SAE Approved: Yes Filament Configuration: VERTICAL Filament Quantity: 1 Filament Type: C-8 Glass Color: Clear Glass Diameter: 11.5 mm Height: 92 mm High Beam Wattage: 55 W Length: 92 mm Lens Color: Clear Light Center Length: 28.5 mm Light Color Temperature: 3000 K Lumens: 1350 m Overall Length: 92 mm Rated Life: 500 Street Legal: Yes Voltage: 12.8 V Wattage: 55 W Width: 34 mm",
        features: [],
      },
      {
        id: "headlight-004",
        name: "Sylvania 168 Long Life: Mini Bulb, Standard Performance, 2 Pack",
        price: "$14.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-3.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-5.webp",
        ],
        description:
          "Specifications Amperage Rating: 0.35 A Average Rated Life: 1500 hr Brightness: 43 lu Bulb Base Type: W2.1×9.2d Bulb Color: White Bulb Finish: Clear Bulb Material: Glass Bulb Technology: Incandescent Bulb Type: 168 Diameter: 0.38 in DOT Approved: Yes Filament Quantity: 1 Filament Type: C-2F Height: 0.39 in Length: 1.06 in Light Color Temperature: 2700 K Secondary Filament Type: Not Applicable Street Legal: Yes Voltage: 12.80 VDC Wattage: 4.90 W Width: 0.39 in",
        features: [],
      },
      {
        id: "headlight-005",
        name: "Sylvania 9005 Basic: Halogen Headlight Bulb, Basic Performance, 1 Pack",
        price: "$24.79",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-12.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-14.webp",
        ],
        description:
          "Specifications Amperage: 5.08 amps Amperage Rating: 5.08 A Average Rated Life: 320 hr Base Type: P20d Brightness: 1960 lu Bulb Base Type: Right Angle P20d Bulb Color: White Bulb Configuration: T4 Bulb Finish: Clear Bulb Material: Glass Bulb Part Number: 9005 Bulb Technology: Halogen Bulb Type: 9005 Color Temperature: 3200 Diameter: 0.50 in DOT / SAE Approved: Yes DOT Approved: Yes Filament Configuration: C-8 Filament Quantity: 1 Filament Type: C-8 High Beam Wattage: 65 Length: 3.02 in Light Center Length: 1.24 in Light Color Temperature: 3200 K Lumens: 1700 m Rated Life: 320 Secondary Filament Type: Not Applicable Street Legal: Yes Voltage: 12.80 VDC Wattage: 65.00 W",
        features: [],
      },
      {
        id: "headlight-006",
        name: "Sylvania 9005 Basic: Halogen Headlight Bulb, Basic Performance, 2 Pack",
        price: "$49.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-30.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-30.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-31.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-32.webp",
        ],
        description:
          "Product Features: DEPENDABLE: Made from high quality materials for long-lasting durability to improve your driving situation OE QUALITY: Designed to match the basic performance of your vehicle’s original bulb EASY DIY INSTALLATION: A direct replacement for the factory bulbs in your vehicle, no modification required SMART MAINTENANCE: Headlights dim over time, always replace bulbs in pairs to ensure equal brightness and color PRO TIP: When changing your bulb, never touch the glass. Always use gloves or a clean shop towel to reduce the transfer of oils during install SAFETY: Compliant with DOT regulations and SAE standards, SYLVANIA headlight bulbs are designed with safety in mind to prevent glare TRUSTED BRAND: SYLVANIA is a trusted OEM automotive lighting manufacturer, with over 100 years of superior optical engineering experience",
        features: [
          "DEPENDABLE: Made from high quality materials for long-lasting durability to improve your driving situation",
          "OE QUALITY: Designed to match the basic performance of your vehicle’s original bulb",
          "EASY DIY INSTALLATION: A direct replacement for the factory bulbs in your vehicle, no modification required",
          "SMART MAINTENANCE: Headlights dim over time, always replace bulbs in pairs to ensure equal brightness and color",
          "PRO TIP: When changing your bulb, never touch the glass. Always use gloves or a clean shop towel to reduce the transfer of oils during install",
          "SAFETY: Compliant with DOT regulations and SAE standards, SYLVANIA headlight bulbs are designed with safety in mind to prevent glare",
          "TRUSTED BRAND: SYLVANIA is a trusted OEM automotive lighting manufacturer, with over 100 years of superior optical engineering experience",
        ],
      },
      {
        id: "headlight-007",
        name: "Sylvania H11 Basic: Halogen Headlight Bulb, Basic Performance, 1 Pack",
        price: "$29.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light.-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light.-2.webp",
        ],
        description:
          "Specifications Amperage: 4.17 amps Amperage Rating: 4.58 A Average Rated Life: 270 hr Base Type: PGJ19-2 Brightness: 1400 lu Bulb Base Type: PGJ19-2 Bulb Color: White Bulb Configuration: T4 Bulb Finish: Clear Bulb Material: Glass Bulb Part Number: H11 Bulb Technology: Halogen",
        features: [],
      },
      {
        id: "headlight-008",
        name: "Sylvania H11 Basic: Halogen Headlight Bulb, Basic Performance, 2 Pack",
        price: "$49.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-9.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-11.webp",
        ],
        description:
          "Product Features: DEPENDABLE: Made from high quality materials for long-lasting durability to improve your driving situation OE QUALITY: Designed to match the basic performance of your vehicle’s original bulb EASY DIY INSTALLATION: A direct replacement for the factory bulbs in your vehicle, no modification required SMART MAINTENANCE: Headlights dim over time, always replace bulbs in pairs to ensure equal brightness and color PRO TIP: When changing your bulb, never touch the glass. Always use gloves or a clean shop towel to reduce the transfer of oils during install SAFETY: Compliant with DOT regulations and SAE standards, SYLVANIA headlight bulbs are designed with safety in mind to prevent glare TRUSTED BRAND: SYLVANIA is a trusted OEM automotive lighting manufacturer, with over 100 years of superior optical engineering experience",
        features: [
          "DEPENDABLE: Made from high quality materials for long-lasting durability to improve your driving situation",
          "OE QUALITY: Designed to match the basic performance of your vehicle’s original bulb",
          "EASY DIY INSTALLATION: A direct replacement for the factory bulbs in your vehicle, no modification required",
          "SMART MAINTENANCE: Headlights dim over time, always replace bulbs in pairs to ensure equal brightness and color",
          "PRO TIP: When changing your bulb, never touch the glass. Always use gloves or a clean shop towel to reduce the transfer of oils during install",
          "SAFETY: Compliant with DOT regulations and SAE standards, SYLVANIA headlight bulbs are designed with safety in mind to prevent glare",
          "TRUSTED BRAND: SYLVANIA is a trusted OEM automotive lighting manufacturer, with over 100 years of superior optical engineering experience",
        ],
      },
      {
        id: "headlight-009",
        name: "Sylvania H11 SilverStar Ultra: Halogen Headlight Bulb, Brightest Downroad and Whiter Light, 1 Pack",
        price: "$33.99",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-36.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-36.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-37.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-38.webp",
        ],
        description:
          "Specifications Amperage Rating: 4.58 A Average Rated Life: 200 hr Brightness: 1400 lu Bulb Base Type: PGJ19-2 Bulb Color: White Bulb Finish: Clear Bulb Material: Glass Bulb Technology: Halogen Bulb Type: H11 Diameter: 0.44 in DOT Approved: Yes Filament Quantity: 1 Filament Type: C-8 Height: 2.48 in Length: 1.59 in Secondary Filament Type: Not Applicable Street Legal: Yes Voltage: 12.80 VDC Wattage: 55.00 W Width: 1.12 in",
        features: [],
      },
      {
        id: "headlight-010",
        name: "Sylvania H11 SilverStar Ultra: Halogen Headlight Bulb, Brightest Downroad and Whiter Light, 2 Pack",
        price: "$75.99",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-6.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-8.webp",
        ],
        description:
          "Specifications Amperage: 4.17 amps Amperage Rating: 4.58 A Average Rated Life: 200 hr Base Type: PGJ19-2 Brightness: 1400 lu Bulb Base Type: PGJ19-2 Bulb Color: White Bulb Configuration: T4 Bulb Finish: Clear Bulb Material: Glass Bulb Part Number: H11 SU Bulb Technology: Halogen Bulb Type: H11 Color Temperature: 4000 Diameter: 0.44 in DOT / SAE Approved: Yes DOT Approved: Yes Filament Configuration: C-8 Filament Quantity: 1 Filament Type: C-8 Height: 2.48 in Length: 1.59 in Light Center Length: 0.98 in Lumens: 1350 m Rated Life: 125 Secondary Filament Type: Not Applicable Street Legal: Yes Voltage: 12.80 VDC Wattage: 55.00 W Width: 1.12 in",
        features: [],
      },
      {
        id: "headlight-011",
        name: "Sylvania H11 SilverStar: Halogen Headlight Bulb, Brighter Downroad and Whiter Light, 1 Pack",
        price: "$28.99",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-24.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-24.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-26.webp",
        ],
        description:
          "Specifications Amperage Rating: 4.58 A Average Rated Life: 150 hr Brightness: 1400 lu Bulb Base Type: PGJ19-2 Bulb Color: White Bulb Finish: Clear Bulb Material: Glass Bulb Technology: Halogen Bulb Type: H11 Diameter: 0.44 in DOT Approved: Yes Filament Quantity: 1 Filament Type: C-8 Height: 2.48 in Length: 1.59 in Light Color Temperature: 3575 K Secondary Filament Type: Not Applicable Street Legal: Yes Voltage: 12.80 VDC Wattage: 55.00 W Width: 1.12 in",
        features: [],
      },
      {
        id: "headlight-012",
        name: "Sylvania H11 SilverStar: Halogen Headlight Bulb, Brighter Downroad and Whiter Light, 2 Pack",
        price: "$51.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-21.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-22.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/head-light-23.webp",
        ],
        description:
          "Specifications Amperage: 4.17 amps Amperage Rating: 4.58 A Average Rated Life: 150 hr Base Type: PGJ19-2 Brightness: 1400 lu Bulb Base Type: PGJ19-2 Bulb Color: White Bulb Configuration: T4 Bulb Finish: Clear Bulb Material: Glass Bulb Part Number: H11 ST Bulb Technology: Halogen Bulb Type: H11 Color Temperature: 4000 Diameter: 0.44 in DOT / SAE Approved: Yes DOT Approved: Yes Filament Configuration: C-8 Filament Quantity: 1 Filament Type: C-8 Height: 2.48 in Length: 1.59 in Light Center Length: 0.98 in Light Color Temperature: 3575 K Lumens: 1350 m Rated Life: 125 Secondary Filament Type: Not Applicable Street Legal: Yes Voltage: 12.80 VDC Wattage: 55.00 W Width: 1.12 in",
        features: [],
      },
    ],
  },
  "oil-filter": {
    id: "oil-filter",
    name: "Oil Filter",
    products: [
      {
        id: "oil-filter-001",
        name: "Carquest EP Filters Oil Filter: Extended Performance Up To 20,000 Miles",
        price: "$23.79",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-13.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-14.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-16.webp",
        ],
        description:
          "Specifications Anti-Drain Back Valve: Yes Burst Pressure: 256 lb/in² Bypass Relief Valve: Yes Bypass Relief Valve Setting: 14.5 lb/in² Filter Type: Spin-on Flow Rate: 237.75 gal/h Gasket Inside Diameter: 2.22000000000000 Gasket Or Seal Included: Yes Gasket Outside Diameter: 2.45000000000000 Gasket Thickness: 0.12 Height: 3.35 Inside Thread Size: M20X1.5-6H Marine Approved: No Outer Diameter Bottom: 2.56 Outside Diameter Top: 2.56 Torque Nut: No",
        features: [],
      },
      {
        id: "oil-filter-002",
        name: "Carquest EP Filters Oil Filter: Extended Performance Up To 20,000 Miles",
        price: "$19.79",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-35.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-35.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-36.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-37.webp",
        ],
        description:
          "Specifications Anti-Drain Back Valve: No Bottom Inside Diameter: 1.10000000000000 Bypass Relief Valve: No Filter Type: Cartridge Flow Rate: 237.75 gal/h Gasket Inside Diameter: 3.11 Gasket Or Seal Included: Yes Gasket Outside Diameter: 3.39 Gasket Thickness: 0.140000000000000 Height: 2.64 Marine Approved: No Outer Diameter Bottom: 2.72 Outside Diameter Top: 2.72 Top Inside Diameter: 1.10000000000000 Torque Nut: No",
        features: [],
      },
      {
        id: "oil-filter-003",
        name: "Carquest EP Filters Oil Filter: Extended Performance Up To 20,000 Miles",
        price: "$19.79",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-38.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-38.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-39.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-40.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-41.webp",
        ],
        description:
          "Specifications Anti-Drain Back Valve: No Bottom Inside Diameter: 0.75 Bypass Relief Valve: No Filter Type: Cartridge Flow Rate: 237.75 gal/h Gasket Inside Diameter: 2.24000000000000 Gasket Or Seal Included: Yes Gasket Outside Diameter: 2.5 Gasket Thickness: 0.12 Height: 6.18 Marine Approved: No Outer Diameter Bottom: 1.96 Outside Diameter Top: 1.96 Top Inside Diameter: 0.75 Torque Nut: No",
        features: [],
      },
      {
        id: "oil-filter-004",
        name: "Carquest Premium Oil Filter: Ideal for Synthetic Oil, Protection up to 10,000 Miles",
        price: "$19.79",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-5.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-6.webp",
        ],
        description:
          "Specifications Height: 3.35 in Outside Diameter: 2.56 in Type of Filter: Cartridge Oil",
        features: [],
      },
      {
        id: "oil-filter-005",
        name: "Carquest Premium Oil Filter: Ideal for Synthetic Oil, Protection up to 10,000 Miles",
        price: "$15.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-17.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-18.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-19.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-20.webp",
        ],
        description:
          "Product Features: Protection for up to 10,000 miles Synthetic blend media provides 99.5% efficiency at 20 microns and 2X capacity vs. Standard filters Solid metal end caps are designed to be long lasting Silicone anti-drain back valve for engine start-up protection Heavy-duty steel baseplate provides additional strength to resist leakage Heavy gauge steel canister withstands high pressure operating conditions Silicone sealing gasket performs better in extreme temperature conditions and longer drain intervals (silicone gasket is new feature introduced as a running change) Meets requirements for maintaining new vehicle warranties",
        features: [
          "Protection for up to 10,000 miles",
          "Synthetic blend media provides 99.5% efficiency at 20 microns and 2X capacity vs. Standard filters",
          "Solid metal end caps are designed to be long lasting",
          "Silicone anti-drain back valve for engine start-up protection",
          "Heavy-duty steel baseplate provides additional strength to resist leakage",
          "Heavy gauge steel canister withstands high pressure operating conditions",
          "Silicone sealing gasket performs better in extreme temperature conditions and longer drain intervals (silicone gasket is new feature introduced as a running change)",
          "Meets requirements for maintaining new vehicle warranties",
        ],
      },
      {
        id: "oil-filter-006",
        name: "Carquest Premium Oil Filter: Ideal for Synthetic Oil, Protection up to 10,000 Miles",
        price: "$19.79",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-24.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-24.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-26.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-27.webp",
        ],
        description:
          "Specifications Bottom Inside Diameter: 1.08 in Filter Media Material: Cellulose Filter Type: Cartridge Gasket Or Seal Included: Yes Gasket Thickness: 0.130, 0.130 in Height: 2.63500000000000 in Outside Diameter: 2.46 in Outside Diameter Top: 2.75500000000000 in Type of Filter: Cartridge Oil Universal Or Specific Fit: Specific",
        features: [],
      },
      {
        id: "oil-filter-007",
        name: "Carquest Standard Oil Filter: Ideal for Conventional Oil, Protection up to 5,000 Miles",
        price: "$9.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-4.webp",
        ],
        description:
          "Product Features: Protection for up to 5,000 miles Cellulose media provides 95.1% efficiency at 20 Microns for increased engine protection Nitrile anti-drain back valve for engine start-up protection Lathe cut nitrile sealing gasket prevents leaks Double fluted spiral wound center tube allows maximum flow and provides additional strength Solid steel baseplate provides additional strength to resist leakage Meets requirements for maintaining new vehicle warranties",
        features: [
          "Protection for up to 5,000 miles",
          "Cellulose media provides 95.1% efficiency at 20 Microns for increased engine protection",
          "Nitrile anti-drain back valve for engine start-up protection",
          "Lathe cut nitrile sealing gasket prevents leaks",
          "Double fluted spiral wound center tube allows maximum flow and provides additional strength",
          "Solid steel baseplate provides additional strength to resist leakage",
          "Meets requirements for maintaining new vehicle warranties",
        ],
      },
      {
        id: "oil-filter-008",
        name: "Carquest Standard Oil Filter: Ideal for Conventional Oil, Protection up to 5,000 Miles",
        price: "$9.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-30.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-30.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-31.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-32.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-33.webp",
        ],
        description:
          "Specifications Anti-Drain Valve: Yes Flute count: 14 Height: 3.52 in Outside Diameter: 2.69 Relief Valve P.S.I.: 14-18 PSI Threads: M20x1.5 mm Type of Filter: Spin-on",
        features: [],
      },
      {
        id: "oil-filter-009",
        name: "Mobil 1 Oil Filter: Ideal for Synthetic Oil, Protection To 20,000 Miles",
        price: "$24.79",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-20-1.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-20-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-22.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-23.webp",
        ],
        description:
          "Specifications Filter Media Material: Premium Cellulose Filter Type: Spin-on Gasket Type: Gasket Height: 3.54 in Outer Diameter Bottom: 2.69 in Outside Diameter Top: 2.51 in Style: Spin-On Lube Filter Threads: M20x1.5 Universal Or Specific Fit: Specific",
        features: [],
      },
      {
        id: "oil-filter-010",
        name: "Motorcraft Original Equipment Oil Filter: Ideal for Any Type Oil, Built To Meet Ford’s Standards",
        price: "$19.79",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-34.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-34.webp",
        ],
        description:
          "Product Features: Pressure-relief valves help minimize the chance of contaminated oil circulating back into the engine Pressure-relief valves also help maintain the supply of oil to the engine under extreme cold conditions or if the filter gets clogged Steel cases are “ironed” for a precise fit, fluted to ease removal and painted to resist rust Efficient filter media offers increased dirt-collecting capability and ability to capture more engine-harming particles",
        features: [
          "Pressure-relief valves help minimize the chance of contaminated oil circulating back into the engine",
          "Pressure-relief valves also help maintain the supply of oil to the engine under extreme cold conditions or if the filter gets clogged",
          "Steel cases are “ironed” for a precise fit, fluted to ease removal and painted to resist rust",
          "Efficient filter media offers increased dirt-collecting capability and ability to capture more engine-harming particles",
        ],
      },
      {
        id: "oil-filter-011",
        name: "OEZ by Premium Guard Oil Filter: Ideal for Any Type Oil, Same Filter Installed From The Factory",
        price: "$19.79",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-9.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-12.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-11.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/oil-filter-10.webp",
        ],
        description:
          "Product Features: Genuine Hyundai/Kia Original Equipment Oil Filter for your Hyundai/Kia vehicle. Engineered to deliver the mileage interval requirements as specified by Hyundai/Kia. OEM style gasket provides a consistent seal to prevent leaks.",
        features: [
          "Genuine Hyundai/Kia Original Equipment Oil Filter for your Hyundai/Kia vehicle.",
          "Engineered to deliver the mileage interval requirements as specified by Hyundai/Kia.",
          "OEM style gasket provides a consistent seal to prevent leaks.",
        ],
      },
    ],
  },
  "rotors-drums": {
    id: "rotors-drums",
    name: "Rotors and Drums",
    products: [
      {
        id: "rotor-001",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$129.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-1.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-2.webp",
        ],
        description:
          "Part No. YH145582P Warranty Details (2 YR REPLACEMENT IF DEFECTIVE) Carquest Premium painted brake rotors meet or exceed original equipment (O.E.) specifications, delivering superior stopping power with proper harmonic design and non-directional finish that eliminate noise. Carquest Premium painted rotors feature RotorShield, a rust-inhibiting barrier that provides up to 5 times more protection than non-painted rotors. The RotorShield barrier is applied to the rotor hat to protect from unsightly rust and help maintain a like-new appearance. Our rotors are designed to effectively dissipate heat, helping to eliminate brake fade and increase the life of the pads and rotors. Carquest Premium painted brake rotors are designed for long-lasting and quiet braking with superior performance. Product Features: Engineered to withstand 120 hours of salt spray testing Meets or exceeds OE design for superior stopping power Exceeds ISO manufacturing guidelines (International Organization for Standardization) Matches OE vane size for proper cooling Optimal metallurgy and casting thickness to preventing warping Air gap eliminates brake fade and increases pad life Non-directional finish decreases break-in time",
        features: [
          "Engineered to withstand 120 hours of salt spray testing",
          "Meets or exceeds OE design for superior stopping power",
          "Exceeds ISO manufacturing guidelines (International Organization for Standardization)",
          "Matches OE vane size for proper cooling",
          "Optimal metallurgy and casting thickness to preventing warping",
          "Air gap eliminates brake fade and increases pad life",
          "Non-directional finish decreases break-in time",
        ],
      },
      {
        id: "rotor-002",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$149.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-3.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-3.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-5.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-6.webp",
        ],
        description:
          "Part No. YH145698P Warranty Details (2 YR REPLACEMENT IF DEFECTIVE) Carquest Premium painted brake rotors meet or exceed original equipment (O.E.) specifications, delivering superior stopping power with proper harmonic design and non-directional finish that eliminate noise. Carquest Premium painted rotors feature RotorShield, a rust-inhibiting barrier that provides up to 5 times more protection than non-painted rotors. The RotorShield barrier is applied to the rotor hat to protect from unsightly rust and help maintain a like-new appearance. Our rotors are designed to effectively dissipate heat, helping to eliminate brake fade and increase the life of the pads and rotors. Carquest Premium painted brake rotors are designed for long-lasting and quiet braking with superior performance. Product Features: Engineered to withstand 120 hours of salt spray testing Meets or exceeds OE design for superior stopping power Exceeds ISO manufacturing guidelines (International Organization for Standardization) Matches OE vane size for proper cooling Optimal metallurgy and casting thickness to preventing warping Air gap eliminates brake fade and increases pad life Non-directional finish decreases break-in time",
        features: [
          "Engineered to withstand 120 hours of salt spray testing",
          "Meets or exceeds OE design for superior stopping power",
          "Exceeds ISO manufacturing guidelines (International Organization for Standardization)",
          "Matches OE vane size for proper cooling",
          "Optimal metallurgy and casting thickness to preventing warping",
          "Air gap eliminates brake fade and increases pad life",
          "Non-directional finish decreases break-in time",
        ],
      },
      {
        id: "rotor-003",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$129.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-7.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-9.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-10.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 139.7 mm Bolt Hole Quantity: 6 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 18 mm Hat Finish: Painted Height: 85.1 mm Inside Diameter: 211 mm Mounting Bolt Hole Circle Diameter: 139.7 mm Mounting Bolt Hole Quantity: 6 Nominal Thickness: 20 mm Outside Diameter: 344.7 mm Overall Height: 85.1 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 6",
        features: [],
      },
      {
        id: "rotor-004",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc: "",
        images: [],
        description:
          "Specifications Bolt Circle Diameter: 114.3 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 8 mm Hat Finish: Painted Height: 48.7 mm Inside Diameter: 168.1 mm Mounting Bolt Hole Circle Diameter: 114.3 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 9 mm Outside Diameter: 281.8 mm Overall Height: 48.7 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-005",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$129.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-15.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-16.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-18.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 114.3 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 25 mm Hat Finish: Painted Height: 49.3 mm Inside Diameter: 155.1 mm Mounting Bolt Hole Circle Diameter: 114.3 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 28 mm Outside Diameter: 296 mm Overall Height: 49.3 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-006",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$129.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-19.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-19.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-20.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-21.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-22.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 114.3 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 21 mm Hat Finish: Painted Height: 47 mm Inside Diameter: 152 mm Mounting Bolt Hole Circle Diameter: 114.3 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 23 mm Outside Diameter: 281.9 mm Overall Height: 47 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-007",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$129.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-23.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-23.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-26.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-25.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-24.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 114.3 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 23.4 mm Hat Finish: Painted Height: 46.8 mm Inside Diameter: 156 mm Mounting Bolt Hole Circle Diameter: 114.3 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 25 mm Outside Diameter: 305 mm Overall Height: 46.8 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-008",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$95.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-27.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-27.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-28.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-29.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-30.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 100 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 8.5 mm Hat Finish: Painted Height: 63.5 mm Inside Diameter: 181.5 mm Mounting Bolt Hole Circle Diameter: 100 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 10 mm Outside Diameter: 273.8 mm Overall Height: 63.5 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-009",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$149.99",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-31.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-31.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-32.jpg",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-33.webp",
        ],
        description:
          "Specifications Brake Surface Finish: Plain Disc Finish: Painted Edge Hat Finish: Painted Inside Diameter: 197 mm Nominal Thickness: 30 mm Outside Diameter: 343 mm Overall Height: 58.5 mm Rust Resistant Coating: Yes",
        features: [],
      },
      {
        id: "rotor-010",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$129.99",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-34.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-34.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-37.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-36.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-35.webp",
        ],
        description:
          "Specifications Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: .984 in Hat Finish: Painted Inner Bearing Cup: No Inside Diameter: 168.2 mm Mounting Bolt Hole Circle Diameter: 4.5 in Mounting Bolt Hole Quantity: 5 Nominal Thickness: 28 mm Outer Bearing Cup: No Outside Diameter: 305 mm Overall Height: 49.5 mm Pad Contact Surface Width: 53.5 mm Rust Resistant Coating: Yes Solid Or Vented Type Rotor: Vented Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-011",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$99.99",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-38.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-38.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-41.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-40.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-39.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 114.3 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 8.4 mm Hat Finish: Painted Height: 31.9 mm Inside Diameter: 167.1 mm Mounting Bolt Hole Circle Diameter: 114.3 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 10 mm Outside Diameter: 284 mm Overall Height: 31.9 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
      {
        id: "rotor-012",
        name: "Carquest Premium Painted Brake Rotor: Meets or Exceeds OE Specs, Features RotorShield",
        price: "$179.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-42.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-42.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-45.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-44.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/rotor-43.webp",
        ],
        description:
          "Specifications Bolt Circle Diameter: 115 mm Bolt Hole Quantity: 5 Brake Surface Finish: Plain Disc Finish: Painted Edge Discard Thickness: 23 mm Hat Finish: Painted Height: 45.4 mm Inside Diameter: 161 mm Mounting Bolt Hole Circle Diameter: 115 mm Mounting Bolt Hole Quantity: 5 Nominal Thickness: 26 mm Outside Diameter: 300 mm Overall Height: 45.4 mm Rust Resistant Coating: Yes Stud/Lug Hole Quantity: 5",
        features: [],
      },
    ],
  },
  "spark-plug": {
    id: "spark-plug",
    name: "Spark Plug",
    products: [
      {
        id: "sparkplug-001",
        name: "ACDelco Iridium Spark Plug: Advanced Technology for Superior Durability",
        price: "$12.99",
        partnumber: "",
        sku: "SKU-001",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-10.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-10.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-11.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Fine Wire Center Electrode Insulator Tip Projection: 3 mm Center Electrode Tip Material: Iridium Electrical Terminal Type: Non-Removable Nut Grade Type: Regular Ground Configuration: Standard Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Standard Ground Electrode Tip Material: Platinum Hex Size: 16 MM Hex Type: Hex Indexed: No Insulator Height: 2.07 in Insulator Material: Aluminum Oxide Manufacturer Heat Range: 14 Pre-Gap Size: 0.040 in Reach: 25 mm Resistance: 7000 ohm Resistor Type: Yes Seat Type: Tapered Skirt: No Thread Diameter: 0.55 in Washer(s) Included: No",
        features: [],
      },
      {
        id: "sparkplug-002",
        name: "ACDelco Iridium Spark Plug: Reliable Cold Starting & Smooth Performance",
        price: "$12.99",
        partnumber: "",
        sku: "SKU-002",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-12.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-12.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Fine Wire Electrical Terminal Type: Non-Removable Nut Ground Configuration: Standard Ground Electrode Core Material: Copper Ground Electrode Tip Design: Platinum Ground Electrode Tip Material: Platinum Hex Size: 16 mm Hex Type: Hex Indexed: No Insulator Height: 0.972 in Manufacturer Heat Range: 14 Pre-Gap Size: 0.04 in Reach: 0.689 in Skirt: No Thread Diameter: 14.0 mm Washer Included: No",
        features: [],
      },
      {
        id: "sparkplug-003",
        name: "Autolite Double Platinum Spark Plug: Enhanced Durability & Performance",
        price: "$10.99",
        partnumber: "",
        sku: "SKU-003",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-6.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-6.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Standard Center Electrode Projection: Mid Projection Center Electrode Tip Material: Platinum Electrical Terminal Type: Non-Removable Nut Grade Type: Performance Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Taper Cut Ground Electrode Tip Material: Platinum Hex Size: 14 in Hex Type: Hex Indexed: No Insulator Material: Ceramic Manufacturer Heat Range: 11 Pre-Gap Size: 0.044 in Reach: 1.043 in Resistor Type: Yes Seat Type: Flat Skirt: Yes Thread Diameter: 12 mm Washer(s) Included: Ye",
        features: [],
      },
      {
        id: "sparkplug-004",
        name: "Autolite Iridium Iridium Ultra Fine Wire Spark Plug: Laser Welded for Precision Ignition",
        price: "$10.99",
        partnumber: "",
        sku: "SKU-004",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-2.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-2.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-3.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Iridium Electrical Terminal Type: Stud Center Electrode Tip Material: Iridium Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Tapered Ground Electrode Tip Material: Platinum Reach: 1.043 in Reach: 26.5 mm Resistance: 4000 Pre-Gap Size: 0.04 in Pre-Gap Size: 1 mm Thread Diameter: 12 mm Hex Size: 9/16″ in Hex Size: 14 mm Seat Type: Flat Resistor Type: Yes",
        features: [],
      },
      {
        id: "sparkplug-005",
        name: "Autolite Iridium Iridium XP Fine wire Spark Plug: Improved Durability, More Focused Ignition",
        price: "$10.99",
        partnumber: "",
        sku: "SKU-005",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-4.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-4.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-5.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Platinum Center Electrode Tip Material: Iridium Electrical Terminal Type: Stud Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Tapered Ground Electrode Tip Material: Platinum Hex Size: 9/16″ in Pre-Gap Size: 0.04 in Reach: 26.5 mm Resistance: 4000 Resistor Type: Yes Seat Type: Flat Thread Diameter: 12 mm",
        features: [],
      },
      {
        id: "sparkplug-006",
        name: "Champion Iridium Spark Plug (RER8ZWYCB4): Maximum Performance & Longevity",
        price: "$12.99",
        partnumber: "",
        sku: "SKU-006",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-17.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-17.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-18.webp",
        ],
        description:
          "Specifications Center Electrode Design: Fine Wire Center Electrode Diameter (Inch): 0.078 in Center Electrode Tip Material: Iridium Electrical Terminal Type: Non-Removable Nut Gap Style: J Gap Grade Type: Performance Ground Electrode Core Material: Nickel Ground Electrode Material: Nickel Copper Alloy Ground Electrode Quantity: 1 Ground Electrode Tip Design: J Gap Ground Electrode Tip Material: Iridium-Platinum Hex Size: 0.625 in Hex Type: Hex Indexed: No Installed Height (Inch): 1.99 in Insulator Height: 0.08 in Manufacturer Heat Range: 8 Part Description: Spark Plug Pre-Gap Size: 1.05 mm Reach: 1.103 in Resistor Type: Yes Seat Type: Flat Thread Diameter: 12.000 mm Washer Type: Crush Washer(s) Included: Yes",
        features: [],
      },
      {
        id: "sparkplug-007",
        name: "Motorcraft High-Performance Spark Plug: Enhances Fuel Efficiency",
        price: "$7.99",
        partnumber: "",
        sku: "SKU-007",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-13.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-13.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-14.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Standard Center Electrode Tip Material: Iridium Ground Electrode Tip Material: Nickel Hex Size: 16 Insulator Height: 3.5 Seat Type: Tapered",
        features: [],
      },
      {
        id: "sparkplug-008",
        name: "Motorcraft Spark Plug: Enhanced Durability & Optimized Performance",
        price: "$13.99",
        partnumber: "",
        sku: "SKU-008",
        imageSrc: "",
        images: [],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Standard Center Electrode Tip Material: Iridium Ground Electrode Tip Material: Platinum Hex Size: 16 Insulator Height: 3.5 Seat Type: Tapered",
        features: [],
      },
      {
        id: "sparkplug-009",
        name: "NGK Iridium IX Spark Plug (LKAR7BIX-11S): Extreme Ignitability & Durability",
        price: "$15.99",
        partnumber: "",
        sku: "SKU-009",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-15.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-15.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-16.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Fine Wire Center Electrode Insulator Tip Projection: 0.12 in Center Electrode Projection: Mid Projection Center Electrode Tip Material: Iridium Electrical Terminal Type: Non-Removable Nut Grade Type: Performance Ground Configuration: J-Gap Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Taper Cut Ground Electrode Tip Material: Nickel Hex Size: 14 mm Insulator Height: 1.93 in Insulator Material: Ceramic Manufacturer Heat Range: 7 Pre-Gap Size: .044 in Reach: 1.043 in Resistance: 5000.0 ohm Resistor Type: Yes Seat Type: Flat Skirt: No Skirt Length: 0.0 in Thread Diameter: 0.472 in Thread Size: M12 – 1.25 Washer Type: Crush Washer(s) Included: Yes",
        features: [],
      },
      {
        id: "sparkplug-010",
        name: "NGK Iridium IX Spark Plug (LKR7DIX-11S): Enhanced Acceleration & Durability",
        price: "$14.99",
        partnumber: "",
        sku: "SKU-010",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-7.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-7.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-8.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-9.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Fine Wire Center Electrode Insulator Tip Projection: 0.12 in Center Electrode Projection: Mid Projection Center Electrode Tip Material: Iridium Electrical Terminal Type: Non-Removable Nut Grade Type: Performance Ground Configuration: J-Gap Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Taper Cut Ground Electrode Tip Material: Nickel Hex Size: 5/8″ (16mm) Insulator Height: 2.01 in Insulator Material: Ceramic Manufacturer Heat Range: 7 Pre-Gap Size: .044 in Reach: 1.043 in Resistance: 5000.0 ohm Resistor Type: Yes Seat Type: Flat Skirt: No Skirt Length: 0.0 in Thread Diameter: 0.472 in Thread Size: M12 – 1.25 Washer Type: Crush Washer(s) Included: Yes",
        features: [],
      },
      {
        id: "sparkplug-011",
        name: "NGK Iridium IX Spark Plug (LTR5IX-11): Extreme Ignitability & Durability",
        price: "$10.99",
        partnumber: "",
        sku: "SKU-011",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-1.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Fine Wire Center Electrode Insulator Tip Projection: 0.14 in Center Electrode Projection: Mid Projection Center Electrode Tip Material: Iridium Electrical Terminal Type: Non-Removable Nut Gap Size: 0.044 in Grade Type: Performance Ground Configuration: J-Gap Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Taper Cut Ground Electrode Tip Material: Nickel Hex Size: 5/8″ (16mm) Insulator Height: 2.07 in Insulator Material: Ceramic Manufacturer Heat Range: 5 Pre-Gap Size: .044 in Reach: 0.984 in Resistance: 5000.0 ohm Resistor Type: Yes Seat Type: Tapered Skirt: No Skirt Length: 0.0 in Thread Diameter: 0.551 in Thread Size: M14 – 1.25 Washer(s) Included: No",
        features: [],
      },
      {
        id: "sparkplug-012",
        name: "NGK Laser Iridium Spark Plug (LZFR5CI-11): Fine Wire Tip for Precision",
        price: "$13.99",
        partnumber: "",
        sku: "SKU-012",
        imageSrc:
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-19.webp",
        images: [
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-19.webp",
          "https://gaurdedaccesssolutionsllc.com/wp-content/uploads/2026/04/sparkplug-20.webp",
        ],
        description:
          "Specifications Center Electrode Core Material: Copper Center Electrode Design: Fine Wire Center Electrode Insulator Tip Projection: 0.20 in Center Electrode Projection: Long Projection Center Electrode Tip Material: Iridium Electrical Terminal Type: Non-Removable Nut Grade Type: Performance Ground Configuration: J-Gap Ground Electrode Core Material: Nickel Ground Electrode Quantity: 1 Ground Electrode Tip Design: Standard Ground Electrode Tip Material: Nickel Hex Size: 5/8″ (16mm) Insulator Height: 1.99 in Insulator Material: Ceramic Manufacturer Heat Range: 5 Pre-Gap Size: .044 in Reach: 1.043 in Resistance: 5000.0 ohm Resistor Type: Yes Seat Type: Flat Skirt: No Skirt Length: 0.0 in Thread Diameter: 0.551 in Thread Size: M14 – 1.25 Washer Type: Crush Washer(s) Included: Yes",
        features: [],
      },
    ],
  },
};
