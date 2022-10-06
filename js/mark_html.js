let Template = '<textarea id="text-input" rows="3" cols="2" onkeydown="convert(this)" onclick="autoTextarea(this)"></textarea><div id="img"><img src="./img/上移.png" id="up" onclick="up(this)"><img src="./img/下移.png" id="down" onclick="down(this)"><img src="./img/newly.png" id="upadd" onclick="upadd(this)"><img src="./img/新增.png" id="lowadd" onclick="lowadd(this)"><img src="./img/删除.png" id="delete" onclick="deleted(this)"></div>'
function convert(e) {
  let text = e.value
  let converter = new showdown.Converter()
  let html = converter.makeHtml(text)
  let back = e.parentNode
  window.onkeydown = function (event) {
    if(event.keyCode === 32){
      // console.log('e=',e)  
      console.log('e.parentNode',e.parentNode)
      back.innerHTML = html
    }   
  }
  back.ondblclick = function(){
    back.innerHTML = Template
    // let textare = back
    let textare = back.querySelector('textarea')
    textare.value = text
    console.log('OK')
  }
}