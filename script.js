document.addEventListener("DOMContentLoaded", (event) => {
  const nameForm = document.getElementById("form");

  nameForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const firstName = document.querySelector("#firstname");
    const userName = document.querySelector(".card-title");
    const userAge = document.querySelector(".card-text");
    // const recreate = document.querySelector(".retry");

    if (!firstName.value) {
      alert("Must enter a first name");
      return;
    }

    const names = await getAgeEstiame();

    let nameOfInterest = names.find((item) => item.name === firstName.value);
    console.log(nameOfInterest);

    if (!nameOfInterest) {
      await createAgeEstimate(firstName.value);
      userName.innerHTML = `Hey ${firstName.value}`;
      const age = await getUserAge(firstName.value);
      userAge.innerHTML = `your Age estimate is ${age} Years`;
    } else {
      userName.innerHTML = `Hey ${nameOfInterest.name}`;
      userAge.innerHTML = `your Age estimate is ${nameOfInterest.age} Years`;
    }
  });

  // recreate.addEventListener("click", async (e) => {
  //   await retry(firstName.value);
  //   userName.innerHTML = `Hey ${firstName.value}`;
  //   const age = await getUserAge(firstName.value);
  //   userAge.innerHTML = `your Age estimate is ${age} Years`;
  // });
});

const getAgeEstiame = async () => {
  const apiURL = `http://localhost:3000/names`;

  const res = await fetch(apiURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();

  return data;
};

const createAgeEstimate = async (name) => {
  const availableNames = await getAgeEstiame();

  oldItem = availableNames.find((item) => item.name === name);

  if (oldItem) {
    return oldItem;
  } else {
    const newItem = {
      id: availableNames.length + 1 || 1,
      age: Math.floor(Math.random() * 70),
      name,
    };

    const res = await fetch("http://localhost:3000/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });

    const data = await res.json();

    console.log(data);
  }
};

const getUserAge = async (name) => {
  const names = await getAgeEstiame();

  const ItemFromDatabase = names.find((item) => item.name === name);

  return ItemFromDatabase.age;
};

// const retry = async (name) => {
//   await createAgeEstimate(name + ".");
// };
