const btn = document.getElementById('like_btn');
let heart = document.createElement('img');





btn.addEventListener('click', () => {
  heart.className = "like_img";
  heart.setAttribute('src', 'src/heart.png')
  document.body.appendChild(heart);


})

let likeImg = document.getElementsByClassName('like_img');
for (let i=0; i<likeImg.length; i++)
likeImg[i].addEventListener('animationend', () => {
  likeImg[i].remove()
})