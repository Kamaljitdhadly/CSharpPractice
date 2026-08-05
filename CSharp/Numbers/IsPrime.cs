using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Numbers
{
    public static class IsPrime
    {
        public static bool Run(int num) 
        {
            if (num <= 1) return false;
            if (num == 2) return true;
            if (num % 2 == 0) return false;


            for (int i = 3; i * i < num; i+=2)
            {
                if (num % i == 0)
                {
                    return false;
                }
            }
            return true;
        }
    }
}
