using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class ReverseString1
    {
        public static string Run() 
        {
            string str = "my name is kamaljit singh";
            char[] chars = str.ToCharArray();

            string reversestring = "";
            for(int i = chars.Length - 1; i > 0; i--){
                reversestring += chars[i];
            }
            return reversestring;
        }
    }
}
