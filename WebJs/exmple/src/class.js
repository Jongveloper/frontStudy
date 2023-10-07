class Color {
  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get rgb() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  set rgb(value) {
    let s = String(value);
    let match = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(
      s.replace(/\s/g, "")
    );
    if (!match) {
      throw new Error("Invalid RGB color: " + s);
    }
    this.r = parseInt(match[1], 10);
    this.g = parseInt(match[2], 10);
    this.b = parseInt(match[3], 10);
  }

  toString() {  
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  static fromCSS(css) {
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css);
    if (!match) {
      throw new Error("Invalid CSS color: " + css);
    }
    let vals = match[1];
    if (vals.length === 3) {
      vals = vals[0] + vals[0] + vals[1] + vals[1] + vals[2] + vals[2];
    }
    return new this(
      parseInt(vals.substr(0, 2), 16),
      parseInt(vals.substr(2, 2), 16),
      parseInt(vals.substr(4, 2), 16)
    );
  }
}

let c = new Color(30, 144, 255);;
console.log(String(c)); // 'rgb(30, 144, 255)'
c = Color.fromCSS("00A");
console.log(String(c)); // "rgb(0, 0, 170)"

class ColorWithAlpha extends Color {
  constructor(r=0, g=0, b=0, a=1) {
    super(r, g, b);
    this.a = a;
  }
}

const col = new ColorWithAlpha(30, 144, 255);
console.log(String(col)); // rgb(30,144,255);

