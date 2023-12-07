# JQuery

```javascript
$("tag");

$(".green"); //select all elements of class green

$("#id"); //select specific element

$(".green")
  .parent() //select first parent
  .parents() //all parents in tree
  .parents("#specificParent") //select an specific parent
  .children() //children's children
  .find(selector) //all descendents filtered by a selector
  .siblings();
.next([selector])//select immediately next sibling only if it matches that optional selector,

//changing classes
.addClass(className)
.toggleClass( className )

//changing attributes
.attr(attrName)//get value of attr
.attr(attrName, value)//set value

//Modifying inline CSS
.css( propertyName )//get style properties
.css( propertyNames[] )


.html()//get the HTML contents
.html( htmlString )
.html( function )

.text()//Get the text contents
.text( text )//set text
.text( function )//function returning the text


.val()//get
.val(text)//set
.val(function)

//
////Attach an event handler function
.on( events [, selector ] [, dataObject ], handler )
//selector, to apply evento to descendants of the selected elements

//Event Delegation
$( '.container' ).on( 'click', 'article', function() { … });//to watch the .container element for clicks, and then if there are any, check if the click event's target is an article element.

.click( handler )//shortcut for on, bind an event handler to the "click" event
.keypress( handler )
//https://api.jquery.com/category/events/

.append( content [, content ] )//add element of the end
.append(function)

element.insertBefore( target )//add element before target
element.insertAfter( target )//add element after the target

element.prepend( content [, content ] )//set content inside and before the elements


.first()//Reduce elements to the first in the set


.each(Function( Integer index, Element element ))//Iterate, executing a function for each element
$(this)//select current element in a loop
$(function)//A function passed into the jQuery object runs on document.ready, which occurs after the DOM has been loaded

```
