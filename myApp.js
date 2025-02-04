const mongoose = require("mongoose");
require('dotenv').config();
const PersonModel = require("./models/person")

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let Person = PersonModel

const createAndSavePerson = async (done) => {
  const janeFonda = new Person({
    name: "Jane Fonda", 
    age: 84, 
    favoriteFoods: ["eggs", "fish", "fresh fruit"]
  });
  janeFonda.save((err,data) => {
    if(err) done(err)
    done(null, data);
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (error, data) => {
    if(error) done(error)
    done(null, data)
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (error, data) => {
    if(error) done(error);
    done(null, data);
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (error, data) => {
    if(error) done(error);
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, (error, data) => {
    if(error) done(error);
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  Person.findById({ _id: personId }, (error, person) => {
    if(error) done(error);
    const foodToAdd = "hamburger";
    person.favoriteFoods.push(foodToAdd);
    person.save((error, data) => {
      if(error) done(error)
      done(null, data)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
