import Card from "./Card";

const BreedList = () => {
  return <FetchBreed />;
};

const FetchBreed = async () => {
  "use server";
  const response = await fetch("https://api.thedogapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const breeds = await response.json();
  return breeds.map((breed) => {
    return <Card key={breed.id} breedGroup={breed.breed_group} origin={breed.origin} image={breed.image.url} />;
  });
};

export default BreedList;
