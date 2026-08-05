using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Arrays
{
    public static class FindSecondLargest
    {
        public static int Run(int[] array)
        {
            //int secondlargestno = 0;

            Array.Sort(array);
            return array[array.Length - 2];
        }
    }
}
