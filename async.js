// call stack example

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) =>
  square(a) + square(b) === square(c);

isRightTriangle(3, 4, 5);

//call back hell

setTimeout(() => {
  document.body.style.backgroundColor =
    "voilet";
}, 1000);

setTimeout(() => {
  document.body.style.backgroundColor =
    "indigo";
}, 2000);

setTimeout(() => {
  document.body.style.backgroundColor =
    "blue";
}, 3000);

setTimeout(() => {
  document.body.style.backgroundColor =
    "green";
}, 4000);

setTimeout(() => {
  document.body.style.backgroundColor =
    "yellow";
}, 5000);

setTimeout(() => {
  document.body.style.backgroundColor =
    "orange";
}, 6000);

setTimeout(() => {
  document.body.style.backgroundColor =
    "red";
}, 7000);

//nesting so as to keep timeout same

setTimeout(() => {
  document.body.style.backgroundColor =
    "voilet";
  setTimeout(() => {
    document.body.style.backgroundColor =
      "indigo";
    setTimeout(() => {
      document.body.style.backgroundColor =
        "blue";
      setTimeout(() => {
        document.body.style.backgroundColor =
          "green";
        setTimeout(() => {
          document.body.style.backgroundColor =
            "yellow";
          setTimeout(() => {
            document.body.style.backgroundColor =
              "orange";
            setTimeout(() => {
              document.body.style.backgroundColor =
                "red";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//we can write a function if we are gonna reuse it and if we are gonna change delays

const delayedColorChange = (
  newColor,
  delay,
  doNext //doNext is a callback function to give an equal delay time to our function
) => {
  setTimeout(() => {
    document.body.style.backgroundColor =
      newColor;
    doNext();
  }, delay);
};

delayedColorChange(
  "voilet",
  1000,
  () => {
    delayedColorChange(
      "indigo",
      1000,
      () => {
        delayedColorChange(
          "blue",
          1000,
          () => {
            delayedColorChange(
              "green",
              1000,
              () => {
                delayedColorChange(
                  "yellow",
                  1000,
                  () => {
                    delayedColorChange(
                      "orange",
                      1000,
                      () => {
                        delayedColorChange(
                          "red",
                          1000,
                          () => {}
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

// example of call back hell

searchGamesAPI(
  "COD",
  () => {
    saveToPS(
      games,
      () => {
        console.log("something");
      },
      () => {
        console.log("something again");
      }
    );
  },
  () => {
    console.log("API disabled");
  }
);

//promises : A promise is an object representing the eventual completion or failure of an asynchronous operation
// we dont have to pass callbacks in promises, just a url.
//sending requests via promises

fakeRequestPromise(
  "shop.com/api/pizza/page1"
)
  .then(() => {
    console.log(
      "it worked/promise resolved"
    );
    fakeRequestPromise(
      "shop.com/api/pizza/page2"
    )
      .then(() => {
        console.log(
          "it worked again/promise resolved again"
        );
      })
      .catch(() => {
        console.log(
          "it failed again/promise rejected again"
        );
      });
  })
  .catch(() => {
    console.log(
      "it failed/promise rejected"
    );
  });

//
