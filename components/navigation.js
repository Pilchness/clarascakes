import { useState, useEffect } from 'react';

const divStyle = { backgroundColor: 'blue', padding: 20, display: 'flex', justifyContent: 'space-between' };

const Navigation = (props) => {
  console.log('BG' + props.backgroundColor);
  const [width, updateWidth] = useState(1500);
  let menuFontSize;
  if (width <= 1000) {
    menuFontSize = '0.8em';
  } else menuFontSize = '1.25em';

  const buttonStyle = {
    width: '10vw',
    height: '5vh',
    backgroundColor: props.options.buttonBackground,
    color: 'white',
    fontSize: menuFontSize,
    radius: 20,
    margin: 5
  };

  useEffect(() => {
    const handler = () => updateWidth(window.innerWidth);

    window.addEventListener(`resize`, handler);
    return () => window.removeEventListener(`resize`, handler);
  }, []);

  return width > 650 ? (
    <>
      <div style={divStyle}>
        <div>
          {props.options.leftMenu.map((element) => {
            return <button style={buttonStyle}>{element}</button>;
          })}
        </div>
        <div>
          {props.options.rightMenu.map((element) => {
            return <button style={buttonStyle}>{element}</button>;
          })}
        </div>
      </div>
    </>
  ) : (
    <p>Mobile Version</p>
  );
};

export default Navigation;
