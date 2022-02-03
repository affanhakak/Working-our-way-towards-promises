//call stack example.

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) =>
  square(a) + square(b) === square(c);

isRightTriangle(3, 4, 5);

//call back hell.

setTimeout(() => {
  document.body.style.backgroundColor =
    "violet";
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

//nesting so as to keep timeout same.

setTimeout(() => {
  document.body.style.backgroundColor =
    "violet";
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

//we can write a function if we are gonna reuse it and if we are gonna change delays.

const delayedColorChange = (
  newColor,
  delay,
  doNext //doNext is a callback function to give an equal delay time to our function.
) => {
  setTimeout(() => {
    document.body.style.backgroundColor =
      newColor;
    doNext();
  }, delay);
};

delayedColorChange(
  "violet",
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

//example of call back hell.

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

//promises : A promise is an object representing the eventual completion or failure of an asynchronous operation.
//we dont have to pass callbacks in promises, just a url.
//sending fake requests via promises.

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

// making promises better by rewriting .then's (promises are magic)

fakeRequestPromise(
  "shop.com/api/pizza/page1"
)
  .then((data) => {
    console.log("page 1 is on");
    console.log(data);
    return fakeRequestPromise(
      "shop.com/api/pizza/page2"
    );
  })
  .then((data) => {
    console.log("page 2 is on");
    console.log(data);
    return fakeRequestPromise(
      "shop.com/api/pizza/page3"
    );
  })
  .then((data) => {
    console.log("page 3 is on");
    console.log(data);
  })
  .catch(() => {
    console.log("pages not loading");
    console.log(error);
  });

//creating our own promises

const fakeRequest = (url) => {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    }
  );
};

fakeRequest("/pizza/1").then(() => {
  console.log("Ok!! done");
});

// example 2

const fakeRequest = (url) => {
  return new Promise(
    (resolve, reject) => {
      const rand = Math.random();
      setTimeout(() => {
        if (rand < 0.7) {
          resolve("fake data is here");
        } else {
          reject("request error");
        }
      }, 1000);
    }
  );
};

fakeRequest("/pizza/1")
  .then((data) => {
    console.log("Ok!! done");
    console.log("data is:", data);
  })
  .catch((err) => {
    console.log("stop!", err);
  });

//example 3

const delayedColorChange = (
  color,
  delay
) => {
  return new Promise(
    (resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor =
          color;
        resolve();
      }, delay);
    }
  );
};

delayedColorChange("violet", 1000)
  .then(() => {
    return delayedColorChange(
      "indigo",
      1000
    );
  })
  .then(() => {
    return delayedColorChange(
      "blue",
      1000
    );
  })
  .then(() => {
    return delayedColorChange(
      "green",
      1000
    );
  })
  .then(() => {
    return delayedColorChange(
      "yellow",
      1000
    );
  })
  .then(() => {
    return delayedColorChange(
      "orange",
      1000
    );
  })
  .then(() => {
    return delayedColorChange(
      "red",
      1000
    );
  });

//async keyword
