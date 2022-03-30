const somethingWllHappen = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Success');
    } else {
      reject('Whooooops !!!');
    }
  });
}


somethingWllHappen()
  .then(response => { console.log(response);})
  .catch(error => { console.error(error);});

  const somethingWllHappen2 = () => {
    return new Promise((resolve, reject) => {
      if(true) {
        setTimeout(() => {
          resolve('True');
        })
      } else {
        const error = new Error('Whopss!!!!!!');
        reject(error);
      }
    });
  }

  somethingWllHappen2()
    .then(response => { console.log(response);})
    .then(response => { console.log('Hola desde una promesa!!!');})
    .catch(error => { console.error(error);});

  Promise.all([somethingWllHappen(), somethingWllHappen2()])
    .then(response => { console.log('Array if results',response);})
    .catch(error => { console.error(error);});