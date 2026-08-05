using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Arrays
{
    public static class FindSecondLargest1
    {
        public static int Run(int[] array)
        {
            if (array.Length < 2)
            {
                throw new ArgumentException("Array must contain atleast 2 elements");
            }

            int largest = int.MinValue;
            int secondlargest = int.MinValue;

            foreach (var item in array)
            {
                if (item > largest)
                {
                    secondlargest = largest;
                    largest = item;
                }
                else if (item < largest && item > secondlargest) {
                    secondlargest = item;
                }
            }

            if (secondlargest == int.MinValue)
                throw new InvalidOperationException("No distinct second largest value.");

            return secondlargest;
        }
    }
}
