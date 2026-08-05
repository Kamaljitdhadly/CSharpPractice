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
    public static class TwoSum
    {
        public static int[] Run(int[] nums, int target)
        {
            Dictionary<int, int> map = new Dictionary<int, int>();

            for (int i = 0; i < nums.Length; i++)
            {
                int complement = target - nums[i];
                if (map.ContainsKey(complement))
                {
                    return new int[] { i, map[complement] };
                }
                map[nums[i]] = i;
            }

            return new int[] { };
        }
    }
}
