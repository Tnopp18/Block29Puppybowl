import { useState } from "react";

const AddPuppy = ({ apiUrl, fetchPuppies }) => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          breed,
          imageUrl: ""
        }),
      });
      const result = await response.json();
      console.log(result);

      if(result.success){
        console.log('Success');
        await fetchPuppies;
      } else{
        console.log('whoops');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handlePost}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Breed:{" "}
        <input
        type="text"
        value={breed}
        onChange={(e) => {
          setBreed(e.target.value)
        }}
        />
      </label>
      <input type="submit" value="Add Puppy!" />
    </form> 
  );
};

export default AddPuppy