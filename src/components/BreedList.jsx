import Card from "./Card";

const BreedList = ({ searchParams }) => {
  return (
    <div className="grid grid-cols-2">
      <FetchBreed searchParams={searchParams} />
    </div>
  );
};

const FetchBreed = async ({ searchParams }) => {
  "use server";
  const { query } = await searchParams;
  const url = query ? `https://api.thedogapi.com/v1/breeds/search?q=${query}` : "https://api.thedogapi.com/v1/breeds";
  try {
    const response = await fetch(url, {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    const breeds = await response.json();

    return breeds.map((breed) => {
      return (
        <div key={breed.id}>
          <Card id={breed.id} breedGroup={breed.breed_group} origin={breed.origin} image={breed.image.url} />
        </div>
      );
    });
  } catch (error) {
    return <p>Failed to load breeds. Please try again later.</p>;
  }
};

export default BreedList;
