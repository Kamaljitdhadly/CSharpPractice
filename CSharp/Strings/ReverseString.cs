using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class ReverseString
    {
        public static void Run()
        {
            string input = "Interview";

            char[] chars = input.ToCharArray();

            Array.Reverse(chars);

            Console.WriteLine(new string(chars));
        }
    }
}
