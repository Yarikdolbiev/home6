abstract class Shape {
  protected _color: string;
  protected _name: string;

  constructor(color: string, name: string) {
    this._color = color;
    this._name = name;
  }

  abstract calculateArea(): number;

  get color(): string {
    return this._color;
  }

  get name(): string {
    return this._name;
  }
}

class Circle extends Shape {
  private _radius: number;

  constructor(color: string, radius: number) {
    super(color, "Circle");
    this._radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this._radius * this._radius;
  }
}

class Rectangle extends Shape {
  private _width: number;
  private _height: number;

  constructor(color: string, width: number, height: number) {
    super(color, "Rectangle");
    this._width = width;
    this._height = height;
  }

  calculateArea(): number {
    return this._width * this._height;
  }

  print(): void {
    console.log(`Area of ${this.name} (${this.color}): ${this.calculateArea()}`);
  }
}

class Square extends Rectangle {
  constructor(color: string, sideLength: number) {
    super(color, sideLength, sideLength);
    this._name = "Square";
  }
}

class Triangle extends Shape {
  private _base: number;
  private _height: number;

  constructor(color: string, base: number, height: number) {
    super(color, "Triangle");
    this._base = base;
    this._height = height;
  }

  calculateArea(): number {
    return (this._base * this._height) / 2;
  }
}
  
  