import Image from "next/image";
import CoffeeList from "./componenets/CoffeeList";

export default async function Home() {
  console.log("Hello");
  const res =  await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
  const products = await res.json();
  console.log("products:",products)
  return (
      <div className="bg-[#1B1D1F] w-[90%] max-w-8xl sm:p-14 p-5 absolute rounded-2xl xl:top-1/6 lg:top-1/4 top-1/8">
        <div className="container text-center">
          <h1 className="sm:text-[2rem] text-2xl font-bold">Our Collection</h1> 
          <p className="w-[90%] max-w-[500px] text-[#6F757C] sm:text-base text-xs mt-3 m-auto">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </div>
        <CoffeeList products={products}/>
      </div>
  );
}
