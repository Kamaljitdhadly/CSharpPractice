using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Strings
{
    public static class SubString
    {
        public static string Run(string str, int startIndex, int length)
        {
            if (startIndex < 0 || startIndex >= str.Length)
            {
                throw new ArgumentException(nameof(startIndex));
            }

            if (length < 0 || startIndex + length > str.Length)
            {
                throw new ArgumentException(nameof(length));
            }
            
            
            char[] buffer = new char[length];

            for (int i = 0; i < length; i++)
            {
                buffer[i] =  str[i + startIndex];
            }

            return new string(buffer);
        }
    }
}
