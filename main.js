let menu = document.querySelector('.menu');
let links = document.querySelector('.link');
let menuChild = menu.firstChild;

menu.addEventListener('click',()=>{
  console.log(menuChild.src);
  links.classList.toggle('active')
  if (menuChild.src.includes("img/burger-menu.svg")) {
    menuChild.src = "img/X.svg";
    addSocialButton(links);
    

  }else {
    menuChild.src = "img/burger-menu.svg";
    removeSocialButton();
  }
  
  links.appendChild

})

let addSocialButton = (lo)=>{
  let scoialnames = 
  [{
    name :'facebook',
    url : '#'
  },
  {
    name :'instagram',
    url : '#'
  },
  {
    name :'whatsapp',
    url : '#'
  }];
  

  let social = document.createElement('div')
  
  scoialnames.forEach(e =>{
    let link = document.createElement('a')
    link.setAttribute('href', e.url)
    link.setAttribute('target', '_blank')
    let media = document.createElement('img');
    media.setAttribute("src",`img/${e.name}.svg`);
    link.appendChild(media);
    social.appendChild(link);
  })
  social.classList.add('social')
  lo.appendChild(social);
}

let removeSocialButton = ()=>{
  setTimeout(() => {
    let social = document.querySelector('.social');
    social.remove()
  }, 800);
}

let img = document.querySelectorAll('img');
img.forEach((element)=>{
  element.addEventListener('click',()=>{
    let imgSrc = element.getAttribute('src');
    let bagImg = document.createElement('img');
    bagImg.setAttribute('src',imgSrc);
    bagImg.classList.add('bigimg');
    let x = document.createElement('div')
    x.textContent = "X";
    x.classList.add('exit')
    let showbox = document.createElement('div')
    showbox.classList.add('show');
    let imgbox = document.createElement('div')
    imgbox.classList.add('imgbox');
    imgbox.appendChild(bagImg);
    imgbox.appendChild(x);
    showbox.append(imgbox)
    document.body.appendChild(showbox)
})})

document.body.addEventListener('click',(e)=>{
  if(e.target.classList.contains('exit')){
    console.log("done");
    document.querySelector('.show').remove();
  }
})