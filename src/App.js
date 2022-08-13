import './App.css';
import { useState } from 'react';


function App() {

  const [sira, setSira] = useState('X');
  const [kutu, setKutu] = useState(Array(9).fill(''));
  const [kazanankisi, setKazanankisi] = useState();
  const kazanan = (kutular) => {
    let cizgi = {
      yan: [[0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],],
      asagi: [[0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],],
      capraz: [[0, 4, 8],
      [2, 4, 6],],
    };
    for (let cizgiler in cizgi) {
      cizgi[cizgiler].forEach((pattern) => {
        if (kutular[pattern[0]] === '' || kutular[pattern[1]] === '' || kutular[pattern[2]] === '') {
        } else if (kutular[pattern[0]] === kutular[pattern[1]] &&
          kutular[pattern[1]] === kutular[pattern[2]]
        ) {
          setKazanankisi(kutular[pattern[0]]);
        }

      });
    }
  };

  const tiklaninca = (id) => {
    if (kutu[id] !== '') { return; }

    let kutular = [...kutu];
    if (sira === "X") { kutular[id] = 'X'; setSira("O"); } else { kutular[id] = 'O'; setSira("X"); }
    kazanan(kutular);
    setKutu(kutular);

  }

  const yenile=()=>{
		setKazanankisi(null);
		setKutu(Array(9).fill(''));
  }



  const Kutucuk = ({ id }) => { return <td className='ickutu' onClick={() => tiklaninca(id)}>{kutu[id]}</td>; };

  return (
    <div className="App">
      <div className='diskutu'>
        <p>Sıra = {sira}</p>
        {kazanankisi && (
          <>
            <h3 className='kazanan'>{kazanankisi} kazandı!</h3>
            <button onClick={() => yenile()}>Yeniden dene</button>
          </>
        )}
        <tr>
          <Kutucuk id={0} />
          <Kutucuk id={1} />
          <Kutucuk id={2} />
        </tr>
        <tr>
          <Kutucuk id={3} />
          <Kutucuk id={4} />
          <Kutucuk id={5} />
        </tr>
        <tr>
          <Kutucuk id={6} />
          <Kutucuk id={7} />
          <Kutucuk id={8} />
        </tr>
        <button onClick={() => yenile()}>Temizle</button>

      </div>
    </div>
  );
}

export default App;
