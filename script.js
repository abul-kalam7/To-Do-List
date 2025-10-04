let addButton = document.querySelector(".addButton")
let addSection = document.querySelector(".addSection")
let con = document.querySelector(".con")

addButton.addEventListener("click", () => {
   let ul = document.createElement("ul");
   ul.classList.add("oneTask")
   ul.innerHTML = `<div class="checkboxCon">
   
   <input type="checkbox" name="cd" id="cd" class="checkbox" >
   <label for="cd" > </label>
   </div>
   
   <div class="taskCon ">
   <input type="text" class="task "></input>
   </div>
   
   <div class="deleteCon">
   <button class="delete">X</button>
   </div>`

   addSection.prepend(ul)

   let deleteBtn = ul.querySelector(".delete")
   deleteBtn.addEventListener("click", () => {
      ul.classList.add("remove")
   })

   let task = ul.querySelector(".task")
   let checkboxc = ul.querySelector(".checkbox")
   checkboxc.addEventListener("click", () => {
      task.classList.add("complete")

      if (checkboxc.checked) {
         checkboxc.disabled = true;
         if (checkboxc.disabled == true) {
            task.disabled = true;

           if (task.disabled == true) { 
              con.append(completeSectionCon)
              completeSectionCon.querySelector(".completeSection").prepend(ul)
 
            }
            
            
         }
         
      }

   })

})

let completeSectionCon = document.createElement("div");
completeSectionCon.classList.add("completeSectionCon");
completeSectionCon.innerHTML = ` <span>Conpleted</span>
<div class="completeSection"> 

</div>`
