"use client";

import { Navigation } from "./navigation/HomeNav";
import Container from "./ui/container";
import { useNavigation } from "@/hooks/useNavigation";

export const Header = () => {
  const { navItemsHeader } = useNavigation();

  return (
    <Container className="mb-10 flex h-16 items-center justify-between px-4 md:px-8">
      <h1 className="text-xl font-bold md:text-2xl">Epytogo</h1>
      <nav className="flex items-center gap-4">
        <Navigation navItems={navItemsHeader} />
      </nav>
    </Container>
  );
};
