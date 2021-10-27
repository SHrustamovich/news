const elList = document.querySelector(".elList")
const createTemplate = document.getElementById("search-result-template").content

// console.log(createTemplate);

  function renderElement(array,item) {
      const itemFragment = document.createDocumentFragment();
      array.forEach(element => {

          createElement = createTemplate.cloneNode(true)
          createElement.querySelector(".elTitle").textContent = "Name: " + element.first_name;
          createElement.querySelector(".elText").textContent = "E-mail: " + element.email;
          createElement.querySelector(".elImg").src = element.avatar;
          itemFragment.appendChild(createElement)
      });
      item.appendChild(itemFragment);
  }
  ; (async () => {
    const data = await fetch("https://reqres.in/api/users") 
    const tozaData = await data.json() 
    console.log(tozaData);
    renderElement(tozaData.data, elList);
    
})()