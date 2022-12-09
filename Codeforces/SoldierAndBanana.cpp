#include <iostream>
using namespace std;
int main()
{
  int k, n, w; // //the initital value of the banana === k, the initial no of dollars=== n,the no of bananas he has to buy === w
  cin >> k >> n >> w;
  int sum = 0;
  for (int i = 1; i <= w; i++)
  {
    sum += i * k;
  }
  if (n > sum)
    cout << "0";
  else
    cout << sum - n;
}