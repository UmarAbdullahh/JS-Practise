let btnadd = document.getElementById("btn-add");
      let element = document.getElementById("div");
      let ul = document.getElementById("ul");
      let message=document.getElementById("demo")
      let btndone=document.getElementById("btn-done")

      const addTask = (cuurentem) => {
        //  console.log(ul1.children[])
        //  if(ul.children[0].className=="empty"){
        //     parentElement.children[0].remove()
        // }
        const inp = btnadd.previousElementSibling;
        if (inp.value == "") {
          let text = "please enter input";
          message.innerHTML = text;
        } else {
          text = "";
          message.innerHTML = text;
          const addelm = document.createElement("li");
          addelm.innerHTML = `<h3>${inp.value}</h3>
            <button id="btn-ed" onclick="editTask(this)">Edit</button>
            <button id="btn-del" onclick="removeTask(this)">Delete</button>
            <button id="btn-done" onclick="doneTask(this)">Complete</button>`;
          ul.appendChild(addelm);
        }
      };
      const removeTask = (currelem) => {
        currelem.parentElement.remove();
        let litag = document.getElementsByTagName("li");
        if (litag.length <= 0) {
          // let msg = document.createElement("h3");
          // msg.classList.add("empty");
          message.textContent = "no record to show";
          // element.appendChild(msg);
          // console.log(msg.className);
        }
      };
      message.textContent=""
      
      const editTask = (currentelem) => {
        if (currentelem.textContent == "Done") {
          currentelem.textContent = "Edit";
          let preinpuelm = currentelem.previousElementSibling.value;
          let currheadelem = document.createElement("h3");
          currheadelem.textContent = preinpuelm;
          currentelem.parentElement.replaceChild(currheadelem,currentelem.previousElementSibling);
        } else {
          currentelem.textContent = "Done";
          let preinpuelm = currentelem.previousElementSibling;
          let currentinpdata = preinpuelm.textContent;
          let currinpuelem = document.createElement("input");
          currinpuelem.type = "text";
          currinpuelem.value = currentinpdata;
          currentelem.parentElement.replaceChild(currinpuelem,preinpuelm);
        }
      };
      const doneTask=(e)=>{
        e.parentElement.children[0].classList.add('checked')
      }
     