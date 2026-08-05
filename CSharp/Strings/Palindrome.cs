using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class Palindrome
    {
        public static bool Run()
        {
            string str = "hello";

            int index = str.Length - 1;

            for (int i = 0; i < str.Length / 2; i++)
            {
                if (str[i] != str[index]) {
                    return false;
                }
                index--;
            }

            return true;
        }
    }
}
