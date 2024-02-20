#include <iostream>
using namespace std;

int calcAge(int birthYear) {
  int currentYear = 2024; // update this value as needed
  return currentYear - birthYear;
}

int main() {
  int birthYear = 2000;
  int age = calcAge(birthYear);
  cout << "A person born in " << birthYear << " is " << age << " years old." << endl;
  return 0;
}