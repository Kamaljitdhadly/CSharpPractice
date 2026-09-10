using System;
using System.Collections.Generic;
using System.Text;

namespace CSharpPractice.CSharp.Arrays
{
    public class ListNode
    {
        public int val;
        public ListNode next;
        public ListNode(int val = 0, ListNode next = null)
        {
            this.val = val;
            this.next = next;
        }
    }

    public class Solution
    {
        public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
        {
            string l1_str = "";
            string l2_str = "";

            while (true)
            {
                l1_str += l1.val;
                l1 = l1.next;

                if (l1 == null)
                {
                    break;
                }
                
            }

            while (true)
            {
                l2_str += l2.val;
                l2 = l2.next;

                if (l2 == null)
                {
                    break;
                }
            }

            char[] chararray = l1_str.ToCharArray();
            Array.Reverse(chararray);
            l1_str = new string(chararray);


            chararray = l2_str.ToCharArray();
            Array.Reverse(chararray);
            l2_str = new string(chararray);

            int Finalvalue = Convert.ToInt32(l1_str) + Convert.ToInt32(l2_str);

            string finalvaluestr = Finalvalue.ToString();

            ListNode templn = null;

            for (int i = 0; i <= finalvaluestr.Length - 1; i++)
            {
                char ch = finalvaluestr[i];
                int val = (int)char.GetNumericValue(ch);
                templn = new ListNode(val, templn);
            }

            return templn;
        }
    }
}
