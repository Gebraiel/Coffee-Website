import CoffeeList from "./componenets/CoffeeList";
import MotionComponent from "./componenets/MotionComponent";
export default async function Home() {
  const res =  await fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json")
  const products = await res.json();
  return (
      <div className="bg-[rgb(27,29,31)] w-[90%] max-w-8xl sm:p-14 p-5 rounded-2xl z-0 my-[100px]">
        <MotionComponent as={'div'} props={{initial:{opacity:0},animate:{opacity:1}}} className="text-center">
            <h1 className="sm:text-[2rem] text-white text-2xl font-bold text-center">Our Collection</h1> 
            <p className="w-[90%] max-w-[500px] text-[#6F757C] sm:text-base text-xs mt-3 m-auto text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </MotionComponent>
        <CoffeeList products={products}/>
      </div>
  );
}
