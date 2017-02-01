#include "Keyboard.h"

const int L1 = 0;
const int L2 = 1;
const int L3 = 2;
const int L4 = 3;

const int BA = 8;
const int BB = 9;
const int BC = 10;
const int BD = 11;

int bStateA;
int bStateB;
int bStateC;
int bStateD;

int lastbStateA = HIGH;
int lastbStateB = HIGH;
int lastbStateC = HIGH;
int lastbStateD = HIGH;

unsigned long lastDebounceTimeA = 0;
unsigned long lastDebounceTimeB = 0;
unsigned long lastDebounceTimeC = 0;
unsigned long lastDebounceTimeD = 0;

unsigned long debounceDelay = 50;

boolean startA = false;
boolean startB = false;
boolean startC = false;
boolean startD = false;

int timer = 0;

void setup() {
  Serial.begin(9600);

  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(L3, OUTPUT);
  pinMode(L4, OUTPUT);

  pinMode(BA, INPUT_PULLUP);
  pinMode(BB, INPUT_PULLUP);
  pinMode(BC, INPUT_PULLUP);
  pinMode(BD, INPUT_PULLUP);

  digitalWrite(L1, HIGH);
  digitalWrite(L2, HIGH);
  digitalWrite(L3, HIGH);
  digitalWrite(L4, HIGH);

  Keyboard.begin();
}

void loop() {
  Start();
  Keyboard.press(176);
  Keyboard.release(176);
  
  BlinkAll(L1, L2, L3, L4, 500);
  
  startA = false;
  startB = false;
  startC = false;
  startD = false;
  
  Start();
  Keyboard.press(32);
  Keyboard.release(32);

  while(timer < 6000) {
    DebounceA();
    DebounceB();
    DebounceC();
    DebounceD();
    delay(10);
    timer += 1;
  }
  
}
