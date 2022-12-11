const carsStorage = {
    addModel(modelName) {
      if (!(modelName in carsStorage)) {
        this[modelName] = 0;
      }
      return (quantity) => {
        this[modelName] += quantity;
      };
    }
  };
  
  const toyotaAdder = carsStorage.addModel("Toyota");
  const fordAdder = carsStorage.addModel("Ford");
  
  toyotaAdder(4);
  toyotaAdder(3);
  
  fordAdder(1);
  fordAdder(5);
  
  console.log(carsStorage.Toyota); // 7
  console.log(carsStorage.Ford); // 6
  console.log(carsStorage.Tesla); // undefined
  
  const teslaAdder = carsStorage.addModel("Tesla");
  teslaAdder(9);
  console.log(carsStorage.Tesla); // 9