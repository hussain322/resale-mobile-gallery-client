import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const Phones = () => {
  // const { data } = useQuery({
  //   queryKey: ["category"],
  //   queryFn: () =>
  //     fetch(`http://localhost:5000/category/${data._id}`).then((res) =>
  //       res.json()
  //     ),
  // });
  // console.log(data);
  const category = useLoaderData();
  console.log(category);

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
    <div>
      <h1 className="text-6xl text-center mt-20">{category.category_title}</h1>
      <div>{}</div>
    </div>
  );
};

export default Phones;
