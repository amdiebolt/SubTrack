console.log("on posting JS")

const form = document.querySelector("#postblog")
console.log(form)

form.addEventListener("submit", (e)=> { 
  e.preventDefault();
  let title = form[0].value.trim()
  let content = form[1].value.trim()

  if(!title  || !content) return ;
  
  fetch('/api/blog/createblog',{
    method:'POST',
    body: JSON.stringify({title,content}),
    headers: { 'Content-Type': 'application/json' },
  }).then((res)=>res.json())
  .then((data)=>{
    document.location.replace('/');
  })

  form[0].value = ""
  form[1].value = ""


})