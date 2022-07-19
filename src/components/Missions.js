let load = false;

const Missions = () => {
  if (!load) {
    load = true;
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((response) => console.log(response));
  }
};

export default Missions;
