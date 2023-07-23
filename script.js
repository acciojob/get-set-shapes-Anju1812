class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    // Call the parent class (Rectangle) constructor with the side as both width and height
    super(side, side);
  }

  // Method to calculate and return the perimeter of the square
  getPerimeter() {
    return 4 * this.width;
  }
}

// Example usage:
const rectangle = new Rectangle(5, 10);
console.log("Rectangle Area:", rectangle.getArea()); // Output: Rectangle Area: 50
console.log("Rectangle Width:", rectangle.width);    // Output: Rectangle Width: 5
console.log("Rectangle Height:", rectangle.height);  // Output: Rectangle Height: 10

const square = new Square(6);
console.log("Square Area:", square.getArea());       // Output: Square Area: 36
console.log("Square Width:", square.width);          // Output: Square Width: 6
console.log("Square Perimeter:", square.getPerimeter()); // Output: Square Perimeter: 24


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
