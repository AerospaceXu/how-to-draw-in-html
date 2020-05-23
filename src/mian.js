/*
 * @Author: Aero Xu
 * @Date: 2020-05-23 14:13:34
 * @LastEditors: Aero Xu
 * @LastEditTime: 2020-05-23 18:34:56
 */

const data = `
/*
 * 你好，我是一名前端开发者。
 * 我想向您展示，
 * 一个简单网页图形制作的流程。
 * ……
 * 首先我们准备一个小盒子
 */

 #box {
   border: 1px solid red;
   width: 100%;
   height: 100%;
 }

/*
 * 然后我们可以将她变成一个漂亮的圆圈。
 */ 

 #box {
   border-radius: 50%;
   box-shadow: 0 0 3px #888;
   border: none;
 }

/*
 * 不如我们画一个太极图吧。
 * 太极图黑白相间的，
 * 所以我们加上背景颜色。
 */

 #box {
   background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 50%, #000000 50%, #000000 100%);
 }

/*
 * 然后添加两个小点（阴阳鱼）。
 */

 #box {
   position: relative;
 }

 #box::before {
   content: '';
   display: block;
   width: 50%;
   height: 50%;
   border: 1px solid red;

   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);

   background: #000000;
   border-radius: 50%;
 }

 #box::after {
   content: '';
   display: block;
   width: 50%;
   height: 50%;
   border: 1px solid red;

   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translateX(-50%);

   background: #FFFFFF;
   border-radius: 50%;
 }

  #box::after,  #box::before {
    border: none;
  }

/*
 * 接下来我们点上黑白两点。
 */

 #box::before {
   background: radial-gradient(circle, #FFFFFF 0%, #FFFFFF 25%, #000000, 25%, #000000 100%)
 }

 #box::after {
   background: radial-gradient(circle, #000000 0%, #000000 25%, #FFFFFF, 25%, #FFFFFF 100%)
 }
`
let typeString = ''

const app = document.querySelector('#app')
const style = document.querySelector('#style')
const canvas = document.querySelector('#canvas')
let rotate = 0

let n = 0

const step = () => {
  setTimeout(() => {
    type(n)
    n++
    if (n < data.length - 1) {
      step()
    } else {
      setInterval(() => {
        rotate += 1
        if (rotate === 360) {
          rotate = 0
        }
        if (document.body.clientWidth >= 500) {
          canvas.style.transform = `rotate(${rotate}deg)`
        } else {
          canvas.style.transform = `translate(50%) rotate(${rotate}deg)`
        }
      }, 30)
    }
  }, 10)
}

function type(n) {
  if (data[n] === '\n') {
    typeString += '<br>'
  } else if (data[n] === ' ') {
    typeString += '&nbsp;'
  } else {
    typeString += data[n]
  }
  style.innerHTML = data.substring(0, n + 1)
  app.innerHTML = typeString
  window.scrollTo(0, document.body.scrollHeight)
}

step()
