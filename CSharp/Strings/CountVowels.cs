using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class CountVowels
    {
        public static int Run(string str)
        {
            const string vowels = "aeiouAEIOU";
            int count = 0;


            foreach (char ch in str)
            {
                if (vowels.Contains(ch)) count++;
            }

            return count;  
        }
    }
}
