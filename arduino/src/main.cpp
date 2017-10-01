#include <Arduino.h>
#include <Tone.h>

int randomArray[100];
int inputArray[100];

int button[] = {2, 3, 4, 5};
int led[] = {7, 8, 9, 10};
int speakerOut = 11;

// from https://www.arduino.cc/en/Tutorial/ToneMelody?from=Tutorial.Tone
int melody[] = {NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3,
                NOTE_G3, 0,       NOTE_B3, NOTE_C4};

int noteDurations[] = {4, 8, 8, 4, 4, 4, 4, 4};

int note[] = {NOTE_C4, NOTE_C4, NOTE_G4, NOTE_C5, NOTE_G4, NOTE_C5};
int duration[] = {4, 4, 9, 5, 9, 5};

int wrongMelody[] = {NOTE_C4, NOTE_B3, 0,       NOTE_G3,
                     NOTE_A3, NOTE_G3, NOTE_G3, NOTE_G4};
int wrongDurations[] = {4, 4, 4, 4, 4, 8, 8, 4};

int level = 0;
int inputLevel = 0;
int buttonStatus = 0;

int computer = 0;
int player = 0;

void setup() {
  Serial.begin(9600);

  for (int i = 0; i < 4; i++) {
    pinMode(led[i], OUTPUT);
  }

  for (int i = 0; i < 4; i++) {
    pinMode(button[i], INPUT);
    digitalWrite(button[i], HIGH);
  }

  // generate random seed
  randomSeed(analogRead(0));

  for (int thisNote = 0; thisNote < 8; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    // e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(speakerOut, melody[thisNote], noteDuration);

    if (thisNote == 0 || thisNote == 2) {
      digitalWrite(led[0], HIGH);
    }
    if (thisNote == 1 || thisNote == 3) {
      digitalWrite(led[1], HIGH);
    }
    if (thisNote == 4 || thisNote == 6) {
      digitalWrite(led[2], HIGH);
    }
    if (thisNote == 5 || thisNote == 7) {
      digitalWrite(led[3], HIGH);
    }

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    // stop the tone playing:
    noTone(speakerOut);
    digitalWrite(led[0], LOW);
    digitalWrite(led[1], LOW);
    digitalWrite(led[2], LOW);
    digitalWrite(led[3], LOW);
  }
}

void playTone(int note, int duration) {
  int noteDuration = 1000 / duration;
  tone(speakerOut, note, noteDuration);
  int pauseBetweenNotes = noteDuration * 1.30;
  delay(pauseBetweenNotes);
  noTone(speakerOut);
}

void bingo() {
  for (int thisNote = 0; thisNote < 8; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    // e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(speakerOut, melody[thisNote], noteDuration);

    if (thisNote == 0 || thisNote == 2) {
      digitalWrite(led[0], HIGH);
    }
    if (thisNote == 1 || thisNote == 3) {
      digitalWrite(led[1], HIGH);
    }
    if (thisNote == 4 || thisNote == 6) {
      digitalWrite(led[2], HIGH);
    }
    if (thisNote == 5 || thisNote == 7) {
      digitalWrite(led[3], HIGH);
    }

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    // stop the tone playing:
    noTone(speakerOut);
    digitalWrite(led[0], LOW);
    digitalWrite(led[1], LOW);
    digitalWrite(led[2], LOW);
    digitalWrite(led[3], LOW);
  }
}

void wrong() {
  for (int thisNote = 0; thisNote < 8; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    // e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / wrongDurations[thisNote];
    tone(speakerOut, wrongMelody[thisNote], noteDuration);

    if (thisNote == 0 || thisNote == 2) {
      digitalWrite(led[3], HIGH);
    }
    if (thisNote == 1 || thisNote == 3) {
      digitalWrite(led[2], HIGH);
    }
    if (thisNote == 4 || thisNote == 6) {
      digitalWrite(led[1], HIGH);
    }
    if (thisNote == 5 || thisNote == 7) {
      digitalWrite(led[0], HIGH);
    }

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    // stop the tone playing:
    noTone(speakerOut);
    digitalWrite(led[0], LOW);
    digitalWrite(led[1], LOW);
    digitalWrite(led[2], LOW);
    digitalWrite(led[3], LOW);
  }
}

void fail() {
  wrong();
  level = 0;
  computer = 0;
  player = 0;
  inputLevel = 0;
}

void input() {
  for (; inputLevel < level;) {

    for (int i = 0; i < 4; i++) {

      buttonStatus = digitalRead(button[i]);

      if (buttonStatus == LOW && button[i] == 2) {
        digitalWrite(led[0], HIGH);
        playTone(NOTE_G3, 100);
        inputArray[inputLevel] = 1;
        delay(200);
        digitalWrite(led[0], LOW);
        if (randomArray[inputLevel] != inputArray[inputLevel]) {
          fail();
        } else {
          inputLevel++;
        }
      }
      if (buttonStatus == LOW && button[i] == 3) {
        digitalWrite(led[1], HIGH);
        playTone(NOTE_A3, 100);
        inputArray[inputLevel] = 2;
        delay(200);
        digitalWrite(led[1], LOW);
        if (randomArray[inputLevel] != inputArray[inputLevel]) {
          fail();
        } else {
          inputLevel++;
        }
      }
      if (buttonStatus == LOW && button[i] == 4) {
        digitalWrite(led[2], HIGH);
        playTone(NOTE_B3, 100);
        inputArray[inputLevel] = 3;
        delay(200);
        digitalWrite(led[2], LOW);
        if (randomArray[inputLevel] != inputArray[inputLevel]) {
          fail();
        } else {
          inputLevel++;
        }
      }
      if (buttonStatus == LOW && button[i] == 5) {
        digitalWrite(led[3], HIGH);
        playTone(NOTE_C4, 100);
        inputArray[inputLevel] = 4;
        delay(200);
        digitalWrite(led[3], LOW);
        if (randomArray[inputLevel] != inputArray[inputLevel]) {
          fail();
        } else {
          inputLevel++;
        }
      }
    }
  }

  Serial.print("inputLevel: ");
  Serial.print(inputLevel);
  Serial.print("\n");

  if (inputLevel >= level && level != 0) {
    bingo();
    inputLevel = 0;
    level++;
    computer = 1;
    delay(1000);
  }
}

void loop() {
  if (level == 0) {
    digitalWrite(led[0], HIGH);
    digitalWrite(led[1], HIGH);
    digitalWrite(led[2], HIGH);
    digitalWrite(led[3], HIGH);

    for (int thisNote = 0; thisNote < 6; thisNote++) {

      // to calculate the note duration, take one second divided by the note
      // type. e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
      int noteDuration = 1000 / duration[thisNote];
      tone(speakerOut, note[thisNote], noteDuration);

      // to distinguish the notes, set a minimum time between them.
      // the note's duration + 30% seems to work well:
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);
      // stop the tone playing:
      noTone(speakerOut);
      delay(30);
    }

    digitalWrite(led[0], LOW);
    digitalWrite(led[1], LOW);
    digitalWrite(led[2], LOW);
    digitalWrite(led[3], LOW);

    level = 1;
    computer = 1;
  }

  if (computer == 1) {
    randomArray[level - 1] = random(1, 5);

    for (int i = 0; i < level; i++) {
      if (randomArray[i] == 1) {
        digitalWrite(led[0], HIGH);
        playTone(NOTE_G3, 100);
        delay(500);
        digitalWrite(led[0], LOW);
        delay(300);
      }
      if (randomArray[i] == 2) {
        digitalWrite(led[1], HIGH);
        playTone(NOTE_A3, 100);
        delay(500);
        digitalWrite(led[1], LOW);
        delay(300);
      }
      if (randomArray[i] == 3) {
        digitalWrite(led[2], HIGH);
        playTone(NOTE_B3, 100);
        delay(500);
        digitalWrite(led[2], LOW);
        delay(300);
      }
      if (randomArray[i] == 4) {
        digitalWrite(led[3], HIGH);
        playTone(NOTE_C4, 100);
        delay(500);
        digitalWrite(led[3], LOW);
        delay(300);
      }
    }
    computer = 0;
    player = 1;
  }

  if (player == 1) {
    input();
  }
}
