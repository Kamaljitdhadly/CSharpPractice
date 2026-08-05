using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Timers;

namespace CSharpPractice.CSharp.Arrays
{

    //Time and Space Complexity
    //Time Complexity: O(n)
    //Each element is processed once.
    //Space Complexity: O(n)
    //The dictionary stores up to n elements.
    public static class TwoSum1
    {
        public static int[] Run(int[] nums, int target)
        {
            for (int i = 0; i < nums.Length; i++)
            {
                for (int j = i + 1; j < nums.Length; j++)
                {
                    if (nums[i] + nums[j] == target)
                    {
                        return new int[] { i, j };
                    }
                }
            }
            return new int[] { };
        }
    }
}
