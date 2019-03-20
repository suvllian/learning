#include<stdio.h>

void consoleLog(int num);
int add(int num1, int num2) {
    int result = num1 + num2;

    consoleLog(result);
    
    return result;
}