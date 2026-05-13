import ItemCards from "../Components/ItemCards";
const Wishlist = () => {
  return <div className="h-screen w-full bg-zinc-900" id="main">
    <div className="flex flex-wrap gap-2 p-4">
      <ItemCards/>
      <ItemCards/>
      <ItemCards/>
    </div>
  </div>;
};

export default Wishlist;
