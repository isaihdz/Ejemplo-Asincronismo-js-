const doSomethingAsync = ()=>{
  return new Promise((resolve, reject)=>{
    (true)
      ? setTimeout(()=>resolve('Do something async'), 3000)
      : reject(new Error('Test error'))
    
  });
}

const doSomething = async ()=>{
  const something = await doSomethingAsync();
  console.log(something);
}

console.info('Before');
doSomething();
console.info('After');

const anotherFunction = async ()=>{
  try{
    const something = await doSomethingAsync();
    console.log(something+ ' 2');
  }catch(e){
    console.error(e);
  }
}

console.info('Before 2');
anotherFunction();
console.info('After 2');