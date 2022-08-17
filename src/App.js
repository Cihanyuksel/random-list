import { useState } from 'react';
import './index.css';
import { randomLists } from './util';

function App() {
  const [groups, setGroups] = useState([]);
  const [value, setValue] = useState('');
  const [numberInGroup, setNumberInGroup] = useState();

  const handleClick = () => {
    const splitValue = value.split(/\r?\n/).filter((value) => value !== '');

    if (numberInGroup <= 0) {
      setGroups([]);
      return;
    }

    const groupsRandom = randomLists(splitValue, parseInt(numberInGroup));
    setGroups(groupsRandom);
    
  };
  return (
    <div className="flex flex-col items-center py-2">
      {groups.length > 0 && (
        <div className="grid grid-cols-2">
          {groups.map((group, i) => (
            <div key={i} className="flex items-center">
              <h1>Group {i + 1}:</h1>
              <div className="flex items-center my-1">
                {group.map((value, i) => (
                  <div
                    key={i}
                    className="bg-gray-400 text-white px-2 py-1 rounded-md mx-1"
                  >
                    <span className="text-[0.7rem] text-gray-200 bg-gray-500 px-2 py-1 rounded-full mr-2 inline-flex items-center justify-center">{i + 1}</span>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <h1 className="font-weight text-xl">Random lists</h1>
      <textarea
        onChange={(e) => setValue(e.target.value)}
        className="border-2 border-black"
        cols={40}
        rows={15}
      ></textarea>
      <div className="my-1">
        <div>
          <label>Member in group: </label>
          <input
            className="border border-black"
            type="number"
            onChange={(e) => setNumberInGroup(e.target.value)}
          />
        </div>
        <button
          onClick={handleClick}
          className="bg-blue-700 px-2 py-1 hover:bg-blue-500 text-white rounded-md my-2"
        >
          Return
        </button>
      </div>
    </div>
  );
}

export default App;