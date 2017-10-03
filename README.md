# Simino

The project's name is Simino, it from Simon and Arduino.

It is Simon game, but Simino can take you to Online.

[Simino](https://simino.xyz) can store your records and you can play with other people.

# Circuit

![](https://i.imgur.com/8H34Gb6.png)
![](https://i.imgur.com/uPHlTfY.jpg)

# What does build it?

Backend: Express.js & Node.JS
Frontend: Vue.js
Arduino

All of code host on [GitHub](https://github.com/blueandhack/Simino)

# How to run

You should download `run.py` and Arduino folder to your computer,
and you should upload Arduino

Then, install python dependencies

```
python3 -m pip install pyserial
python3 -m pip install requests
```
After, go to [Simino](http://simino.xyz/#/new) to get token

Also, you need replace your token in `run.py` and your usb port

Finally, connect your Arduino to your computer and run python script

`python3 run.py`

And play it!


