import React from "react";
import Category from "./Category/Category";
import { Col, Row } from "antd";
import SubCategoriesList from "./SubCategory/SubCategoriesList";

function HomePage() {
  const categories = [
    {
      imageUrl: "",
      name: "Aesthetics",
      products: [],
      subcategories: [
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Additional Fan Case",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img1.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 26,
          imageUrl: "",
          name: "Case",
          products: [
            {
              id: 131,
              name: "Daylight Daylight Daylight",
              _id: "8dd687f6-f89c-4320-ae7b31cc3",
              url: "/images/img1.jpg",
              url: "/images/img2.jpg",
            },
            {
              id: 198,
              name: "Phaneteks - Black",
              _id: "50a9a5dfc-aa67-b4618bdaf575",
            },
            { id: 8, name: "Niteride", _id: "502##5a9a5dfc-aa67-b4618bdaf575" },
          ],
          subcategories: [],
          url: "/aesthetics/case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Internal Lighting",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img3.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Wiring",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img4.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
      ],
      _id: "ef8ff2bb-f012-45da-916f-d48cd1a75966",
    },
    {
      imageUrl: "",
      name: "Components",
      products: [],
      subcategories: [
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Additional Fan Case",
          products: [
            {
              id: 119,
              name: "product1",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img1.jpg",
            },
            {
              id: 118,
              name: "product2",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
              url: "/images/img1.jpg",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 26,
          imageUrl: "",
          name: "Case",
          products: [
            {
              id: 131,
              name: "Daylight Daylight Daylight",
              _id: "8dd687f6-f89c-4320-ae7b31cc3",
              url: "/images/img1.jpg",
              url: "/images/img2.jpg",
            },
            {
              id: 198,
              name: "Phaneteks - Black",
              _id: "50a9a5dfc-aa67-b4618bdaf575",
            },
            { id: 8, name: "Niteride", _id: "502##5a9a5dfc-aa67-b4618bdaf575" },
          ],
          subcategories: [],
          url: "/aesthetics/case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Internal Lighting",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img3.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Wiring",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img4.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
      ],
      _id: "ef8ff2bb-f012-45da-916f-d48cd1a75966",
    },
    {
      imageUrl: "",
      name: "Services",
      products: [],
      subcategories: [
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Additional Fan Case",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img1.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 26,
          imageUrl: "",
          name: "Case",
          products: [
            {
              id: 131,
              name: "Daylight Daylight Daylight",
              _id: "8dd687f6-f89c-4320-ae7b31cc3",
              url: "/images/img1.jpg",
              url: "/images/img2.jpg",
            },
            {
              id: 198,
              name: "Phaneteks - Black",
              _id: "50a9a5dfc-aa67-b4618bdaf575",
            },
            { id: 8, name: "Niteride", _id: "502##5a9a5dfc-aa67-b4618bdaf575" },
          ],
          subcategories: [],
          url: "/aesthetics/case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Internal Lighting",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img3.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Wiring",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img4.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
      ],
      _id: "ef8ff2bb-f012-45da-916f-d48cd1a75966",
    },
    {
      imageUrl: "",
      name: "Peripherals",
      products: [],
      subcategories: [
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Additional Fan Case",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img1.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 26,
          imageUrl: "",
          name: "Case",
          products: [
            {
              id: 131,
              name: "Daylight Daylight Daylight",
              _id: "8dd687f6-f89c-4320-ae7b31cc3",
              url: "/images/img1.jpg",
              url: "/images/img2.jpg",
            },
            {
              id: 198,
              name: "Phaneteks - Black",
              _id: "50a9a5dfc-aa67-b4618bdaf575",
            },
            { id: 8, name: "Niteride", _id: "502##5a9a5dfc-aa67-b4618bdaf575" },
          ],
          subcategories: [],
          url: "/aesthetics/case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Internal Lighting",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img3.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
        {
          description: "",
          id: 27,
          imageUrl: "",
          name: "Wiring",
          products: [
            {
              id: 119,
              name: "1x Arctic P12 PWM PST Case Fan",
              _id: "8dd687f6-f89c-4320-ae70-fca688b31cc3",
              url: "/images/img4.jpg",
            },
            {
              id: 118,
              name: "2x Arctic P12 PWM PST Case Fan",
              _id: "50a9a5df-06de-4d6c-aa67-b4618bdaf575",
            },
          ],
          subcategories: [],
          url: "/aesthetics/additional-fan-case/",
        },
      ],
      _id: "ef8ff2bb-f012-45da-916f-d48cd1a75966",
    },
  ];
  return (
    <div>
      <Row>
        <Col span={20}>
          <SubCategoriesList categories={categories} />
        </Col>
        <Col span={4}>
          <Category categories={categories} />
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
