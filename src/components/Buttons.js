import satData from "./satData";

const Buttons = (props) => {

  let { filterByType, setSat, displaySats } = props


  return (
    <>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

        <button onClick ={() => setSat(satData)} >
          All Orbits
        </button>
    </>
  );
};

export default Buttons;