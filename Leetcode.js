Remove Duplicates from Sorted Array


const removeDuplicates = function removeDuplicates(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j += 1) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};



Populating Next Right Pointers in Each Node

@param {TreeLinkNode} 
@return {void} 

var connect = function(root) {
  if (!root) { return }
  if (root.left !== null) {
    root.left.next = root.right
    connect(root.left)
  }
  if (root.right !== null) {
    if (root.next !== null) {
      root.right.next = root.next.left
    }
    connect(root.right)
  }
};

         
Permutations

* @param {number[]} nums
	 * @return {number[][]}
	 */
	var permute = function (nums) {
	    if (!nums.length) return [];
	    var res = [[]];
	    for (var i = 0; i < nums.length; i++) {
	        var len = res.length;
	        for (var j = 0; j < len; j++) {
	            var oldArr = res.shift();
	            for (var k = 0; k <= oldArr.length; k++) {
	                var newArr = oldArr.slice();
	                newArr.splice(k, 0, nums[i]);
	                res.push(newArr);
	            }
	        }
	    }
	    return res;
	};
	console.log(permute([1, 2, 3]));

         
         
         
powerOfThree         
         
         
var isPowerOfThree = function(n) {
	    if (n === 0) return false;
	    if (n === 1) return true;
	    return n % 3 === 0 && isPowerOfThree(Math.floor(n / 3));
	};
	
	// iterative Ways
	var isPowerOfThree = function(n) {
	    if (n > 1) {
	        while (n % 3 === 0) {
	            n = Math.floor(n / 3);
	        }
	    }
	    return n === 1;
	};

         
         
         
         
         
         
