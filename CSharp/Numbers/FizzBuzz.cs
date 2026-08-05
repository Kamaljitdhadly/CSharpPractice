using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Numbers
{
    public static class FizzBuzz
    {
        public static IEnumerable<string> Run(int n)
        {
            for (int i = 1; i <= n; i++)
            {
                bool fizz = i % 3 == 0;
                bool buzz = i % 5 == 0;

                if (fizz && buzz) yield return "FizzBuzz";
                else if (fizz) yield return "Fizz";
                else if (buzz) yield return "Buzz";
                else yield return i.ToString();
            }
        }
    }
}
