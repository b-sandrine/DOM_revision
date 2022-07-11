// Dom manipulation. The following are ways used to find the elements in a dom tree
    // - GetElementById()

    //to select the document object model which is simply document
    const title =  document.getElementById('main-heading');
    console.log(title)
    
    // - GetElementByClassName()
    const list_items = document.getElementsByClassName('list-items');
    console.log("Get elements by classname ");
    console.log(list_items)

    // - getElementsByTagname()
    const list_item = document.getElementsByTagName('li');
    console.log("Get elements by tagname ")
    console.log( list_item ); 
    
    // - querySelector()
    // it selects the first item that matches the selectors given

    const constructor = document.querySelector('div')
    console.log(constructor)

    // - querySelectorAll()
    // select all the items with the select tag
    const constructors = document.querySelectorAll('div');
    console.log(constructors)
