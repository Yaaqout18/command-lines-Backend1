const yargs = require('yargs');
const data10 = require('./data10');

yargs.command({
  command: 'add',
  describe: 'Add a new item',
  builder:{
    fname: {
      describe: 'add first name',
      demandOption: true,
      type:'string'
    }, 
      lname: {
      describe: 'add last name',
      demandOption: true,
      type:'string'
    },
    age: {
      describe: 'age',
      demandOption: true,
      type:'string'
    }
  },
  handler : (x)=>{
    data10.addPerson(x.id, x.fname , x.lname,x.age,x.city);
  }
})

yargs.command({
  command: "delete",
  describe: "to delete a person",
  handler: (x)=>{
    data10.deleteData(x.id)
  }
})

yargs.command({
  command: "read",
  describe: "read  person data",
  builder:{
    id : {
      describe: 'describe id read command',
      demandOption:true,
      type:"string"
    }
  },
    handler: (x)=>{
      data10.readData(x.id)
    }
})

yargs.command({
  command: "list",
  describe: "lists all people ",
  handler: ()=>{
    data10.listData()
  }
})
// console.log(yargs.argv);
yargs.parse()