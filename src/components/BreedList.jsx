import Card from "./Card";

const BreedList = () => {
  return (
    <div className="grid grid-cols-2">
      <FetchBreed />
    </div>
  );
};

const FetchBreed = async () => {
  "use server";
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
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
