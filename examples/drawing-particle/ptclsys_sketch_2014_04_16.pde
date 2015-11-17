

ArrayList <Particle> agents;


void setup() {
  size(400, 400);
  agents = new ArrayList<Particle>();
}

void draw() {
  for (int i = 0; i < agents.size();i++) {
    agents.get(i).run();
  }
}

void mouseDragged() {
  agents.add(new Particle(mouseX,mouseY));
}

class Particle {
  float x = 0;
  float y = 0;
  Particle(float _x, float _y) {
    x = _x;
    y = _y;
  } // constructor
  void display() {
    fill(255, 0, 0);
    pushMatrix();
    translate(x, y);
    ellipse(0, 0, 10, 10);
    popMatrix();
  }
  void move() {
    x = x + random(-1, 1);
    y+= random(-1, 1);

    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
  }
  void run() {
    display();
    move();
  }
} // END OF CLASS

