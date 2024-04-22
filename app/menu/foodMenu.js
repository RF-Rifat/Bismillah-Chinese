/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  Button,
  CardFooter,
  Typography,
  CardBody,
  Card,
  CardHeader,
} from "@material-tailwind/react";

export function FoodMenu({ foodData }) {
  if (!foodData || foodData.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <Typography color="gray" className="font-medium text-xl">
           Not Available At the Moment
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-6">
        {foodData.map((cardData) => (
          <Card key={cardData._id} className="bg-[#C1F0C1]">
            <CardHeader shadow={false} floated={false} className="h-60">
              <img
                src={cardData.imageSrc}
                alt="card-image"
                className="h-60 w-full object-cover"
                loading="lazy"
                style={{
                  objectFit: "fill",
                }}
              />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography
                  variant="small"
                  className="font-normal opacity-90"
                >
                  {cardData.category}
                </Typography>
                <Typography color="blue-gray" className="font-medium">
                  {cardData.price}
                </Typography>
              </div>

              <Typography color="blue-gray" className="font-medium h-10">
                {cardData.title}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="green" className="flex items-center gap-3">
                বিস্তারিত দেখুন
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
