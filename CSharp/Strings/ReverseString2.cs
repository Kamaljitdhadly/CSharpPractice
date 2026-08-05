using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class ReverseString2
    {
        public static string Run() 
        {
           string str = "My name is kamaljit singh";
           char[] chars = new char[str.Length];

           int index = 0;

           for(int i = str.Length - 1; i >= 0; i--){
             chars[index] = str[i];

             index++;
           }

           string reversestring = new (chars);
           return reversestring;
        }
    }
}
