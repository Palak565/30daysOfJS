// DAY 23: LeetCode Hard

// Task 1: Median of Two Sorted Arrays
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [];
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length)
    {
        if (nums1[i] <= nums2[j])
            nums3.push(nums1[i++]);
        else
            nums3.push(nums2[j++]);
    }
    while (i < nums1.length)
        nums3.push(nums1[i++]);
    while (j < nums2.length)
        nums3.push(nums2[j++]);
    
    let mid = Math.floor(nums3.length/2);
    if (nums3.length % 2 == 0)
        return (nums3[mid-1]+nums3[mid])/2;
    else
        return nums3[mid];
};


// Task 2: Merge k Sorted Lists
function mergeKLists(lists) {

    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode();
        let current = dummy;
        
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }
        
        if (l1 !== null) current.next = l1;
        if (l2 !== null) current.next = l2;
        
        return dummy.next;
    };

    if (lists.length === 0) return null;

    while (lists.length > 1) {
        const mergedLists = [];
        
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        
        lists = mergedLists;
    }

    return lists[0];
}


// Task 3: Trapping Rain Water
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
};



// Task 4: N Queens
function solveNQueens(n) {
    const solutions = [];
    const board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
  
    function isSafe(row, col) 
    {
        for (let i = 0; i < row; i++) 
        {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) 
        {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) 
        {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }
  
    function placeQueens(row) 
    {
        if (row === n) 
        {
            const solution = [];
            for (let i = 0; i < n; i++) 
            {
                solution.push(board[i].join(''));
            }
            solutions.push(solution);
            return;
        }
  
        for (let col = 0; col < n; col++) 
        {
            if (isSafe(row, col)) 
            {
                board[row][col] = 'Q';
                placeQueens(row + 1);
                board[row][col] = '.';
            }
        }
    }
  
    placeQueens(0);
    return solutions;
}


// Task 5: Word Ladder
var ladderLength = function (beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) == -1) return 0;

    let visited = new Set();
    let queue = [beginWord];
    let length = 0;
    let wordSet = new Set(wordList);

    while (queue.length > 0) 
    { 
        let size = queue.length;
        length++;

        for (let i = 0; i < size; i++) 
        {
            let current = queue.shift(); 

            for (let j = 0; j < current.length; j++) 
            { 
                let temp = current.split("");
                
                for (let char = 97; char <= 122; char++) {
                    temp[j] = String.fromCharCode(char);

                    let newWord = temp.join("");
                    if (newWord == endWord) { 
                        return length + 1;
                    }

                    if (wordSet.has(newWord) && !visited.has(newWord)) {
                        queue.push(newWord);
                        visited.add(newWord);
                    }
                }
            }
        }
    }

    return 0;
};