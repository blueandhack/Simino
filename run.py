import serial
import requests
import json

usbport = '/dev/cu.usbmodem1441'

def main():
    ser = serial.Serial(usbport, 9600)
    while True:
        score = ser.readline()
        score = score.decode("utf-8")
        score = int(score)
        print('score ', score)

if __name__ == '__main__':
    main()
