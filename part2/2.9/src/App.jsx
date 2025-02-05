import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Mayookha', number: '040-123456', id: 1 },
    { name: 'Ashwin', number: '39-44-5323523', id: 2 },
    { name: 'Adarsh', number: '12-43-234345', id: 3 },
    { name: 'Ajay', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault(); 

    const nameExists = persons.some(person => person.name === newName);
    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, number: newNumber, id: persons.length + 1 };
    setPersons(persons.concat(newPerson));

    setNewName('');
    setNewNumber('');
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      {/* Search field */}
      <div>
        <input 
          value={searchTerm} 
          onChange={handleSearchChange} 
          placeholder="Search by name"
        />
      </div>

      {/* Add new contact form */}
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>

      {/* Display filtered list of people */}
      <ul>
        {filteredPersons.map(person => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;