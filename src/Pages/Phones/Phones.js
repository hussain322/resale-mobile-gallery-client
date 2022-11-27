import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BuyNowModal from "../BuyNowModal/BuyNowModal";
import PhoneCard from "./PhoneCard";

const Phones = () => {
  const category = useLoaderData();
  const [phoneDetails, setPhoneDetails] = useState(null);

  const { data: phones = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch(`http://localhost:5000/phones`).then((res) => res.json()),
  });
  console.log(phones);
  const categoryPhones = phones.filter(
    (p) => p.category_id === category.category_id
  );
  console.log(categoryPhones);

  return (
    <div className="bg-purple-200">
      <h1 className="text-4xl text-center pt-20 font-semibold">
        {category.category_title}
      </h1>
      <div className="w-[90%] mx-auto py-20 grid grid-cols-1 gap-10">
        {categoryPhones.map((phone) => (
          <PhoneCard
            key={phone._id}
            phone={phone}
            setPhoneDetails={setPhoneDetails}
          />
        ))}
      </div>
      {phoneDetails && (
        <BuyNowModal
          setPhoneDetails={setPhoneDetails}
          phoneDetails={phoneDetails}
        ></BuyNowModal>
      )}
    </div>
  );
};

export default Phones;
