// DAY 22: LeetCode Medium

// Task 1: Add Two Numbers
var addTwoNumbers = function(l1, l2) {
    
    let temp1 = l1, temp2 = l2, l3 = null, temp3;
    let sum, digit, carry;
    sum = temp1.val + temp2.val;
    l3 = new ListNode(sum%10);
    temp3 = l3;
    carry = Math.floor(sum/10);
    temp1 = temp1.next;
    temp2 = temp2.next;
    
    while (temp1 && temp2)
    {
        sum = temp1.val + temp2.val + carry;
        let newnode = new ListNode(sum%10);
        temp3.next = newnode;
        carry = Math.floor(sum/10);
        temp3 = temp3.next;
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    
    while (temp1)
    {
        sum = temp1.val + carry;
        let newnode = new ListNode(sum%10);
        temp3.next = newnode;
        carry = Math.floor(sum/10);
        temp3 = temp3.next;
        temp1 = temp1.next;
    }
    
    while (temp2)
    {
        sum = temp2.val + carry;
        let newnode = new ListNode(sum%10);
        temp3.next = newnode;
        carry = Math.floor(sum/10);
        temp3 = temp3.next;
        temp2 = temp2.next;
    }
    
    if (carry > 0)
    {
        let newnode = new ListNode(carry);
        temp3.next = newnode;
        temp3 = temp3.next;
    }
    temp3.next = null;
    return l3;
};


// Task 2:  Longest Substring Without Repeating Characters
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0)
        return 0;
    let start = 0, max_len = 1, map = {};
    map[s[0]]=0;
    for (let i = 1; i < s.length; i++)
    {
        if (map.hasOwnProperty(s[i]) && map[s[i]] >= start)
            start = map[s[i]]+1;
        map[s[i]] = i;
        
        let curr_len = i-start+1;
        if (curr_len > max_len)
            max_len = curr_len;
    }
    return max_len;
};


// Task 3: Container With Most Water
function min(a,b)
{
    if (a > b)
        return b;
    else
        return a;
}
function max(a,b)
{
    if (a > b)
        return a;
    else
        return b;
}
var maxArea = function(height) {
    let left = 0, right = height.length-1, max_area = 0;
    while (left < right)
    {
        let curr_area = min(height[left],height[right]) * (right-left);
        max_area = max(max_area, curr_area);
        
        if (height[left] < height[right])
            left++;
        else
            right--;
    }
    return max_area;
};



// Task 4: 3 Sum
var threeSum = function(nums) {
    nums.sort((a,b)=>{return a-b});
    let set = new Set(), res = [];
    for (let i = 0; i < nums.length; i++)
    {
        let j = i+1, k = nums.length-1;
        while (j < k)
        {
            let sum = nums[i]+nums[j]+nums[k];
            if (sum == 0)
            {
                let triplet = [nums[i],nums[j],nums[k]];
                let key = triplet.join(',');
                if (!set.has(key))
                {
                    res.push(triplet);
                    set.add(key);
                }
                j++,k--;
            }
                
            else if (sum < 0)
                j++;
            else
                k--;
        }
    }
    return res;
};



// Task 5: Group Anagrams
var groupAnagrams = function(strs) {
    const anagramMap = new Map();

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(str);
    }

    return Array.from(anagramMap.values());
};