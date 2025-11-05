import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SeachControls } from "./ui/SeachControls";
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        desciption="Descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrum
        currentPage="Buscador de héroes"
        breadcrumbs={[
          { label: "Home 1", to: "/" },
          { label: "Home 2", to: "/" },
          { label: "Home 3", to: "/" },
        ]}
      />

      <HeroStats />

      <SeachControls />
    </>
  );
};

export default SearchPage;
