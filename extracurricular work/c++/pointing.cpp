//pointing
// <-Ö>

#include<iostream>
#include<string>

using namespace std;
//&var to set a reference
//*var to dereference
int main()
{
    int* pAPointer; //declare pointer
    int* pScore = 0; //declare and initialize a pointer
    int score = 1000;
    pScore = &score; //assign pointer pScore address of variable score
    cout << "assigning &score to pScore\n";
    cout << "&score is: " << &score  <<"\n";
    cout << "pScore is: " << pScore  <<"\n";
    cout << "score is: "  << score   << "\n";
    cout << "*pScore is: "<< *pScore << "\n\n";

    cout << "adding 500 to score\n";
    score += 500;
    cout << "score is: "  << score   << "\n";
    cout << "*pScore is: "<< *pScore << "\n\n";

    cout <<"adding 500 to *pScore\n";
    *pScore +=500;
    cout << "score is: "  << score   <<"\n";
    cout << "*pScore is: "<< *pScore <<"\n\n";

    cout <<"assigning &newScore to pScore\n";
    int newScore = 5000;
    pScore = &newScore;
    cout << "&newScore is: "<< &newScore<< "\n";
    cout << "pScore is: "   << pScore   << "\n";
    cout << "newScore is: " << newScore << "\n";
    cout << "*pScore is: "  << *pScore  << "\n\n";

    cout << "assigning &str to pStr\n";
    string str = "score";
    string* pStr = &str; //point to string object
    cout << "str is: "            << str            << "\n";
    cout << "*pStr is: "          << *pStr          << "\n";
    cout << "(*pStr).size() is: " << (*pStr).size() << "\n";
    cout << "pStr->size() is: "   << pStr->size()   << "\n";

    return 0;
}
