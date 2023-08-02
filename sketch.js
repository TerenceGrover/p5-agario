let blob;
let blobs = [];
let rgbColl = [
  {r : 145, g : 210, b : 144},
  {r : 255, g : 237, b : 181},
  {r : 249, g : 140, b : 182},
  {r : 193, g : 179, b : 193},
  {r : 252, g : 169, b : 133},
  {r : 11, g : 183, b : 214}
]

function setup() {
  createCanvas(600, 600);
  background(0);
  blob = new BBlob(width/2, height/2, 32, rgbColl[floor(random(rgbColl.length))]);
  repopulate(30)
  }

function draw() {
  background(0);
  translate(width/2 - blob.pos.x,height/2 -blob.pos.y)
  blob.show();
  blob.update();
  for (let i = blobs.length-1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blob.grow(blobs[i].r);
      blobs.splice(i, 1)
    }
  }
  if (blobs.length < 20 ) {
    repopulate(10)
  }
}

function repopulate(n) {
  for (let i = 0; i < n; i++) {
    let x = random(-width, width * 2)
    let y = random(-height, height * 2)
    newBlob = new BBlob(random(x), random(y), 16, rgbColl[floor(random(rgbColl.length))])
      blobs.push(newBlob)
  }
}
