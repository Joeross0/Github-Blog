//About me
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//projects code
function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'projects.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {

      // .open will NOT return a value but simply returns undefined in async mode so use a callback
      callback(xobj.responseText);

    }
  }
  xobj.send(null);
  
  }
  
//This Determines the page you are on
if(document.title == "Joseph Ross")
  Home();
else if(document.title == "Joseph Ross: Projects"){
  Projects();
}
else{
  console.log("CANNOT FIND CORRECTION FUNCTION FOR PAGE TITLE!!")
}

function Home(){
loadJSON(function(response) {
  // Do Something with the response e.g.
  projects = JSON.parse(response);
  console.log(projects.projects);
  projects.projects.forEach(project =>
    {
      InsertFeaturedProjects(project.title, project.date, project.description, project.caption, project.link)
    });
  let template = document.getElementsByClassName("project")[0];
  template.remove();
});
}
function InsertFeaturedProjects(title, date,description, caption, link){
  let template = document.getElementsByClassName("project")[0];
  let tempContainer  = template.parentElement;
  let clone = template.cloneNode(true);

  let stitle = clone.getElementsByTagName("h3")[0]
  let sdescription = clone.getElementsByTagName("p")[0]
  let simg = clone.getElementsByTagName("img")[0]
  let slink = clone.getElementsByTagName("a")[0]

  stitle.innerHTML = title;
  sdescription.innerHTML = `${date} <br><br> ${description}`;
  simg.src = caption;
  if(link){
    slink.href = link
  }
  else{
    slink.parentElement.remove();
    clone.style = "grid-template-columns: 1fr 3fr;"
  }

  tempContainer.appendChild(clone);
}

function Projects(){
loadJSON(function(response) {
  // Do Something with the response e.g.
  projects = JSON.parse(response);
  console.log(projects.projects);
  projects.projects.forEach(project =>
    {
      let title = project.title;
      let date = project.date;
      let tags = project.tags;
      let description = project.description;
      let caption = project.caption;
      let link = project.link;

      console.log(`${title} | ${date} | ${description}`) //DEBUG


    });
});
}
function InsertProjects(title, date, tags, description, caption, link){
  
}




