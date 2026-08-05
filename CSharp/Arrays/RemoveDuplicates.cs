using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Arrays
{
    public static class RemoveDuplicates
    {
        public static List<T> Run<T>(IEnumerable<T> items)
        {
            var seen = new HashSet<T>();
            var result = new List<T>();

            foreach (var item in items)
            {
                if (seen.Add(item))
                    result.Add(item);
            }

            return result;
        }
    }
}
