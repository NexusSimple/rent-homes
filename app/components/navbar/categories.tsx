import Container from "@/app/components/container";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach } from "react-icons/tb";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
];

const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            description={category.description}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
