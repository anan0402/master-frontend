
// //1. Element: id, class ,tag, css selector, HTML collection

// //a, Get one element (object) through their id. If the result is null, the id can be duplicate or wrong id
// var headingNode = document.getElementById('heading');

// //b, Get some elements (collection of elemet) have same name through their classname
// var headingNodes = document.getElementsByClassName('class-name')
// console.log(headingNodes)

// //c, Get element by their tag (ex: h1, h2, p, div, ...) card-name (tên thẻ)
// var headingNodes1 = document.getElementsByTagName('h2')

// //d, Get element using querySelector go throug parent to child - css selector
// var headingNode1 = document.querySelector('html .box .heading-2')
// //when there are several elements have same name
// var headingNode2 = document.querySelector('.box .heading-2:first-child') //select the first element have the heading-2 name in the box
// var headingNode3 = document.querySelector('.box .heading-2:nth-child(2)') //select the element have the heading-2 name thu 2 in the box

// //e, select all elements and result in an array
// var headingNodes2 = document.querySelectorAll('.box .heading-2')

// //f, HTML colection: a, img, form
// //  HTML collection of form
// console.log(document.forms) // all form element was collected
// //access element in form collection: document.forms[0]
// //Each element have own key inside the forms collection 
// console.log(document.forms['form-1'])

// //Anchore with a element just apply for a elemnet which have class name
// console.log(document.anchors)


// // 2. Get element methods-2: from parent to get child
// var boxNode = document.querySelector('.box');
// //collect li element inside the box
// console.log(boxNode.querySelectorAll('li'))
// console.log(boxNode.getElementsByTagName('li'))


// //Using for loop
// var headings = document.querySelectorAll('.heading-2');
// for(var i = 0; i<headings.length; i++){
//     console.log(headings[i])
// }



// //DOM attribute: add attribute to the element
// //EX: add attribute for the h3
// var headingElement = document.querySelector('h3')
// //2 ways:
// //1. Thêm thuộc tính hợp lệ cho thẻ (thuộc tính có sẵn mà thẻ đó có thể dùng được)
// headingElement.id = 'heading';//theem thuoc tinh id cho h3
// //2. Thêm thuuocj tính không hợp lệ (thuộc tính mà thẻ ko thể dùng: href chỉ dùng cho thẻ a nhưng ta có thẻ set nó dùng cho thẻ h3)
// headingElement.setAttribute('href', 'heading')//dung cho bất kỳ thuộc tính nào

// //Get value of attribute 
// console.log(headingElement.getAttribute('id'));
// console.log(headingElement.getAttribute('href'));
// //getAttribute & setAttribute can use for suitable and not suitable attribute


// // InnerText vs textContent Property: get and modify the text

// // Get the info of the textNode that belong to the elementNode
// var headingElement1 = document.querySelector('.heading')
// console.log(headingElement.innerText)
// console.log(headingElement.textContent)

// //Modify the info
// headingElement1.textContent ='New heading'
// headingElement1.innerText ='New heading'

// //textcontent lấy ra tất cả nội dung mà mk nhìn thấy
// //innercontent lấy ra giống những gì được trình bày


// //Các thẻ tag nằm trong document đều là một elementNode và nội dung nằm giữa thẻ tag dù là code hay text đều là textNode
// //innerText: nằm trên elementNode để lấy nội dung của textNode
// //textcontent: nằm trên cả textNode lẫn elementNode

// //innerHTML và outerHTML
// //them elementNode - textNode - attributeNode vao the box
// var boxelement = document.querySelector('.box')
// boxelement.innerHTML = '<h1>Heading</h1>'
// console.log(boxelement.innerHTML)//get 
// //innerHTML chi lay dc va ghi de the con
// // outerHTML gi de ca the Cha
// // thuwong dung innerHTML

// var boxElement1 = document.querySelector('.box-1');
// boxElement1.style.width = '100px';
// boxElement1.style.height = '200px';
// boxElement1.style.backgroundColor = 'red';

// Object.assign(boxElement1.style, {
//     width: '100px',
//     height: '200px',
//     backgroundColor: 'green'
// })

/*DOM events
1. Input: import value /select: select choice
2. Key up/dowm: key board event

var inputValue;
var inputElement = document.querySelector('input[type="text"]');
// inputElement.onchange = function(e) {
//     inputValue = e.target.value;
//     console.log(inputValue);
//   };

inputElement.onkeyup = function(e){
    console.log(e.which);
}
*/

//