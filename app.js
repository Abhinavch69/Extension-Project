document.querySelector("#ask").addEventListener("click",async ()=>{
  const input=document.querySelector("#inp").value;
  if(!input.trim()) {
    alert("Please enter a question");
    return;
  }
  const ans=document.querySelector("#response");
  ans.innerText=input;
});