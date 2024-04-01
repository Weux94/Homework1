var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Hello world"
  )
));

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];
root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Car Specs"
  ),
  React.createElement(
    "table",
    {
      style: {
        borderCollapse: "collapse",
        margin: 0,
        padding: 0,
        border: "solid 1px black"
      }
    },
    React.createElement(
      "tbody",
      null,
      CARS.map(function (carBrand) {
        return React.createElement(
          React.Fragment,
          { key: carBrand.id },
          React.createElement(
            "tr",
            { style: { backgroundColor: "blue", color: "white" } },
            React.createElement(
              "td",
              { colSpan: "2", style: { textAlign: "center" } },
              carBrand.brand
            )
          ),
          carBrand.models.map(function (carModel) {
            return React.createElement(
              React.Fragment,
              { key: carModel.id },
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  {
                    style: {
                      backgroundColor: "#FF1493",
                      color: "white",
                      textAlign: "center",
                      border: "solid 1px black"
                    }
                  },
                  carModel.name
                ),
                React.createElement(
                  "td",
                  null,
                  carModel.collection.map(function (item) {
                    return React.createElement(
                      React.Fragment,
                      { key: item.id },
                      React.createElement(
                        "ul",
                        { style: { width: '200px', height: '100px', margin: 0, padding: '20px 15px 10px 35px', border: "solid 1px black" } },
                        React.createElement(
                          "li",
                          null,
                          "Version: ",
                          item.version
                        ),
                        React.createElement(
                          "li",
                          null,
                          "Yeah: ",
                          item.year
                        ),
                        React.createElement(
                          "li",
                          null,
                          "Horsepower: ",
                          item.horsepower
                        ),
                        React.createElement(
                          "li",
                          null,
                          "Engine: ",
                          item.engine
                        )
                      )
                    );
                  })
                )
              )
            );
          })
        );
      })
    )
  )
));