void Start() {
  while (startA == false || startB == false || startC ==  false || startD == false) {
    int BSA = digitalRead(BA);
    int BSB = digitalRead(BB);
    int BSC = digitalRead(BC);
    int BSD = digitalRead(BD);

    if (BSA == 0) {
      startA = true;
    }

    if (BSB == 0) {
      startB = true;
    }

    if (BSC == 0) {
      startC = true;
    }

    if (BSD == 0) {
      startD = true;
    }
  }
}
