#include<iostream>
#include<string>
#include<vector>

using namespace std;

int main()
{
    //alright, looks like this is just going over some basic list operations
    //seems like c++ calls lists vectors. wonder why.
    vector<string> inventory;
    //looks like you can initialize it to start with a bunch of items of the same value like this
    //vector<string> inventory(10, "nothing");
    //which makes vector<string> of length 10 with all elements initialized to "nothing"

    //guess this is pretty much the same as javascript's push operator
    inventory.push_back("sword");
    inventory.push_back("armor");
    inventory.push_back("shield");

    //and it looks like instead of .length, c++ uses .size()
    cout << "You have " << inventory.size() << " items.\n";
    cout << "\nYour items:\n";
    for(unsigned int i=0; i<inventory.size();++i)
    {
        //access items at an index with variable[index]
        cout << inventory[i] << endl;
    }
    cout << "\nYou trade your sword for a battle axe.\n";
    //change value at index with vec[n] = value
    inventory[0] = "battle axe";
    for(unsigned int i=0; i < inventory.size(); ++i)
    {
        cout << inventory[i] << endl;
    }
    cout << "\nThe item name '" << inventory[0] << "' has ";
    //access length of item at position i with size(). might just be a string operator though.
    cout << inventory[0].size() << " letters in it.\n";
    
    cout << "\nYour shield is destroyed in a fierce battle.\n";
    //looks like this just works like the arr.pop() operator in javascript, though it's a bit clearer to read
    inventory.pop_back();

    cout << "\nYour items:\n";
    for(unsigned int i=0; i< inventory.size(); i++)
    {
        cout << inventory[i] << endl;
    }
    cout << "\nYou were robbed of all of your possessions by a thief.";
    //and you can empty the vector with vec.clear()
    inventory.clear();

    //and check if the vector has nothing with vec.empty()
    if(inventory.empty())
    {
        cout << "\nYou have nothing.\n";
    }
    else
    {
        cout << "\nYou have at least one item.\n";
    }
    return 0;
}
