import serial
import requests
import json

usbport = '/dev/cu.usbmodem1441'
token = ''
url = 'https://api.simino.xyz/v1/record/createRecord'

def main():
    ser = serial.Serial(usbport, 9600)
    while True:
        score = ser.readline()
        score = score.decode("utf-8")
        score = int(score)
        print('score ', score)
        data = {'token':token, 'score':score }
        data = json.dump(data)
        requests.post(url, data = data)

if __name__ == '__main__':
    main()
