void DebounceA() {
  int reading = digitalRead(BA);
  
  if (reading != lastbStateA) {
    lastDebounceTimeA = millis();
  }

  if ((millis() - lastDebounceTimeA) > debounceDelay) {
    if (reading != bStateA) {
      bStateA = reading;

      if(bStateA == LOW) {
        Serial.println("A");
        Keyboard.press('A');
        Keyboard.release('A');
      }
    }
  }

  lastbStateA = reading;
}

void DebounceB() {
  int reading = digitalRead(BB);
  
  if (reading != lastbStateB) {
    lastDebounceTimeB = millis();
  }

  if ((millis() - lastDebounceTimeB) > debounceDelay) {
    if (reading != bStateB) {
      bStateB = reading;

      if(bStateB == LOW) {
        Serial.println("B");
        Keyboard.press('B');
        Keyboard.release('B');
      }
    }
  }

  lastbStateB = reading;
}

void DebounceC() {
  int reading = digitalRead(BC);
  
  if (reading != lastbStateC) {
    lastDebounceTimeC = millis();
  }

  if ((millis() - lastDebounceTimeC) > debounceDelay) {
    if (reading != bStateC) {
      bStateC = reading;
      
      if(bStateC == LOW) {
        Serial.println("C");
        Keyboard.press('C');
        Keyboard.release('C');
      }
    }
  }

  lastbStateC = reading;
}

void DebounceD() {
  int reading = digitalRead(BD);
  
  if (reading != lastbStateD) {
    lastDebounceTimeD = millis();
  }

  if ((millis() - lastDebounceTimeD) > debounceDelay) {
    if (reading != bStateD) {
      bStateD = reading;

      if(bStateD == LOW) {
        Serial.println("D");
        Keyboard.press('D');
        Keyboard.release('D');
      }
    }
  }

  lastbStateD = reading;
}
