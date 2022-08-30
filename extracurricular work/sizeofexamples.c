//explaining how sizeof() works to someone in the C chat with a demo since it's a bit weird
#include<stdio.h>

int main()
{
    int intArray[10];
    float floatArray[10];
    double doubleArray[10];
    char charArray[10];

    printf("size of int array %ld size of int %ld\n", sizeof(intArray),sizeof(int));
    printf("size of double array %ld size of double %ld\n", sizeof(doubleArray),sizeof(double));
    printf("size of float array %ld size of float %ld\n", sizeof(floatArray), sizeof(float));
    printf("size of char array %ld size of char %ld", sizeof(charArray), sizeof(char));

    return 0;
}
