import BreedList from "../components/BreedList";
import Search from "../components/Search";
import { Suspense } from "react";

export default function Page({ searchParams }) {
  return (
    <div>
      <Search />

      <Suspense fallback={<div>Loading...</div>}>
        <BreedList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
