let textt = document.getElementById('textbox')
let tex1 = document.getElementById('text')
let tex2 = document.getElementById('td1')
let num = document.getElementById('num')
let trTemplate = '<td onclick="key(this)"><textarea id="text-input" rows="3" cols="2" onkeydown="convert(this)" onclick="autoTextarea(this)"></textarea><div id="img"><img src="./img/上移.png" id="up" onclick="up(this)"><img src="./img/下移.png" id="down" onclick="down(this)"><img src="./img/newly.png" id="upadd" onclick="upadd(this)"><img src="./img/新增.png" id="lowadd" onclick="lowadd(this)"><img src="./img/删除.png" id="delete" onclick="deleted(this)"></div></td>'

//向下新增
function lowadd(event){
    console.log('点到了向下新增！！')
    let lii = document.createElement('tr')
    lii.innerHTML = trTemplate
    // console.log("event=",event)
    // textt.appendChild(lii)

    let next = event.parentNode.parentNode.parentNode.nextElementSibling
    // console.log("next=",next)
    if (next) {
        textt.insertBefore(lii, next)
        // console.log("textt.insertBefore(lii, next);=",textt.insertBefore(lii, next))
    } else {
        textt.appendChild(lii)
    }
}

//向上新增   
function upadd(event){
    console.log('点到了向上新增！！')
    let lii = document.createElement('tr')
    lii.innerHTML = trTemplate
    textt.insertBefore(lii, event.parentNode.parentNode.parentNode)
}

//删除
function deleted(event){
    console.log('删除！！')
    // console.log("event.parentNode.parentNode.parentNode=",event.parentNode.parentNode.parentNode)
    event.parentNode.parentNode.parentNode.remove()
}

//上移
function up(event){
    console.log('上移！！')
    for(let i=0;i<up.length;i++){
        let obj = event.parentNode.parentNode.parentNode
        console.log("obj=",obj)
        if(textt.children[0] == obj){
            alert('已经是第一个啦，不能再向上移动！')
        }else{
            let obj1 = obj.previousElementSibling
            textt.insertBefore(obj, obj1)
        }
    }
}

//下移
function down(event){
    console.log('下移！！')
    for(let i=0;i<up.length;i++){
        let obj = event.parentNode.parentNode.parentNode
        console.log("obj=",obj)
        if(textt.lastElementChild == obj){
            alert('已经是最后一个啦，不能再向下移动！')
        }else{
            let obj1 = obj.nextElementSibling.nextElementSibling
            console.log("obj1=",obj1)
            textt.insertBefore(obj, obj1)
        }
    }
}

//获取编号
function key(e){
    let etr = e.parentNode
    // console.log('etr=',etr)   
    for(let i in etr){
        let index = etr.rowIndex
        // console.log('index=',index)
        // console.log('num=',num)
        num.innerText = index
    } 
}