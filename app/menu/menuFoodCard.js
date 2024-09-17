"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/24/outline";

const MenuFoodCard = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-8">
      {cardData?.map((cardData) => (
        <Card
          key={cardData.id}
          className="bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <CardHeader
            shadow={false}
            floated={false}
            className="h-60 relative overflow-hidden rounded-t-lg"
          >
            <Image
              src={cardData?.imageSrc}
              alt="card-image"
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              loading="lazy"
              fill
            />
          </CardHeader>
          <CardBody className="px-6 py-4">
            <div className="mb-3 flex items-center justify-between">
              <Typography color="blue-gray" className="font-semibold text-lg">
                {cardData?.title}
              </Typography>
              <Typography color="green" className="font-bold text-lg">
                $95
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-80 text-justify"
            >
              {cardData?.description}
            </Typography>
          </CardBody>
          <CardFooter className="px-6 py-4 pt-2">
            <Button className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white flex items-center justify-center gap-2 hover:from-green-500 hover:to-green-700 transition-all duration-300">
              <EyeIcon className="h-5 w-5" /> বিস্তারিত দেখুন
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MenuFoodCard;
