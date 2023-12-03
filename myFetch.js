export const url = 'http://btsoftwares.co.in/test'


export const displayImage = async()=>{
    console.log('coming at fetch Image to display')
    //  const fData = new FormData() 
  
    //   fData.append('image',{
    //     id:'abcd.jpg'
    //   })
    const res = await fetch(url +'/displayImage',{
      method:'POST',
      body:JSON.stringify({id:'abcd.jpg'}),
      headers:{'Content-Type':'application/json;charset=UTF-8'}
    }).then(response=>{
      console.log('data at fetch page',response)
       return response
    
  })
  //.then(data=>console.log(data))
  }