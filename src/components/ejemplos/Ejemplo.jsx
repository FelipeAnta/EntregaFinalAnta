const myPromise = () =>{
    return new Promise((res, err) => {
      res([
        {id: 1, name:"Item1", description:"Description1", stock:4},
        {id: 1, name:"Item2", description:"Description2", stock:3},
        {id: 1, name:"Item3", description:"Description3", stock:2},
      ]);
    });
  };

  setTimeout(() => {
    myPromise()
    .then(res => console.log(res))
    .catch(err => console.log(err))
})