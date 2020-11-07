import { useState, useEffect } from 'react';

import Navigation from '../components/navigation';

const index = () => {
  const [leftMenu, updateLeftMenu] = useState(['Home']);
  const [rightMenu, updateRightMenu] = useState([]);
  const colourChoices = [
    { buttonColour: 'blue', textColour: 'orange', outlineColour: 'gray', name: 'Blue', id: 0 },
    { buttonColour: 'green', textColour: 'white', outlineColour: 'red', name: 'Green', id: 1 },
    { buttonColour: 'red', textColour: 'black', outlineColour: 'pink', name: 'Red', id: 2 }
  ];

  const ownChoiceLimit = 9;

  const [ownChoiceMenuItem, setOwnChoiceMenuItem] = useState('');
  const myItem = ownChoiceMenuItem ? ownChoiceMenuItem : 'First Choice';
  const [ownChoiceSelected, setOwnChoiceSelected] = useState(false);
  const [ownChoiceMenuItemTwo, setOwnChoiceMenuItemTwo] = useState('');
  const myItem2 = ownChoiceMenuItemTwo ? ownChoiceMenuItemTwo : 'Second Choice';
  const [ownChoiceSelectedTwo, setOwnChoiceSelectedTwo] = useState(false);
  const [ownChoiceMenuItemThree, setOwnChoiceMenuItemThree] = useState('');
  const myItem3 = ownChoiceMenuItemThree ? ownChoiceMenuItemThree : 'Third Choice';
  const [ownChoiceSelectedThree, setOwnChoiceSelectedThree] = useState(false);
  const [ownChoiceMenuItemFour, setOwnChoiceMenuItemFour] = useState('');
  const myItem4 = ownChoiceMenuItemFour ? ownChoiceMenuItemFour : 'Fourth Choice';
  const [ownChoiceSelectedFour, setOwnChoiceSelectedFour] = useState(false);
  const [selectedColourScheme, setColourScheme] = useState(1);

  const changeMenuItemSelectionLeft = (bool, target) => {
    if (target === ownChoiceMenuItem) {
      setOwnChoiceSelected(bool);
    }
    if (target === ownChoiceMenuItemTwo) {
      setOwnChoiceSelectedTwo(bool);
    }

    for (let i = 0; i < rightMenu.length; i++) {
      if (rightMenu[i] === target) {
        return;
      }
    }

    if (bool) {
      updateLeftMenu([...leftMenu, target]);
    } else {
      updateLeftMenu(
        leftMenu.filter((element) => {
          return element != target;
        })
      );
    }
  };

  const changeMenuItemSelectionRight = (bool, target) => {
    if (target === ownChoiceMenuItemThree) {
      setOwnChoiceSelectedThree(bool);
    }
    if (target === ownChoiceMenuItemFour) {
      setOwnChoiceSelectedFour(bool);
    }

    for (let i = 0; i < leftMenu.length; i++) {
      if (leftMenu[i] === target) {
        return;
      }
    }

    if (bool) {
      updateRightMenu([...rightMenu, target]);
    } else {
      updateRightMenu(
        rightMenu.filter((element) => {
          return element != target;
        })
      );
    }
  };

  const possibleMenuItems = ['Home', 'About', 'Products', 'Pricing', 'Contact', 'Blog', 'Info'];

  useEffect(() => {
    document.getElementById('Home').checked = true;
  }, []);

  return (
    <>
      <Navigation
        options={{
          leftMenu: leftMenu,
          rightMenu: rightMenu,
          buttonBackground: colourChoices[selectedColourScheme].buttonColour
        }}
      />
      <div style={{ marginLeft: 20, marginRight: 20, display: 'flex', justifyContent: 'space-between' }}>
        {/*################### /
        /* Left Menu Selection */
        /* ################### */}
        <div
          style={{
            backgroundColor: 'lightseagreen',
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10
          }}
        >
          <h2>Left Menu Items</h2>
          <form onChange={(event) => changeMenuItemSelectionLeft(event.target.checked, event.target.id)}>
            {possibleMenuItems.map((item) => {
              return (
                <>
                  <input type="checkbox" id={item} name={item} value={item}></input>
                  <label for={item}> {item} </label>
                  <br></br>
                </>
              );
            })}
            <br></br>
            <input
              type="text"
              size={ownChoiceLimit + 2}
              maxLength={ownChoiceLimit}
              onChange={(event) => {
                if (!ownChoiceSelected && event.target.value.length < ownChoiceLimit + 1) {
                  setOwnChoiceMenuItem(event.target.value);
                }
              }}
            ></input>
            <input type="checkbox" id={myItem} name={myItem} value={myItem}></input>
            <label for={myItem}> {ownChoiceMenuItem} </label>
            <br></br>
            <input
              type="text"
              size={ownChoiceLimit + 2}
              maxLength={ownChoiceLimit}
              onChange={(event) => {
                if (!ownChoiceSelectedTwo && event.target.value.length < ownChoiceLimit + 1) {
                  setOwnChoiceMenuItemTwo(event.target.value);
                }
              }}
            ></input>
            <input type="checkbox" id={myItem2} name={myItem2} value={myItem2}></input>
            <label for={myItem2}> {ownChoiceMenuItemTwo} </label>
          </form>
        </div>
        <div
          style={{
            backgroundColor: 'lightsalmon',
            paddingBottom: 10,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 10
          }}
        >
          {/*################### /
            /* Right Menu Selection */
          /* ################### */}
          <h2>Right Menu Items</h2>
          <form onChange={(event) => changeMenuItemSelectionRight(event.target.checked, event.target.id)}>
            {possibleMenuItems.map((item) => {
              return (
                <>
                  <input type="checkbox" id={item} name={item} value={item}></input>
                  <label for={item}> {item} </label>
                  <br></br>
                </>
              );
            })}
            <br></br>
            <input
              type="text"
              size={ownChoiceLimit + 2}
              maxLength={ownChoiceLimit}
              onChange={(event) => {
                if (!ownChoiceSelectedThree && event.target.value.length < ownChoiceLimit + 1) {
                  setOwnChoiceMenuItemThree(event.target.value);
                }
              }}
            ></input>
            <input type="checkbox" id={myItem3} name={myItem3} value={myItem3}></input>
            <label for={myItem3}> {ownChoiceMenuItemThree} </label>
            <br></br>
            <input
              type="text"
              size={ownChoiceLimit + 2}
              maxLength={ownChoiceLimit}
              onChange={(event) => {
                if (!ownChoiceSelectedFour && event.target.value.length < ownChoiceLimit + 1) {
                  setOwnChoiceMenuItemFour(event.target.value);
                }
              }}
            ></input>
            <input type="checkbox" id={myItem4} name={myItem4} value={myItem4}></input>
            <label for={myItem4}> {ownChoiceMenuItemFour} </label>
          </form>
        </div>
      </div>
      <div
        style={{
          backgroundColor: 'lightseagreen',
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 10
        }}
      >
        {/*####################### /
        /* Colour Scheme Selection */
        /* ####################### */}
        <h2>Top Menu Colour Scheme</h2>
        <form onChange={(event) => changeMenuItemSelectionLeft(event.target.checked, event.target.id)}>
          {colourChoices.map((item) => {
            return (
              <>
                <button
                  onClick={() => setColourScheme(item.id)}
                  style={{
                    backgroundColor: item.buttonColour,
                    color: item.textColour,
                    borderColor: item.outlineColour,
                    width: '10%',
                    height: '50px',
                    fontSize: '2em',
                    id: item.name,
                    margin: 10
                  }}
                >
                  {item.name}
                </button>
              </>
            );
          })}
          <br></br>
        </form>
        {selectedColourScheme}
      </div>
    </>
  );
};

export default index;
