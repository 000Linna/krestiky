let cells = document.querySelectorAll('#field td');
let modal= document.querySelector('#modal')
let btn= document.querySelector('#delete')



// this это объект "перед точкой",который используется для вызова  метода
function start(cells){
    let gameOver=false;
    // счетчик ходов 
    let i=0;
    for(let cell of cells){
        cell.addEventListener('click', function step(){

            if(gameOver){
                return;
            }
            // если крестик появляется на четное значение счетчика,то ноль на нечетное
            if(i % 2==0){
this.textContent="×";
            }else{
                this.textContent='○';
            }
            // добить обработку клика чтобы крестик не менялся на нолик
            this.removeEventListener('click',step)
            if(isWinner(cells)){
                modal.textContent=`победил ${this.textContent}`
            gameOver=true;
                   
            for(cell of cells){
                cell.removeEventListener('click'.step)
            }
            }else if(i===8) {
            modal.textContent="нет победителя"
           
            gameOver=true;
          
            }
          
            // увеличить счетчик на
              i++;
        })
    }
}

function isWinner(cells){
    let combs=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    // проверяем по очереди в цикле все возможные комбинации и в результате исли есть совпавшие комбинациии то фуункция возвращает true
    for( let comb of combs){
        if (cells[comb[0]].textContent == cells[comb[1]].textContent &&
            cells[comb[1]].textContent == cells[comb[2]].textContent &&
            cells[comb[0]].textContent !=''){
                return true;


            }
             
        
    } 
    return false
}
// кнопка перезапуска игры

// функция перезапуска игры
function gameReload(cells){
    for(let cell of cells){
        console.log(cell)
        cell.textContent=''
         
    }
    modal.textContent="поиграем?"
    start(cells);
}
btn.addEventListener('click',()=>{
gameReload(cells)
})
start(cells);