using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class ReverseOrderOfWords
    {
        public static string Run() 
        {
           string str = "My name is kamaljit singh";

           string[] strarray = str.Split(' ');

            string reverseorderofwordsstr = "";
            for (int i = strarray.Length - 1; i >= 0; i--)
            {
                reverseorderofwordsstr += strarray[i] + ' ';
            }
           return reverseorderofwordsstr;
        }
    }
}
