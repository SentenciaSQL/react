import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SeachControls } from "./ui/SeachControls";
import { CustomBreadcrum } from "@/components/custom/CustomBreadcrum";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { searchHeroesAction } from "@/heroes/actions/search-heroes.action";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;
  const strength = searchParams.get("strength") ?? undefined;

  const { data: heroes = [] } = useQuery({
    queryKey: ["search", { name, strength }],
    queryFn: () => searchHeroesAction({ name, strength }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      <CustomJumbotron
        title="Búsqueda de SuperHéroes"
        desciption="Descubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrum
        currentPage="Buscador de héroes"
        // breadcrumbs={[
        //   { label: "Home 1", to: "/" },
        //   { label: "Home 2", to: "/" },
        //   { label: "Home 3", to: "/" },
        // ]}
      />

      <HeroStats />

      <SeachControls />

      <HeroGrid heroes={heroes} />
    </>
  );
};

export default SearchPage;
