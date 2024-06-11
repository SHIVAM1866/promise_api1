const p1=new Promise(function(resolve,reject){
setTimeout(function(){
    reject("1 HELLO MY NAME")
},2000)
})

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("2 HELLO MY NAME")
    },3000)
    })
 
const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
            reject("3 HELLO MY NAME")
        },1000)
        })    

// const result=Promise.all([p1,p2,p3])        
// console.log(result);



//  const result=Promise.allSettled([p1,p2,p3])        
//  console.log(result);


//  const result=Promise.race([p1,p2,p3])        
//  console.log(result);

  const result=Promise.any([p1,p2,p3])        
  console.log(result);
