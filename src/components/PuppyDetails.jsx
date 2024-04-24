import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PuppyDetails = ({ apiUrl }) => {
  const { id } = useParams();
  const [puppy, setPuppy] = useState([]);
  const navigate = useNavigate();

  const fetchPuppyDetails = async () => {
    try {
      const response = await fetch(`${apiUrl}/${id}`)
      const result = await response.json();
      console.log(result)
      setPuppy(result.data.player);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPuppyDetails();
  }, []);

 

  return (
    <div>
      <h1>{puppy.name}</h1>
      <p>Breed: {puppy.breed}</p>
      <p>Status {puppy.status}</p>
      <img src={puppy.imageUrl} />
    </div>
  )
}

export default PuppyDetails