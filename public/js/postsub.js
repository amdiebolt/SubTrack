console.log("on posting JS")
const form = document.querySelector("#newuser")
const subcard = document.querySelector(".subcard")
const remove = document.querySelector(".remove")
console.log(form)
form.addEventListener("submit", (e)=> {
  e.preventDefault();
  let company = form[0].value.trim()
  let cost = Number(form[1].value.trim())
  let dayofmonth = Number(form[2].value.trim())
  if(!company  || !cost || !dayofmonth) return ;
  fetch('/api/sub/createsub',{
    method:'POST',
    body: JSON.stringify({company,cost,dayofmonth}),
    headers: { 'Content-Type': 'application/json' },
  }).then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    // let cardDiv = document.createElement("div")
    // cardDiv.append(subcard)
    subcard.append()
    location.reload()
  })
  form[0].value = ""
  form[1].value = ""
  form[2].value = ""
  
 
})

remove.addEventListener("click", ()=>{
  subcard.remove();
})

