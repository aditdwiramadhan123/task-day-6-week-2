const newData = (projectData) => {
    const card = document.getElementById("cardPage");
    const detilProjectPage = document.getElementById("detilProjectPage");
  
    for (let i = 0; i < projectData.length; i++) {
      console.log (i)
      let projectName = projectData[i].projectName;
      let startDate = projectData[i].startDate;
      let endDate = projectData[i].endDate;
      let timeDuration = projectData[i].timeDuration;
      let description = projectData[i].description;
      let previewDescription = description.substring(0, 100) + "...";
      let technology = projectData[i].technology;
      let inputImageUrl = projectData[i].inputImageUrl;
  
      card.innerHTML = `<h1>MY PROJECT</h1>
      <div class="containerCard" id="containerCard"></div>`;
      const containerCard = document.getElementById("containerCard");
  
      detilProjectPage.innerHTML = "";
      let htmlTechnologyIcon = "";
      let htmlDetilTechnology = "";
  
      for (let k = 0; k < technology.length; k++) {
        let technologyIcon;
        let detailTechnology;
  
        if (technology[k] == "node Js") {
          technologyIcon = `<i class="fa-brands fa-node-js"></i>`;
          detailTechnology = `<span>
          <i class="fa-brands fa-node-js"></i>
          <p>Node Js</p>
        </span>`;
        } else if (technology[k] == "react Js") {
          technologyIcon = `<i class="fa-brands fa-react"></i>`;
          detailTechnology = `<span>
          <i class="fa-brands fa-react"></i>
          <p>react js</p>
        </span>`;
        } else if (technology[k] == "next Js") {
          technologyIcon = `<img src="assets/icon/next-js_1.svg" style="height: 25px; width: 25px;"></img>`;
          detailTechnology = `<span>
          <img src="assets/icon/next-js_1.svg" style="height: 25px; width: 25px;"></img>
          <p>Next Js</p>
        </span>`;
        } else if (technology[k] == "typeScript") {
          technologyIcon = `<img src="assets/icon/icons8-typescript-500.svg" style="height: 25px; width: 25px;"></img>`;
          detailTechnology = `<span>
          <img src="assets/icon/icons8-typescript-500.svg" style="height: 20px; width: 20px;"></img>
          <p>typeScript</p>
        </span>`;
        }
  
        htmlTechnologyIcon += technologyIcon;
        htmlDetilTechnology += detailTechnology;
      }
  
      containerCard.innerHTML += `
      <a href=#project${i}>
        <div class="card item" id="card">
        <div class="cardInner">
          <img src="${inputImageUrl}" alt="project image" />
          <h3>${projectName}</h3>
          <p class="p-duration">durasi : ${timeDuration}</p>
          <p class="description">${previewDescription}</p>
          <div class="card-icon" id="card-icon">
            ${htmlTechnologyIcon}
          </div>
          <div class="card-button-container">
            <button>edit</button>
            <button>delete</button>
          </div>
          </div>
        </div>
      </a>`;
  
      detilProjectPage.innerHTML += `
      <div class="containerDetilProject" id ="project${i}">
        <h1 class="item-project">${projectName}</h1>
        <div id="projectDetil" class="item-project">
          <div class="containerDetilImg">
            <img src="${inputImageUrl}" alt="project image">
            <div class="container-content">
              <div class="container-duration">
                <h3>Duration</h3>
                <span>
                  <i class="fa-solid fa-calendar-days"></i>
                  <p>${startDate} - ${endDate}</p>
                </span>
                <span>
                  <i class="fa-solid fa-clock"></i>
                  <p>${timeDuration}</p>
                </span>
              </div>
              <div class="container-tecnologies">
                <h3>Technologies</h3>
                <div class="iconContainer">
                  ${htmlDetilTechnology}
                </div>
              </div>
            </div>
          </div>
          <p class="description item-project">${description}</p>
        </div>
      </div>`;
  
      const containerProject = document.getElementById(`project${i}`);
      if (i % 2 === 0) {
        containerProject.style.backgroundColor = "none";
      } else {
        containerProject.style.backgroundColor = " #fff";
      }
    }
  };