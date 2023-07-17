![image](https://previews.123rf.com/images/ionutparvu/ionutparvu1711/ionutparvu171102171/89337763-to-do-list-on-a-green-banner-carried-by-two-men-illustration-graphic.jpg)

in this project i used context api to reduce prop drilling i created one folder
like component. in this folder i created three files .

1.context.js
2.TodoList.js
3.TodoRef.js
and i wrote my css in app.css
in context.js file i created a variable named myTodo that will be passed data.

and onother one is TodoList.js in this file i passed the state value from mytodo.provider to ref.js

in ref.js file i imported mytodo from contextfile and i recieved my preveius file state value with the

help of usecontext

and my all function running in ref.js file like,
adding todos,delete todo, and edit todo.
first of all i take input feild for taking todos value
and i made one button for add todo that button will be adding multiple todos its depend on me how many i want.

Add item from array

i created one ref who will be take reference of value ref is a mutable object that value never be changed
whenever i clicked add button i take my previus state value that value is empty array and i set my ref value to empty array with the help of spread operator i copied my previus value and and put in that value on setTodo
and i clicked add button. than i faced one problem whenever i clicked input button i added value bcoz i used map function that will retun index and value so i get my value in the bottom of input field but my previus type value not clear on input field so i take some time and think whenever i clicked add button i should clear my previeus value will be equal to empty string so i wrote ref.current.value='' . so its work properly

delete item from array

now its turn to delete todo item i created deleted button on this button i run one function.
now thats fine i took id from map function i passed id on this <button className='glow-on-hover' type='button' onClick={() => HandleDelete(index)}>
Remove
</button>
and get that index on handeletefunction than i filtered todo item to filter method this method created new array and check from starting and filte item and push item to new array when i click delete item this method checked my current index value!==new value so that will not be pushed on new array. means which index value will be false that index not pushed on new array.

and third one is edit item .

that was challenging for me bcoz whenever i clicked my edit buttton my todo value should be show on input filed
for edit . its simple but i made this difficult the one thing i only do i match my ref.curret.value = list.text
means that text will be on list equal to my previus text so that is working perfect but i bring value to input
but what i do next im very confused bcoz i have no button for update value and i didnt think how i can update my value and thats edit value replace with old value.

i take some time after taking some time i created 1 state for showing my update button on the place of add button when user click edit button my add button should be hide and my edit button should be show .
thats why i created one state const [toggleSubmit, settoggleSubmit] = useState(true) toglesubmit button
for changing my button when i clicked add button my settogglesubmit will be true and when i click edit button
settogglesubmit false and my update button show.

now its last step for creating update functionalities but i have no id for match old value to new value
bocz i made by update button before calling map function so i didnt get id for update value.
now taking some time i create another state . when i click edit button i passed index on setedititem(index)
now edititem=index now i can match i create updatetodo variable and copy todo text value with spread operator
cont updatetodo=[...todo]
updatetodo[edititem].text=ref.current.value
settodo(updatetodo)
