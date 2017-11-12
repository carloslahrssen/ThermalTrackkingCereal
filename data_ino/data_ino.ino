int temp = A0;

int R0 = 100000;
int B = 4275;
void setup(){
    Serial.begin(9600);
    
}
void loop(){
  int a = analogRead(temp);
  float R = 1023.0/a-1.0;
  R = R0*R;
  float temp = 1.0/(log(R/R0)/4275+1/298.15)-273.15;
  
  Serial.println(temp*1.8+32);
   
  delay(1000);
}
