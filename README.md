# codeafrica
# Photo gallery Project

## Description
This project shows the UI/UX provided in figma, which shows the responsive gallery, when user clicks on the image, it get's the Full width.

## Features
- Dynamically creates and displays an image modal 
- Responsive design with media queries.
- Includes a close button to hide the modal.

## Technologies Used
- HTML
- CSS
- JavaScript

## How to Run the Project
1. Clone the repository.
2. navigate to the project directory by :  
    ```
    cd photogallery
    ```
3. open the codes within vs code or any other editor
4. Go Live server.

## Or by alternative,
1. Clone the repository.
2. navigate to the project directory by :  
    ```
    cd photogallery
    ```
3. Open the ```index.html```

# Coding challenge 1:  Contiguous Subarray Sum
## Description
This function checks if the maximum contiguous subarray sum of a given array is greater than a specified target value.

## How It Works
The function iterates through the array by using For Loop, maintaining a running sum (currentSum) and the maximum sum encountered (maxSum).
It returns true if the maxSum is greater than the target.

## How should it be tested
1. Navigate to directory of
```
    cd challenges
```
2. Open the folder within the Vs code
3. open the terminal, ``` node arrayMap.js```
4. After this, ypu would see the output depending 
    on  provided data: ```
        let arr = [4, 2, 7, 1, 9, 5],
        target = 17 ;
    ```
# Coding Challenge 2: String Manipulations

## Description
This function transforms a given string based on its length

## How It Works
1. If the length is divisible by both 3 and 5, it reverses the string and converts each character to its ASCII code.
2. If the length is divisible by 5, it converts each character to its ASCII code.
3. If the length is divisible by 3, it reverses the string.
4. Otherwise, it returns "Out of Range".

## How should it be tested
1. Navigate to directory of
```
    cd challenges
```
2. Open the folder within the Vs code
3. open the terminal, ``` node stringTransform.js```
4. After this, ypu would see the output depending 
    on  provided data: ```
        
const text = "Hamburger";
const transformedText = stringTransform(text);
console.log(transformedText); // Output: "regrubmaH"

const text2 = "Pizza";
const transformedText2 = stringTransform(text2);
console.log(transformedText2); // Output: "80 105 122 122 97"

const text3 = "Chocolate Chip Cookie";
const transformedText3 = stringTransform(text3);
console.log(transformedText3); // Output: "eikooCpihCetalocohC"
    ```


