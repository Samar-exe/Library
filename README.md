# Library
Library project for The Odin Project's Nodejs Path

> 12 October 2024

For now the final project should be able to perform following tasks:

1. Take user input using forms
2. Create an object using the input acquired with the form.
3. Display information about that object.
4. Add event listeners to manipulate the object.

- The program is going to have a gui
- The inputs are the information about the book such as: title, author, pages, reading status.

#### Initial plan: 

1. User will click on a button to add new book.
2. A form should come up revealing the various input fields.
3. The values entered in the input fields will be used to set properties of the new object.
4. After creating the new object, the object's properties should be displayed on the window.
5. Add event listeners to remove the object.

#### Psuedocode

```
INPUT: New Book
INPUT: Properties of new book
COMPUTE: New object
DISPLAY; new object
INPUT: Remove Book
DELETE: Selected Object
```


#### Gui structure

body
    main
        heading
        content
            btn 
            card-container
                cards
                    title
                    author
                    pages 
                    status
        footer


