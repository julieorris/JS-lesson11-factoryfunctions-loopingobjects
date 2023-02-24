const createOutfit = function (shirt, pants) {
  const outfit = {
    shirt: shirt,
    pants: pants,
    isNew: false,
    showOff: function () {
      this.isNew = true;
      console.log("show-off your brand new outfit!");
    }
  };
  return outfit;
};

//console.log(createOutfit());

const tuesday = createOutfit("white", "black");
console.log(tuesday);

const wednesday = createOutfit("pink", "grey");
console.log(wednesday);
//tuesday.shirt = "pink";
//tuesday.pants = "grey";
//console.log(tuesday);

for (let key in tuesday) {
  console.log(key, tuesday[key]);
}

const outfitArray = [tuesday, wednesday];

for (let outfit of outfitArray) {
  for (let key in outfit) {
    console.log(key, outfit[key]);
  }
}
