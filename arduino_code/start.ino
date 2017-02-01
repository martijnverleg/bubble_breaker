void Start() {
  int blinkTimer = 0;
  while (startA == false || startB == false || startC ==  false || startD == false) {
    int BSA = digitalRead(BA);
    int BSB = digitalRead(BB);
    int BSC = digitalRead(BC);
    int BSD = digitalRead(BD);

    if (BSA == 0) {
      startA = true;
      Keyboard.press('A');
      Keyboard.release('A');
    } 
    
    if(startA == true) {
      digitalWrite(L1, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 == 0) {
      digitalWrite(L1, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 != 0) {
      digitalWrite(L1, LOW);
    }

    if (BSB == 0) {
      startB = true;
      Keyboard.press('B');
      Keyboard.release('B');
    } 
    
    if(startB == true) {
      digitalWrite(L2, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 == 0) {
      digitalWrite(L2, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 != 0) {
      digitalWrite(L2, LOW);
    }
    
    if (BSC == 0) {
      startC = true;
      Keyboard.press('C');
      Keyboard.release('C');
    } 
    
    if(startC == true) {
      digitalWrite(L3, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 == 0) {
      digitalWrite(L3, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 != 0) {
      digitalWrite(L3, LOW);
    }

    if (BSD == 0) {
      
      startD = true;
      Keyboard.press('D');
      Keyboard.release('D');
    } 
    
    if(startD == true) {
      digitalWrite(L4, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 == 0) {
      digitalWrite(L4, HIGH);
    } else if (blinkTimer % 100 == 0 && (blinkTimer / 100) % 2 != 0) {
      digitalWrite(L4, LOW);
    }

    Serial.print(startA);
    Serial.print(", ");
    Serial.print(startB);
    Serial.print(", ");
    Serial.print(startC);
    Serial.print(", ");
    Serial.println(startD);
    blinkTimer++;
    delay(10); 
  }
}

 
  
  
  
