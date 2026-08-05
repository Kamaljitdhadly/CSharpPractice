using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Numbers
{
    public static class FibonacciUpTo
    {
        public static List<int> Run(int max) 
        {
            List<int> sequence = new List<int>();

            int a = 0;
            int b = 1;
            int c = 0;
            sequence.Add(a);
            sequence.Add(b);

            while (a + b < max)
            {
                c = a + b;
                a = b;
                b = c;

                sequence.Add(c);
            }

            return sequence;
        }
    }
}
