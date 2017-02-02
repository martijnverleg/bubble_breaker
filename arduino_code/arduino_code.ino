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

  // startscreen
  Start();

  // uitleg part 1
  // press enter
  Serial.println("ENTER");
  Keyboard.press(176);
  Keyboard.release(176);
  
  BlinkAll(L1, L2, L3, L4, 100, 5);
  
  startA = false;
  startB = false;
  startC = false;
  startD = false;
  
  Start();
  
  // press space
  Serial.println("SPACE");
  Keyboard.press(32);
  Keyboard.release(32);

  BlinkAll(L1, L2, L3, L4, 100, 5);

  // start game part1
  while(timer < 3000) {
    DebounceA();
    DebounceB();
    DebounceC();
    DebounceD();
    delay(10);
    timer += 1;
  }
  
  BlinkAll(L1, L2, L3, L4, 500, 3);
  
  // uitleg part 2
  // press 1
  Serial.println("1");
  Keyboard.press(49);
  Keyboard.release(49);

  startA = false;
  startB = false;
  startC = false;
  startD = false;
  
  Start();
  
  // press 2
  Serial.println("2");
  Keyboard.press(50);
  Keyboard.release(50);
  
  timer = 0;
 
  // start game part2
  while(timer < 3000) {
    DebounceA();
    DebounceB();
    DebounceC();
    DebounceD();
    delay(10);
    timer += 1;
  }

  BlinkAll(L1, L2, L3, L4, 500, 3);
  
  // uitleg part 3
  // press 3
  Serial.println("3");
  Keyboard.press(51);
  Keyboard.release(51);

  startA = false;
  startB = false;
  startC = false;
  startD = false;
  
  Start();

  // press 4
  Serial.println("4");
  Keyboard.press(52);
  Keyboard.release(52);
  
  timer = 0;
  
  // start game part 3
  while(timer < 3000) {
    DebounceA();
    DebounceB();
    DebounceC();
    DebounceD();
    delay(10);
    timer += 1;
  }

  BlinkAll(L1, L2, L3, L4, 500, 3);
  
  // press 0
  // start ending
  Serial.println("0");
  Keyboard.press(48);
  Keyboard.release(48);
  
  while(true) {
    delay(100);
  }
}
