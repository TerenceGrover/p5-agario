class BBlob {
  constructor(x, y, r, rgb) {
    this.pos = createVector(x, y)
    this.r = r
    this.rgb = rgb
  }

  show = function () {
    fill(this.rgb.r, this.rgb.g, this.rgb.b);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }

  update = function() {
    let velocity = createVector(mouseX - width/2, mouseY - height/2);
    velocity.setMag(3);
    this.pos.add(velocity)
  }

  eats = (other) => {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y)
    if (d < this.r/2 + other.r) {
      return true
    } else {
      return false
    }
  }

  grow = (radius) => {
    this.r += radius/10
    return true
  }
}