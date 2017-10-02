import serial
import requests
import json

usbport = '/dev/cu.usbmodem1441' # change the usb port
# =============================================
token = 'a38aaddc-ac66-46f7-9faf-80c4ccfe8e7c' # change the token
# =============================================
url = 'https://api.simino.xyz/v1/record/createRecord'
# url = 'http://127.0.0.1:4000/v1/record/createRecord'

def main():
    ser = serial.Serial(usbport, 9600)
    while True:
        score = ser.readline()
        score = score.decode("utf-8")
        score = int(score)
        print('score ', score)
        data = {'token':token, 'score':score }
        data = json.dumps(data)
        headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
        feedback = requests.post(url, data = data, headers= headers)
        print(feedback.json())

def test():
    score = 1
    data = {'token': token, 'score': score}
    data = json.dumps(data)
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    feedback = requests.post(url, data = data, headers = headers)
    print(feedback.json())

if __name__ == '__main__':
    main()
    # test()
