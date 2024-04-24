import { Link } from 'react-router-dom';
import { useState } from 'react';


const PuppyList = ({ puppyList, apiUrl, }) => {
  const [search, setSearch] = useState('');

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const filteredPuppies = puppyList.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const deleteButton = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      const result = await response.json()
      console.log(result);

      if (response.ok) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <input
      type='text'
      placeholder='Search by name'
      value={search}
      onChange={handleSearchInput}
      />
      <ul>
        {filteredPuppies.map(player => (
          <li key={player.id}>
            <Link id='nameLink' to={`/players/${player.id}`}>{player.name}</Link>
            <div>
              <p>Breed: {player.breed}</p>
              <p><img src={player.imageUrl} alt="" /></p>
              <button onClick={() => deleteButton(player.id)}>Delete Doggo</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default PuppyList