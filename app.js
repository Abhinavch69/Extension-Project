document.querySelector("#ask").addEventListener("click",async ()=>{
  const input=document.querySelector("#inp").value;
  if(!input.trim()) {
    alert("Please enter a question");
    return;
  }
  const ans=document.querySelector("#response");
  ans.innerHTML="Thinking...";
  const resp = puter.ai.chat(input,{model: "gpt-4.1-nano"},{stream : true});
  resp.then(response=>{ 
    ans.innerHTML=response.message.content;
  })
  .catch(error=>{
    console.error("Error:", error);
  });
  document.querySelector("#inp").value="";
});

document.querySelector("#inp").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector("#ask").click();
  }
});