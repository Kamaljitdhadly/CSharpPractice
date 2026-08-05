using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class ReverseOrderOfWords1
    {
        public static string Run() 
        {
           string str = "My name is kamaljit singh";

           string[] words = str.Split(' ', StringSplitOptions.RemoveEmptyEntries);
           Array.Reverse(words);
           return string.Join(' ', words);
        }
    }
}
