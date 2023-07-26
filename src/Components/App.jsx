import React,{useState} from "react";
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer';

function App(){

    const [objectArray, setObjectArray] = useState([]);

    function AddValuesToTheObjectArray(newNote) {
      setObjectArray((prevArray) => [...prevArray, newNote]);
      console.log(objectArray);
    }

    function DeleteItem(index) {
        let tempArr = [...objectArray]; 
        tempArr.splice(index, 1);
        setObjectArray(tempArr);
      }

    return <div>
        <Header />
        <CreateArea onClicking={AddValuesToTheObjectArray} />
        {objectArray.map((note, index) => (
            <Note
              key={index}
              id={index} 
              title={note.title}
              content={note.content}
              igotclicked={DeleteItem}
            />
      ))}
        <Footer />
    </div>
}

export default App;