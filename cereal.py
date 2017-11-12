import serial;
import sys;

ser = serial.Serial('');

while True:
    print(ser.readline());
    sys.stdout.flush();
