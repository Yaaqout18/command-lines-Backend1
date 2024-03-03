const fs = require("fs");

const addPerson = (id, fname, lname, age, city) => {
  const allData = loadData();

  const duplicatedData = allData.filter((item) => {
    return item.id === id;
  });
  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    saveAllData(allData);
  } else {
    console.log("duplicated id");
  }
};

const loadData = () => {
  try {
    const DataJson = fs.readFileSync("data10.json", "utf8");
    return JSON.parse(DataJson);
  } catch {
    return [];
  }
};

const saveAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data10.json", AllDataJson);
};
// todo   delete an item

const deleteData = (id) => {
  const allData = loadData();

  const dataKeep = allData.filter((item) => {
    return item.id !== id;
  });
  saveAllData(dataKeep);
  console.table(dataKeep);
  console.log("you have deleted a person");
};

//  todo read person data

const readData = (id) => {
  const allData = loadData();

  const itemWanted = allData.find((item) => {
    return item.id == id;
  });

  if (itemWanted) {
    console.table(itemWanted);
  } else {
    console.log("Error id needed not found");
  }
};

//  todo list data

const listData = () => {
  const allData = loadData();
  allData.forEach((item) => {
    console.table(item);
  });
};

module.exports = { addPerson, deleteData, readData, listData };
