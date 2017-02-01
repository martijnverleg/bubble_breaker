void Blink(int pin, int t) {
  digitalWrite(pin, HIGH);
  delay(t);
  digitalWrite(pin, LOW);
  delay(t);
}

void BlinkAll(int a, int b, int c, int d, int t) {
  digitalWrite(a, HIGH);
  digitalWrite(b, HIGH);
  digitalWrite(c, HIGH);
  digitalWrite(d, HIGH);
  delay(t);
  
  digitalWrite(a, LOW);
  digitalWrite(b, LOW);
  digitalWrite(c, LOW);
  digitalWrite(d, LOW);
  delay(t);
}

