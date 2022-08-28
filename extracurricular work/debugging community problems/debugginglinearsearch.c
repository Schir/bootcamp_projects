//debugging someone else's code on the codecademy discord again
#include <stdio.h>

//this is the original code
/*
int linearSearch(const int array[], int k, int size){

 for (int i = 0; i < size; i++)
    if (array[i] == k)
      return i;
  return -1;
}


int main() 

{
  int array[] = {3,14,26,37,49,53,64,71,82,95};
  int k = 10;
  int size = 9;
  int ele = linearSearch(array,k,size);

printf("Enter Element:\n");
scanf("%d",&k);



    printf("Element is found on Index: %d\n",ele);

return 0;

}
*/
//and this is what I proposed to fix it
int linearSearch(const int array[], int k, int size){

 for (int i = 0; i < size; i++)
    if (array[i] == k)
      return i;
  return -1;
}

//it's pretty much the same as the above, 
int main() 
{
    int array[] = {3,14,26,37,49,53,64,71,82,95};
    int k = 10;
    int size = 9;


    printf("Enter Element:\n");
    scanf("%d",&k);
    //the problem the guy was running into before was that it was always printing ele as -1.
    //I took a look at it, and it looked like this is because assigning the value of the ele int before getting the user to set the value of k
    //so it was always assigning ele to be the search result for k=10, which wasn't in the array, and so returned -1.
    //so i told the guy to just move the assignment below the scanf and recompile.
    //this fixed the problem.
    int ele = linearSearch(array,k,size);

    printf("Element is found on Index: %d\n",ele);

    return 0;

}
