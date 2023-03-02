

const menu = document.getElementById('menu');
const firstLi = document.querySelector('#menu > li:nth-child(1)');
console.log(firstLi);
console.dir(menu.children);
menu.children[0].style.color = "red";
menu.children[1].style.color = "red";
menu.children[2].style.color = "red";
menu.children[3].style.color = "red";
menu.children[4].style.color = "red";
//일단 써보고 패턴을 찾자!

//5부터 0 까지 i-- 반복문
for (let i = menu.clientHeight.length; i>0; i--){
    menu.children[i].style.color = "red";
}

//2번째 메뉴 클릭하면 색이 변하는 event 
//click 하면 function을 발동하라.
//함수를 객체 안에 있을 땐 메서드,매개변수안에 있을 땐 call back이라고 부른다.
menu.children[2].addEventListener('click',function(){

    menu.children[2].style.color = 'blue';
})


let change = true;
menu.addEventListener('click',function(){
        if(change){
            for(let i =0; i<menu.children.length; i++){
            menu.children[i].style.color = 'gray';
            menu.style.backgroundColor = 'pink';
            };
            change=false;
            }
            else {
                for(let i = 0; i<menu.children.length; i++){
                menu.children[i].style.color = 'green';
                menu.style.backgroundColor = 'white';
                }
                change=true;
                }
            });

