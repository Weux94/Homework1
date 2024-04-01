const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.Fragment>
    <h1>Hello world</h1>
  </React.Fragment>
);

const CARS = [
  {
    id: 1,
    brand: "Audi",
    models: [
      {
        id: 1,
        name: "A1",
        collection: [
          {
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999,
          },
          {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999,
          },
        ],
      },
      {
        id: 2,
        name: "Q5",
        collection: [
          {
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984,
          },
          {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984,
          },
        ],
      },
      {
        id: 3,
        name: "TT",
        collection: [
          {
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984,
          },
          {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    brand: "BMW",
    models: [
      {
        id: 1,
        name: "8 series",
        collection: [
          {
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998,
          },
          {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998,
          },
        ],
      },
      {
        id: 2,
        name: "X6",
        collection: [
          {
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395,
          },
          {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993,
          },
        ],
      },
    ],
  },
];
root.render(
  <React.Fragment>
    <h1>Car Specs</h1>
    <table
      style={{
        borderCollapse: "collapse",
        margin: 0,
        padding: 0,
        border: "solid 1px black",
      }}
    >
      <tbody>
        {CARS.map((carBrand) => (
          <React.Fragment key={carBrand.id}>
            <tr style={{ backgroundColor: "blue", color: "white" }}>
              <td colSpan="2" style={{ textAlign: "center" }}>
                {carBrand.brand}
              </td>
            </tr>
            {carBrand.models.map((carModel) => (
              <React.Fragment key={carModel.id}>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#FF1493",
                      color: "white",
                      textAlign: "center",
                      border: "solid 1px black",
                    }}
                  >
                    {carModel.name}   
                  </td>
                  <td >
                    {carModel.collection.map((item) => (
                      <React.Fragment key={item.id}>
                        <ul style={{ width: '200px', height: '100px', margin:0, padding: '20px 15px 10px 35px',   border: "solid 1px black"}}>
                          <li>Version: {item.version}</li>
                          <li>Yeah: {item.year}</li>
                          <li>Horsepower: {item.horsepower}</li>
                          <li>Engine: {item.engine}</li>
                        </ul>
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);


