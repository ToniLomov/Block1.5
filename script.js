var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
    }
  });
const hiddenItems = document.querySelectorAll('.hidden');
const btn = document.querySelector('.show-more-btn');
const swiperContainer = document.querySelector('.swiper-wrapper');
const toRotate = document.querySelector('.toRotate');
const showMoreBtn = document.querySelector('.show-more');
const hiddenItemsTwice = document.querySelectorAll('.hidden-twice');
const showMe = document.querySelectorAll('.show-me');
let pageWidth = document.documentElement.scrollWidth;   
btn.addEventListener('click' , function(){
              if(pageWidth == '768'){
                if(btn.outerText === 'Показать больше'){
                    btn.innerHTML='Скрыть';
                    for(let i = 0; hiddenItemsTwice.length > i; i++){
                        hiddenItemsTwice[i].style.display='flex';
                    }
                    showMe[0].style.display = 'flex';
                    showMe[1].style.display = 'flex';
                    swiperContainer.style.height='336px';
                    toRotate.style.transform = "rotate(180deg)";
                    showMoreBtn.style.marginTop='46px';
                }else{
                    btn.innerHTML='Показать больше';
                    for(let i = 0; hiddenItemsTwice.length > i; i++){
                        hiddenItemsTwice[i].style.display='none';
                    }
                    showMe[0].style.display = 'none';
                    showMe[1].style.display = 'none';
                    swiperContainer.style.height='170px';
                    toRotate.style.transform = "rotate(0deg)";
                    showMoreBtn.style.marginTop='24px';
                }
                }else if(pageWidth >= '769'){
                    if(btn.outerText === 'Показать больше'){
                        btn.innerHTML='Скрыть';
                        for(let i = 0; hiddenItems.length > i; i++){
                            hiddenItems[i].style.display='flex';
                        }
                        swiperContainer.style.height='248px';
                        toRotate.style.transform = "rotate(180deg)";
                        showMoreBtn.style.marginTop='46px';
                    }else{
                        btn.innerHTML='Показать больше';
                        for(let i = 0; hiddenItems.length > i; i++){
                            hiddenItems[i].style.display='none';
                        }
                        swiperContainer.style.height='170px';
                        toRotate.style.transform = "rotate(0deg)";
                        showMoreBtn.style.marginTop='24px';
                    }
                }
        });
 