import Item from "./Item";
import {
  CONTACT,
  BUILDING_CONSTRUCTION_1,
  BUILDING_CONSTRUCTION_2,
  SALE_RENT_LEASE,
} from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={CONTACT} title="CONTACT US" />
      <Item Links={BUILDING_CONSTRUCTION_1} title="BUILDING & CONSTRUCTION" />
      <Item Links={BUILDING_CONSTRUCTION_2} title="BUILDING & CONSTRUCTION" />
      <Item Links={SALE_RENT_LEASE} title="SALE RENT LEASE" />
    </div>
  );
};

export default ItemsContainer;
