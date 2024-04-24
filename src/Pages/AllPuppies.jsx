import { useEffect, useState } from "react";
import PuppyList from "../components/PuppyList";
import AddPuppy from "../components/AddPuppyForm";

const AllPuppies = ({apiUrl}) => {
  const [puppyList, setPuppyList] = useState([]);

  const fetchPuppies = async () => {
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      console.log(result.data);
      setPuppyList(result.data.players)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPuppies()
  }, []);

  return (
    <>
      <AddPuppy apiUrl={apiUrl} fetchPuppies={fetchPuppies} />
      <PuppyList apiUrl={apiUrl} puppyList={puppyList} fetchPuppies={fetchPuppies} />
    </>
  )
}

export default AllPuppies