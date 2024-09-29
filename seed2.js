import admin from 'firebase-admin';



  const serviceAccount = {
      "type": "service_account",
      "project_id": "ragmockinterviewer",
      "private_key_id": "9d01501846f235b5e2497ec451377cc8ee0598ce",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbHX1hSOHEwN4h\nbgJPDHXXchxWPjvinlbfEqioQy2gArxx7qVyouM/Hpet/X820gHtrqWSw5uaiLgi\noNmT0ul4a/k3tod9yaQMkl4uGRPmoTW5GY2z3MCArA1KfEDGUviaYRqr3nzWHkWB\n/k3Lvz1uuCJV6ETCfX1lgswzd5IehAeBqGIrUPUV4/onQyH6DsmDuqDeLm4k6d1E\nzF97mXBqqel0wkZHNtL/LGfWeCFBhsLiVPDCWPUPnsi56DxntuE6k4dXf97IRin6\nVhvuM35EhzJF30YBC5923QmH7UJSnGdA9qla4mFt0C/ttlHNGbA5mTCKLxtxGzy9\naa827ohHAgMBAAECggEADHCurdIjpfY7RlOcGZ0qqEToG0oPlVdfCu2Lb3jXmMuU\nTmBPEA9JGUwlLsbYglDHCkBi/Hj9lyGnA/704MHV6TUxd4/LPoGEaQWlsjal8hn6\nAQcp4T8pxhm+lsQvhfME/qLVDv1Ol3YthRVemQWZDnWxgVtyt/DEU09AmmAcsX27\njmbtSLo8NEGEVEagmPrBtx83Q4S3HbKBaxJsWS7J7aizhXHcC7mHHsxTlHFRHM7q\nnLR7eEd4m97THgl6mcWJjSIutWponhfmbhBMm1PQwjPictKgPxQrcYECNyDRkWqY\nLSYs0RvT46wXJc2ZysaE8CNvZPd7iPoKxfUjzxPY/QKBgQD6HlyWTuRf0wJ7b/l1\nf4b1L7NxAw/nfuNltycpo/47QAqJuQGXulDSXN7Ij75HtqD85OtkQUvn0b06zBDM\nK4SajA56CPLr2Xij3ooqicHm+D7fRMCxn/0W0n11T41pQIpLt8Eh9ajjGSjQTMFN\nUp6KKEHAB9HH+fj9RQw4cpz7awKBgQDgRH85bcFRMadaA1QGkTX2/WB/4RVgpyzQ\n6Pe7aeGD9ajAxK6iK/aPWjPdQnelrir+VIgkY5W+4yuksGUacevNBFV5lSf1BQk7\nEj2I0P7P7pxJUs4TpfqgJh0ooLLSI8yH9lm1ojUaDVSm232GcSvf1Uw759I+Ozmc\no6irPHhZlQKBgEPuyybn9o8wOJReLVsEcBtYAVzIgCFYDVsrC6/7oqllE3ekkBIt\nwJXiM4A1ynCf4cnOQ0DPm1YzWToHAujxSOrQ732lwJTeVC3t24kCMXASLMFnYw7b\nbVotgXXDTZ0wsl8uYX5fwqcrxjINJtNhhT3xASqu9QNjmYTwpAkQ2CJRAoGBANHU\nhMywuj1DnfcEQiva1YkATLeZWy0RfUcBkjgRuuSChp/F5jbpt0ks9nXAaL3llWhc\novyZCFSPrBfsysvRZvRtZ6PYQIhpa9ePG2/VS3Q1JpkcFqAfnb0VrBaFNIqU4Bse\nDZV57QExE9ECcBHH9Wr54Nfz8Kw1MZQzM+7zJw95AoGBAO112VxTPOqY8vmSdFRr\nd8NJT0Dpb6yVfCs9t/l7QpoAiXwB3BAQcRjHpqJgUsW2zlFmUHDFajhHDpiXMtVg\n9t7p99edcK5PS1R1wbNpHo8JISl0Gr3/M3OTmIs8Mvkkr/F8degZ+lrp/wGP45T0\nYyfvGJDfAErHyOfev3B8tGt0\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-1sjho@ragmockinterviewer.iam.gserviceaccount.com",
      "client_id": "105900234375701696107",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1sjho%40ragmockinterviewer.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
  };

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  const db = admin.firestore();

  const leetcodeData = {
    'arrays_and_hashing': {
      name: 'Arrays and Hashing',
      problems: [
        {
          name: 'Contains Duplicate',
          difficulty: 'Easy',
          description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
          examples: {
            '[1,2,3,1]': 'true',
            '[1,2,3,4]': 'false',
            '[1,1,1,3,3,4,3,2,4,2]': 'true'
          },
          providedCode: 'def containsDuplicate(self, nums: List[int]) -> bool:'
        },
        {
          name: 'Valid Anagram',
          difficulty: 'Easy',
          description: 'Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
          examples: {
            's = "anagram", t = "nagaram"': 'true',
            's = "rat", t = "car"': 'false'
          },
          providedCode: 'def isAnagram(self, s: str, t: str) -> bool:'
        },
        {
          name: 'Two Sum',
          difficulty: 'Easy',
          description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
          examples: {
            'nums = [2,7,11,15], target = 9': '[0,1]',
            'nums = [3,2,4], target = 6': '[1,2]',
            'nums = [3,3], target = 6': '[0,1]'
          },
          providedCode: 'def twoSum(self, nums: List[int], target: int) -> List[int]:'
        },
        {
          name: 'Group Anagrams',
          difficulty: 'Medium',
          description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.',
          examples: {
            'strs = ["eat","tea","tan","ate","nat","bat"]': '[["bat"],["nat","tan"],["ate","eat","tea"]]',
            'strs = [""]': '[[""]]',
            'strs = ["a"]': '[["a"]]'
          },
          providedCode: 'def groupAnagrams(self, strs: List[str]) -> List[List[str]]:'
        },
        {
          name: 'Top K Frequent Elements',
          difficulty: 'Medium',
          description: 'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
          examples: {
            'nums = [1,1,1,2,2,3], k = 2': '[1,2]',
            'nums = [1], k = 1': '[1]'
          },
          providedCode: 'def topKFrequent(self, nums: List[int], k: int) -> List[int]:'
        },
        {
          name: 'Product of Array Except Self',
          difficulty: 'Medium',
          description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm that runs in O(n) time and without using the division operation.',
          examples: {
            'nums = [1,2,3,4]': '[24,12,8,6]',
            'nums = [-1,1,0,-3,3]': '[0,0,9,0,0]'
          },
          providedCode: 'def productExceptSelf(self, nums: List[int]) -> List[int]:'
        },
        {
          name: 'Valid Sudoku',
          difficulty: 'Medium',
          description: 'Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules: 1) Each row must contain the digits 1-9 without repetition. 2) Each column must contain the digits 1-9 without repetition. 3) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.',
          examples: {
            'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]': 'true',
            'board = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]': 'false'
          },
          providedCode: 'def isValidSudoku(self, board: List[List[str]]) -> bool:'
        },
        {
          name: 'Encode and Decode Strings',
          difficulty: 'Medium',
          description: 'Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.',
          examples: {
            'dummy_input = ["Hello","World"]': '["Hello","World"]',
            'dummy_input = [""]': '[""]'
          },
          providedCode: 'class Codec:\n    def encode(self, strs: List[str]) -> str:\n\n    def decode(self, s: str) -> List[str]:'
        },
        {
          name: 'Longest Consecutive Sequence',
          difficulty: 'Medium',
          description: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.',
          examples: {
            'nums = [100,4,200,1,3,2]': '4',
            'nums = [0,3,7,2,5,8,4,6,0,1]': '9'
          },
          providedCode: 'def longestConsecutive(self, nums: List[int]) -> int:'
        }
      ]
    },
    'two_pointers': {
      name: 'Two Pointers',
      problems: [
        {
          name: 'Valid Palindrome',
          difficulty: 'Easy',
          description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.',
          examples: {
            's = "A man, a plan, a canal: Panama"': 'true',
            's = "race a car"': 'false',
            's = " "': 'true'
          },
          providedCode: 'def isPalindrome(self, s: str) -> bool:'
        },
        {
          name: 'Two Sum II Input Array Is Sorted',
          difficulty: 'Medium',
          description: 'Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2. The tests are generated such that there is exactly one solution. You may not use the same element twice.',
          examples: {
            'numbers = [2,7,11,15], target = 9': '[1,2]',
            'numbers = [2,3,4], target = 6': '[1,3]',
            'numbers = [-1,0], target = -1': '[1,2]'
          },
          providedCode: 'def twoSum(self, numbers: List[int], target: int) -> List[int]:'
        },
        {
          name: '3Sum',
          difficulty: 'Medium',
          description: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.',
          examples: {
            'nums = [-1,0,1,2,-1,-4]': '[[-1,-1,2],[-1,0,1]]',
            'nums = []': '[]',
            'nums = [0]': '[]'
          },
          providedCode: 'def threeSum(self, nums: List[int]) -> List[List[int]]:'
        },
        {
          name: 'Container With Most Water',
          difficulty: 'Medium',
          description: 'Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water. Notice that you may not slant the container.',
          examples: {
            'height = [1,8,6,2,5,4,8,3,7]': '49',
            'height = [1,1]': '1',
            'height = [4,3,2,1,4]': '16',
            'height = [1,2,1]': '2'
          },
          providedCode: 'def maxArea(self, height: List[int]) -> int:'
        },
        {
          name: 'Trapping Rain Water',
          difficulty: 'Hard',
          description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
          examples: {
            'height = [0,1,0,2,1,0,1,3,2,1,2,1]': '6',
            'height = [4,2,0,3,2,5]': '9'
          },
          providedCode: 'def trap(self, height: List[int]) -> int:'
        }
      ]
    },
    'sliding_window': {
      name: 'Sliding Window',
      problems: [
        {
          name: 'Best Time to Buy And Sell Stock',
          difficulty: 'Easy',
          description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.',
          examples: {
            'prices = [7,1,5,3,6,4]': '5',
            'prices = [7,6,4,3,1]': '0'
          },
          providedCode: 'def maxProfit(self, prices: List[int]) -> int:'
        },
        {
          name: 'Longest Substring Without Repeating Characters',
          difficulty: 'Medium',
          description: 'Given a string s, find the length of the longest substring without repeating characters.',
          examples: {
            's = "abcabcbb"': '3',
            's = "bbbbb"': '1',
            's = "pwwkew"': '3'
          },
          providedCode: 'def lengthOfLongestSubstring(self, s: str) -> int:'
        },
        {
          name: 'Longest Repeating Character Replacement',
          difficulty: 'Medium',
          description: 'You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing the above operations.',
          examples: {
            's = "ABAB", k = 2': '4',
            's = "AABABBA", k = 1': '4'
          },
          providedCode: 'def characterReplacement(self, s: str, k: int) -> int:'
        },
        {
          name: 'Permutation In String',
          difficulty: 'Medium',
          description: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1\'s permutations is the substring of s2.',
          examples: {
            's1 = "ab", s2 = "eidbaooo"': 'true',
            's1 = "ab", s2 = "eidboaoo"': 'false'
          },
          providedCode: 'def checkInclusion(self, s1: str, s2: str) -> bool:'
        },
        {
          name: 'Minimum Window Substring',
          difficulty: 'Hard',
          description: 'Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".',
          examples: {
            's = "ADOBECODEBANC", t = "ABC"': '"BANC"',
            's = "a", t = "a"': '"a"',
            's = "a", t = "aa"': '""'
          },
          providedCode: 'def minWindow(self, s: str, t: str) -> str:'
        },
        {
          name: 'Sliding Window Maximum',
          difficulty: 'Hard',
          description: 'You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.',
          examples: {
            'nums = [1,3,-1,-3,5,3,6,7], k = 3': '[3,3,5,5,6,7]',
            'nums = [1], k = 1': '[1]'
          },
          providedCode: 'def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:'
        }
      ]
    },
    'stack': {
      name: 'Stack',
      problems: [
        {
          name: 'Valid Parentheses',
          difficulty: 'Easy',
          description: 'Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.',
          examples: {
            's = "()': 'true',
            's = "()[]{}"': 'true',
            's = "(]"': 'false'
          },
          providedCode: 'def isValid(self, s: str) -> bool:'
        },
        {
          name: 'Min Stack',
          difficulty: 'Medium',
          description: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the MinStack class: MinStack() initializes the stack object. void push(int val) pushes the element val onto the stack. void pop() removes the element on the top of the stack. int top() gets the top element of the stack. int getMin() retrieves the minimum element in the stack.',
          examples: {
            '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]': '[null,null,null,null,-3,null,0,-2]'
          },
          providedCode: 'class MinStack:\n\n    def __init__(self):\n\n    def push(self, val: int) -> None:\n\n    def pop(self) -> None:\n\n    def top(self) -> int:\n\n    def getMin(self) -> int:'
        },
        {
          name: 'Evaluate Reverse Polish Notation',
          difficulty: 'Medium',
          description: 'Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression. Note that division between two integers should truncate toward zero. It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.',
          examples: {
            'tokens = ["2","1","+","3","*"]': '9',
            'tokens = ["4","13","5","/","+"]': '6',
            'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]': '22'
          },
          providedCode: 'def evalRPN(self, tokens: List[str]) -> int:'
        },
        {
          name: 'Generate Parentheses',
          difficulty: 'Medium',
          description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
          examples: {
            'n = 3': '["((()))","(()())","(())()","()(())","()()()"]',
            'n = 1': '["()"]'
          },
          providedCode: 'def generateParenthesis(self, n: int) -> List[str]:'
        },
        {
          name: 'Daily Temperatures',
          difficulty: 'Medium',
          description: 'Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.',
          examples: {
            'temperatures = [73,74,75,71,69,72,76,73]': '[1,1,4,2,1,1,0,0]',
            'temperatures = [30,40,50,60]': '[1,1,1,0]',
            'temperatures = [30,60,90]': '[1,1,0]'
          },
          providedCode: 'def dailyTemperatures(self, temperatures: List[int]) -> List[int]:'
        },
        {
          name: 'Car Fleet',
          difficulty: 'Medium',
          description: 'There are n cars going to the same destination along a one-lane road. The destination is target miles away. You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] is the speed of the ith car (in miles per hour). A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. The faster car will slow down to match the slower car\'s speed. The distance between these two cars is ignored (i.e., they are assumed to have the same position). A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet. If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet. Return the number of car fleets that will arrive at the destination.',
          examples: {
            'target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]': '3',
            'target = 10, position = [3], speed = [3]': '1',
            'target = 100, position = [0,2,4], speed = [4,2,1]': '1'
          },
          providedCode: 'def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:'
        },
        {
          name: 'Largest Rectangle in Histogram',
          difficulty: 'Hard',
          description: 'Given an array of integers heights representing the histogram\'s bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.',
          examples: {
            'heights = [2,1,5,6,2,3]': '10',
            'heights = [2,4]': '4'
          },
          providedCode: 'def largestRectangleArea(self, heights: List[int]) -> int:'
        }
      ]
    },
    'binary_search': {
      name: 'Binary Search',
      problems: [
        {
          name: 'Binary Search',
          difficulty: 'Easy',
          description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.',
          examples: {
            'nums = [-1,0,3,5,9,12], target = 9': '4',
            'nums = [-1,0,3,5,9,12], target = 2': '-1'
          },
          providedCode: 'def search(self, nums: List[int], target: int) -> int:'
        },
        {
          name: 'Search a 2D Matrix',
          difficulty: 'Medium',
          description: 'Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.',
          examples: {
            'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3': 'true',
            'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13': 'false'
          },
          providedCode: 'def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:'
        },
        {
          name: 'Koko Eating Bananas',
          difficulty: 'Medium',
          description: 'Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours. Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return. Return the minimum integer k such that she can eat all the bananas within h hours.',
          examples: {
            'piles = [3,6,7,11], h = 8': '4',
            'piles = [30,11,23,4,20], h = 5': '30',
            'piles = [30,11,23,4,20], h = 6': '23'
          },
          providedCode: 'def minEatingSpeed(self, piles: List[int], h: int) -> int:'
        },
        {
          name: 'Find Minimum in Rotated Sorted Array',
          difficulty: 'Medium',
          description: 'Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4 times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.',
          examples: {
            'nums = [3,4,5,1,2]': '1',
            'nums = [4,5,6,7,0,1,2]': '0',
            'nums = [11,13,15,17]': '11'
          },
          providedCode: 'def findMin(self, nums: List[int]) -> int:'
        },
        {
          name: 'Search in Rotated Sorted Array',
          difficulty: 'Medium',
          description: 'There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.',
          examples: {
            'nums = [4,5,6,7,0,1,2], target = 0': '4',
            'nums = [4,5,6,7,0,1,2], target = 3': '-1',
            'nums = [1], target = 0': '-1'
          },
          providedCode: 'def search(self, nums: List[int], target: int) -> int:'
        },
        {
          name: 'Time Based Key-Value Store',
          difficulty: 'Medium',
          description: 'Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key\'s value at a certain timestamp. Implement the TimeMap class: TimeMap() Initializes the object of the data structure. void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp. String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".',
          examples: {
            '["TimeMap", "set", "get", "get", "set", "get", "get"]\n[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]': '[null, null, "bar", "bar", null, "bar2", "bar2"]'
          },
          providedCode: 'class TimeMap:\n\n    def __init__(self):\n\n    def set(self, key: str, value: str, timestamp: int) -> None:\n\n    def get(self, key: str, timestamp: int) -> str:'
        },
        {
          name: 'Median of Two Sorted Arrays',
          difficulty: 'Hard',
          description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).',
          examples: {
            'nums1 = [1,3], nums2 = [2]': '2.00000',
            'nums1 = [1,2], nums2 = [3,4]': '2.50000'
          },
          providedCode: 'def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:'
        }
      ]
    },
    'linked_list': {
    name: 'Linked List',
    problems: [
      {
        name: 'Reverse Linked List',
        difficulty: 'Easy',
        description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
        examples: {
          'head = [1,2,3,4,5]': '[5,4,3,2,1]',
          'head = [1,2]': '[2,1]',
          'head = []': '[]'
        },
        providedCode: 'def reverseList(self, head: ListNode) -> ListNode:'
      },
      {
        name: 'Merge Two Sorted Lists',
        difficulty: 'Easy',
        description: 'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
        examples: {
          'l1 = [1,2,4], l2 = [1,3,4]': '[1,1,2,3,4,4]',
          'l1 = [], l2 = []': '[]',
          'l1 = [], l2 = [0]': '[0]'
        },
        providedCode: 'def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:'
      },
      {
        name: 'Reorder List',
        difficulty: 'Medium',
        description: 'You are given the head of a singly linked-list. The list can be represented as: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …',
        examples: {
          'head = [1,2,3,4]': '[1,4,2,3]',
          'head = [1,2,3,4,5]': '[1,5,2,4,3]'
        },
        providedCode: 'def reorderList(self, head: ListNode) -> None:'
      },
      {
        name: 'Remove Nth Node From End of List',
        difficulty: 'Medium',
        description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
        examples: {
          'head = [1,2,3,4,5], n = 2': '[1,2,3,5]',
          'head = [1], n = 1': '[]',
          'head = [1,2], n = 1': '[1]'
        },
        providedCode: 'def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:'
      },
      {
        name: 'Copy List with Random Pointer',
        difficulty: 'Medium',
        description: 'A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.',
        examples: {
          'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]': '[[7,null],[13,0],[11,4],[10,2],[1,0]]',
          'head = [[1,1],[2,1]]': '[[1,1],[2,1]]',
          'head = [[3,null],[3,0],[3,null]]': '[[3,null],[3,0],[3,null]]'
        },
        providedCode: 'def copyRandomList(self, head: "Node") -> "Node":'
      },
      {
        name: 'Add Two Numbers',
        difficulty: 'Medium',
        description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
        examples: {
          'l1 = [2,4,3], l2 = [5,6,4]': '[7,0,8]',
          'l1 = [0], l2 = [0]': '[0]',
          'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]': '[8,9,9,9,0,0,0,1]'
        },
        providedCode: 'def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:'
      },
      {
        name: 'Linked List Cycle',
        difficulty: 'Easy',
        description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.',
        examples: {
          'head = [3,2,0,-4], pos = 1': 'true',
          'head = [1,2], pos = 0': 'true',
          'head = [1], pos = -1': 'false'
        },
        providedCode: 'def hasCycle(self, head: ListNode) -> bool:'
      },
      {
        name: 'Find the Duplicate Number',
        difficulty: 'Medium',
        description: 'Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one repeated number in nums, return this repeated number. You must solve the problem without modifying the array nums and uses only constant extra space.',
        examples: {
          'nums = [1,3,4,2,2]': '2',
          'nums = [3,1,3,4,2]': '3'
        },
        providedCode: 'def findDuplicate(self, nums: List[int]) -> int:'
      },
      {
        name: 'LRU Cache',
        difficulty: 'Medium',
        description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class.',
        examples: {
          '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]': '[null, null, null, 1, null, -1, null, -1, 3, 4]'
        },
        providedCode: 'class LRUCache:\n\n    def __init__(self, capacity: int):\n\n    def get(self, key: int) -> int:\n\n    def put(self, key: int, value: int) -> None:'
      },
      {
        name: 'Merge k Sorted Lists',
        difficulty: 'Hard',
        description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
        examples: {
          'lists = [[1,4,5],[1,3,4],[2,6]]': '[1,1,2,3,4,4,5,6]',
          'lists = []': '[]',
          'lists = [[]]': '[]'
        },
        providedCode: 'def mergeKLists(self, lists: List[ListNode]) -> ListNode:'
      },
      {
        name: 'Reverse Nodes in k-Group',
        difficulty: 'Hard',
        description: 'Given a linked list, reverse the nodes of a linked list k at a time and return its modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.',
        examples: {
          'head = [1,2,3,4,5], k = 2': '[2,1,4,3,5]',
          'head = [1,2,3,4,5], k = 3': '[3,2,1,4,5]'
        },
        providedCode: 'def reverseKGroup(self, head: ListNode, k: int) -> ListNode:'
      }
    ]
  },
  'trees': {
    name: 'Trees',
    problems: [
      {
        name: 'Invert Binary Tree',
        difficulty: 'Easy',
        description: 'Given the root of a binary tree, invert the tree, and return its root.',
        examples: {
          'root = [4,2,7,1,3,6,9]': '[4,7,2,9,6,3,1]',
          'root = [2,1,3]': '[2,3,1]',
          'root = []': '[]'
        },
        providedCode: 'def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:'
      },
      {
        name: 'Maximum Depth of Binary Tree',
        difficulty: 'Easy',
        description: 'Given the root of a binary tree, return its maximum depth. A binary tree\'s maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.',
        examples: {
          'root = [3,9,20,null,null,15,7]': '3',
          'root = [1,null,2]': '2'
        },
        providedCode: 'def maxDepth(self, root: Optional[TreeNode]) -> int:'
      },
      {
        name: 'Diameter of Binary Tree',
        difficulty: 'Easy',
        description: 'Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.',
        examples: {
          'root = [1,2,3,4,5]': '3',
          'root = [1,2]': '1'
        },
        providedCode: 'def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:'
      },
      {
        name: 'Balanced Binary Tree',
        difficulty: 'Easy',
        description: 'Given a binary tree, determine if it is height-balanced. For this problem, a height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of every node differ in height by no more than 1.',
        examples: {
          'root = [3,9,20,null,null,15,7]': 'true',
          'root = [1,2,2,3,3,null,null,4,4]': 'false'
        },
        providedCode: 'def isBalanced(self, root: Optional[TreeNode]) -> bool:'
      },
      {
        name: 'Same Tree',
        difficulty: 'Easy',
        description: 'Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.',
        examples: {
          'p = [1,2,3], q = [1,2,3]': 'true',
          'p = [1,2], q = [1,null,2]': 'false',
          'p = [1,2,1], q = [1,1,2]': 'false'
        },
        providedCode: 'def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:'
      },
      {
        name: 'Subtree of Another Tree',
        difficulty: 'Easy',
        description: 'Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.',
        examples: {
          'root = [3,4,5,1,2], subRoot = [4,1,2]': 'true',
          'root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]': 'false'
        },
        providedCode: 'def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:'
      },
      {
        name: 'Lowest Common Ancestor of a Binary Search Tree',
        difficulty: 'Medium',
        description: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.',
        examples: {
          'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8': '6',
          'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4': '2'
        },
        providedCode: 'def lowestCommonAncestor(self, root: "TreeNode", p: "TreeNode", q: "TreeNode") -> "TreeNode":'
      },
      {
        name: 'Binary Tree Level Order Traversal',
        difficulty: 'Medium',
        description: 'Given the root of a binary tree, return the level order traversal of its nodes\' values. (i.e., from left to right, level by level).',
        examples: {
          'root = [3,9,20,null,null,15,7]': '[[3],[9,20],[15,7]]',
          'root = [1]': '[[1]]',
          'root = []': '[]'
        },
        providedCode: 'def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:'
      },
      {
        name: 'Binary Tree Right Side View',
        difficulty: 'Medium',
        description: 'Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.',
        examples: {
          'root = [1,2,3,null,5,null,4]': '[1,3,4]',
          'root = [1,null,3]': '[1,3]',
          'root = []': '[]'
        },
        providedCode: 'def rightSideView(self, root: Optional[TreeNode]) -> List[int]:'
      },
      {
        name: 'Count Good Nodes in Binary Tree',
        difficulty: 'Medium',
        description: 'Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes in the binary tree.',
        examples: {
          'root = [3,1,4,3,null,1,5]': '4',
          'root = [3,3,null,4,2]': '3',
          'root = [1]': '1'
        },
        providedCode: 'def goodNodes(self, root: TreeNode) -> int:'
      },
      {
        name: 'Validate Binary Search Tree',
        difficulty: 'Medium',
        description: 'Given the root of a binary tree, determine if it is a valid binary search tree (BST).',
        examples: {
          'root = [2,1,3]': 'true',
          'root = [5,1,4,null,null,3,6]': 'false'
        },
        providedCode: 'def isValidBST(self, root: Optional[TreeNode]) -> bool:'
      },
      {
        name: 'Kth Smallest Element in a BST',
        difficulty: 'Medium',
        description: 'Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.',
        examples: {
          'root = [3,1,4,null,2], k = 1': '1',
          'root = [5,3,6,2,4,null,null,1], k = 3': '3'
        },
        providedCode: 'def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:'
      },
      {
        name: 'Construct Binary Tree from Preorder and Inorder Traversal',
        difficulty: 'Medium',
        description: 'Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.',
        examples: {
          'preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]': '[3,9,20,null,null,15,7]',
          'preorder = [-1], inorder = [-1]': '[-1]'
        },
        providedCode: 'def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:'
      },
      {
        name: 'Binary Tree Maximum Path Sum',
        difficulty: 'Hard',
        description: 'A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node\'s values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.',
        examples: {
          'root = [1,2,3]': '6',
          'root = [-10,9,20,null,null,15,7]': '42'
        },
        providedCode: 'def maxPathSum(self, root: Optional[TreeNode]) -> int:'
      },
      {
        name: 'Serialize and Deserialize Binary Tree',
        difficulty: 'Hard',
        description: 'Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.',
        examples: {
          'root = [1,2,3,null,null,4,5]': '[1,2,3,null,null,4,5]',
          'root = []': '[]'
        },
        providedCode: 'class Codec:\n    def serialize(self, root):\n        """\n        Serializes a tree to a single string.\n        """\n\n    def deserialize(self, data):\n        """\n        Deserializes your encoded data to tree.\n        """'
      }
    ]
  },
  'heap_priority_queue': {
    name: 'Heap / Priority Queue',
    problems: [
      {
        name: 'Kth Largest Element in a Stream',
        difficulty: 'Easy',
        description: 'Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.',
        examples: {
          '["KthLargest", "add", "add", "add", "add", "add"]\n[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]': '[null, 4, 5, 5, 8, 8]'
        },
        providedCode: 'class KthLargest:\n\n    def __init__(self, k: int, nums: List[int]):\n\n    def add(self, val: int) -> int:'
      },
      {
        name: 'Last Stone Weight',
        difficulty: 'Easy',
        description: 'You are given an array of integers stones where stones[i] is the weight of the ith stone. We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is: If x == y, both stones are destroyed, and If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x. At the end of the game, there is at most one stone left. Return the weight of the last remaining stone. If there are no stones left, return 0.',
        examples: {
          'stones = [2,7,4,1,8,1]': '1',
          'stones = [1]': '1'
        },
        providedCode: 'def lastStoneWeight(self, stones: List[int]) -> int:'
      },
      {
        name: 'K Closest Points to Origin',
        difficulty: 'Medium',
        description: 'Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0). The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2). You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).',
        examples: {
          'points = [[1,3],[-2,2]], k = 1': '[[-2,2]]',
          'points = [[3,3],[5,-1],[-2,4]], k = 2': '[[3,3],[-2,4]]'
        },
        providedCode: 'def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:'
      },
      {
        name: 'Kth Largest Element in an Array',
        difficulty: 'Medium',
        description: 'Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.',
        examples: {
          'nums = [3,2,1,5,6,4], k = 2': '5',
          'nums = [3,2,3,1,2,4,5,5,6], k = 4': '4'
        },
        providedCode: 'def findKthLargest(self, nums: List[int], k: int) -> int:'
      },
      {
        name: 'Task Scheduler',
        difficulty: 'Medium',
        description: 'Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks.',
        examples: {
          'tasks = ["A","A","A","B","B","B"], n = 2': '8',
          'tasks = ["A","A","A","B","B","B"], n = 0': '6',
          'tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2': '16'
        },
        providedCode: 'def leastInterval(self, tasks: List[str], n: int) -> int:'
      },
      {
        name: 'Design Twitter',
        difficulty: 'Medium',
        description: 'Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user\'s news feed.',
        examples: {
          '["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]\n[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]': '[null, null, [5], null, null, [6, 5], null, [5]]'
        },
        providedCode: 'class Twitter:\n\n    def __init__(self):\n\n    def postTweet(self, userId: int, tweetId: int) -> None:\n\n    def getNewsFeed(self, userId: int) -> List[int]:\n\n    def follow(self, followerId: int, followeeId: int) -> None:\n\n    def unfollow(self, followerId: int, followeeId: int) -> None:'
      },
      {
        name: 'Find Median from Data Stream',
        difficulty: 'Hard',
        description: 'The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. Design a data structure that supports the following two operations: addNum(int num) - Add a integer number from the data stream to the data structure. findMedian() - Return the median of all elements so far.',
        examples: {
          '["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]\n[[], [1], [2], [], [3], []]': '[null, null, null, 1.5, null, 2.0]'
        },
        providedCode: 'class MedianFinder:\n\n    def __init__(self):\n\n    def addNum(self, num: int) -> None:\n\n    def findMedian(self) -> float:'
      }
    ]
  },
  'backtracking': {
    name: 'Backtracking',
    problems: [
      {
        name: 'Subsets',
        difficulty: 'Medium',
        description: 'Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.',
        examples: {
          'nums = [1,2,3]': '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]',
          'nums = [0]': '[[],[0]]'
        },
        providedCode: 'def subsets(self, nums: List[int]) -> List[List[int]]:'
      },
      {
        name: 'Combination Sum',
        difficulty: 'Medium',
        description: 'Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.',
        examples: {
          'candidates = [2,3,6,7], target = 7': '[[2,2,3],[7]]',
          'candidates = [2,3,5], target = 8': '[[2,2,2,2],[2,3,3],[3,5]]',
          'candidates = [2], target = 1': '[]'
        },
        providedCode: 'def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:'
      },
      {
        name: 'Permutations',
        difficulty: 'Medium',
        description: 'Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.',
        examples: {
          'nums = [1,2,3]': '[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]',
          'nums = [0,1]': '[[0,1],[1,0]]',
          'nums = [1]': '[[1]]'
        },
        providedCode: 'def permute(self, nums: List[int]) -> List[List[int]]:'
      },
      {
        name: 'Subsets II',
        difficulty: 'Medium',
        description: 'Given an integer array nums that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.',
        examples: {
          'nums = [1,2,2]': '[[],[1],[1,2],[1,2,2],[2],[2,2]]',
          'nums = [0]': '[[],[0]]'
        },
        providedCode: 'def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:'
      },
      {
        name: 'Combination Sum II',
        difficulty: 'Medium',
        description: 'Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination. Note: The solution set must not contain duplicate combinations.',
        examples: {
          'candidates = [10,1,2,7,6,1,5], target = 8': '[[1,1,6],[1,2,5],[1,7],[2,6]]',
          'candidates = [2,5,2,1,2], target = 5': '[[1,2,2],[5]]'
        },
        providedCode: 'def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:'
      },
      {
        name: 'Word Search',
        difficulty: 'Medium',
        description: 'Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.',
        examples: {
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"': 'true',
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"': 'true',
          'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"': 'false'
        },
        providedCode: 'def exist(self, board: List[List[str]], word: str) -> bool:'
      },
      {
        name: 'Palindrome Partitioning',
        difficulty: 'Medium',
        description: 'Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.',
        examples: {
          's = "aab"': '[["a","a","b"],["aa","b"]]',
          's = "a"': '[["a"]]'
        },
        providedCode: 'def partition(self, s: str) -> List[List[str]]:'
      },
      {
        name: 'Letter Combinations of a Phone Number',
        difficulty: 'Medium',
        description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.',
        examples: {
          'digits = "23"': '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
          'digits = ""': '[]',
          'digits = "2"': '["a","b","c"]'
        },
        providedCode: 'def letterCombinations(self, digits: str) -> List[str]:'
      },
      {
        name: 'N-Queens',
        difficulty: 'Hard',
        description: 'The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order. Each solution contains a distinct board configuration of the n-queens\' placement, where \'Q\' and \'.\' both indicate a queen and an empty space, respectively.',
        examples: {
          'n = 4': '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
          'n = 1': '[["Q"]]'
        },
        providedCode: 'def solveNQueens(self, n: int) -> List[List[str]]:'
      }
    ]
  },
  'tries': {
    name: 'Tries',
    problems: [
      {
        name: 'Implement Trie (Prefix Tree)',
        difficulty: 'Medium',
        description: 'A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker. Implement the Trie class: Trie() Initializes the trie object. void insert(String word) Inserts the string word into the trie. boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise. boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.',
        examples: {
          '["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]': '[null, null, true, false, true, null, true]'
        },
        providedCode: 'class Trie:\n\n    def __init__(self):\n\n    def insert(self, word: str) -> None:\n\n    def search(self, word: str) -> bool:\n\n    def startsWith(self, prefix: str) -> bool:'
      },
      {
        name: 'Design Add and Search Words Data Structure',
        difficulty: 'Medium',
        description: 'Design a data structure that supports adding new words and finding if a string matches any previously added string. Implement the WordDictionary class: WordDictionary() Initializes the object. void addWord(word) Adds word to the data structure, it can be matched later. bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots \'.\' where dots can be matched with any letter.',
        examples: {
          '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]': '[null,null,null,null,false,true,true,true]'
        },
        providedCode: 'class WordDictionary:\n\n    def __init__(self):\n\n    def addWord(self, word: str) -> None:\n\n    def search(self, word: str) -> bool:'
      },
      {
        name: 'Word Search II',
        difficulty: 'Hard',
        description: 'Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.',
        examples: {
          'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]': '["eat","oath"]',
          'board = [["a","b"],["c","d"]], words = ["abcb"]': '[]'
        },
        providedCode: 'def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:'
      }
    ]
  },
  'graphs': {
    name: 'Graphs',
    problems: [
      {
        name: 'Number of Islands',
        difficulty: 'Medium',
        description: 'Given an m x n 2D binary grid grid which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.',
        examples: {
          'grid = [\n  ["1","1","1","1","0"],\n  ["1","1","0","1","0"],\n  ["1","1","0","0","0"],\n  ["0","0","0","0","0"]\n]': '1',
          'grid = [\n  ["1","1","0","0","0"],\n  ["1","1","0","0","0"],\n  ["0","0","1","0","0"],\n  ["0","0","0","1","1"]\n]': '3'
        },
        providedCode: 'def numIslands(self, grid: List[List[str]]) -> int:'
      },
      {
        name: 'Clone Graph',
        difficulty: 'Medium',
        description: 'Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.',
        examples: {
          'adjList = [[2,4],[1,3],[2,4],[1,3]]': '[[2,4],[1,3],[2,4],[1,3]]',
          'adjList = [[]]': '[[]]',
          'adjList = []': '[]'
        },
        providedCode: 'def cloneGraph(self, node: "Node") -> "Node":'
      },
      {
        name: 'Max Area of Island',
        difficulty: 'Medium',
        description: 'You are given an m x n binary matrix grid. An island is a group of 1\'s (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water. The area of an island is the number of cells with a value 1 in the island. Return the maximum area of an island in grid. If there is no island, return 0.',
        examples: {
          'grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]': '6',
          'grid = [[0,0,0,0,0,0,0,0]]': '0'
        },
        providedCode: 'def maxAreaOfIsland(self, grid: List[List[int]]) -> int:'
      },
      {
        name: 'Pacific Atlantic Water Flow',
        difficulty: 'Medium',
        description: 'There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island\'s left and top edges, and the Atlantic Ocean touches the island\'s right and bottom edges. The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c). The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell\'s height is less than or equal to the current cell\'s height. Water can flow from any cell adjacent to an ocean into the ocean. Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.',
        examples: {
          'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]': '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
          'heights = [[2,1],[1,2]]': '[[0,0],[0,1],[1,0],[1,1]]'
        },
        providedCode: 'def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:'
      },
      {
        name: 'Surrounded Regions',
        difficulty: 'Medium',
        description: 'Given an m x n matrix board containing \'X\' and \'O\', capture all regions that are 4-directionally surrounded by \'X\'. A region is captured by flipping all \'O\'s into \'X\'s in that surrounded region.',
        examples: {
          'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]': '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]',
          'board = [["X"]]': '[["X"]]'
        },
        providedCode: 'def solve(self, board: List[List[str]]) -> None:'
      },
      {
        name: 'Course Schedule',
        difficulty: 'Medium',
        description: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1. Return true if you can finish all courses. Otherwise, return false.',
        examples: {
          'numCourses = 2, prerequisites = [[1,0]]': 'true',
          'numCourses = 2, prerequisites = [[1,0],[0,1]]': 'false'
        },
        providedCode: 'def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:'
      },
      {
        name: 'Number of Connected Components in an Undirected Graph',
        difficulty: 'Medium',
        description: 'You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph. Return the number of connected components in the graph.',
        examples: {
          'n = 5, edges = [[0,1],[1,2],[3,4]]': '2',
          'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]': '1'
        },
        providedCode: 'def countComponents(self, n: int, edges: List[List[int]]) -> int:'
      },
      {
        name: 'Graph Valid Tree',
        difficulty: 'Medium',
        description: 'You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph. Return true if the edges of the given graph make up a valid tree, and false otherwise.',
        examples: {
          'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]': 'true',
          'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]': 'false'
        },
        providedCode: 'def validTree(self, n: int, edges: List[List[int]]) -> bool:'
      },
      {
        name: 'Word Ladder',
        difficulty: 'Hard',
        description: 'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that: Every adjacent pair of words differs by a single letter. Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList. sk == endWord Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.',
        examples: {
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]': '5',
          'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]': '0'
        },
        providedCode: 'def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:'
      }
    ]
  },
'advanced_graphs': {
    name: 'Advanced Graphs',
    problems: [
      {
        name: 'Reconstruct Itinerary',
        difficulty: 'Hard',
        description: 'You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it. All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"]. You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.',
        examples: {
          'tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]': '["JFK","MUC","LHR","SFO","SJC"]',
          'tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]': '["JFK","ATL","JFK","SFO","ATL","SFO"]'
        },
        providedCode: 'def findItinerary(self, tickets: List[List[str]]) -> List[str]:'
      },
      {
        name: 'Min Cost to Connect All Points',
        difficulty: 'Medium',
        description: 'You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi]. The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val. Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.',
        examples: {
          'points = [[0,0],[2,2],[3,10],[5,2],[7,0]]': '20',
          'points = [[3,12],[-2,5],[-4,1]]': '18'
        },
        providedCode: 'def minCostConnectPoints(self, points: List[List[int]]) -> int:'
      },
      {
        name: 'Network Delay Time',
        difficulty: 'Medium',
        description: 'You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target. We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.',
        examples: {
          'times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2': '2',
          'times = [[1,2,1]], n = 2, k = 1': '1',
          'times = [[1,2,1]], n = 2, k = 2': '-1'
        },
        providedCode: 'def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:'
      },
      {
        name: 'Swim in Rising Water',
        difficulty: 'Hard',
        description: 'You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j). The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim. Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).',
        examples: {
          'grid = [[0,2],[1,3]]': '3',
          'grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]': '16'
        },
        providedCode: 'def swimInWater(self, grid: List[List[int]]) -> int:'
      },
      {
        name: 'Alien Dictionary',
        difficulty: 'Hard',
        description: 'There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings words from the alien language\'s dictionary, where the strings in words are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language\'s rules. If there is no solution, return "". If there are multiple solutions, return any of them.',
        examples: {
          'words = ["wrt","wrf","er","ett","rftt"]': '"wertf"',
          'words = ["z","x"]': '"zx"',
          'words = ["z","x","z"]': '""'
        },
        providedCode: 'def alienOrder(self, words: List[str]) -> str:'
      },
      {
        name: 'Cheapest Flights Within K Stops',
        difficulty: 'Medium',
        description: 'There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei. You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.',
        examples: {
          'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1': '200',
          'n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0': '500'
        },
        providedCode: 'def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:'
      }
    ]
  },
  '1d_dynamic_programming': {
    name: '1D Dynamic Programming',
    problems: [
      {
        name: 'Climbing Stairs',
        difficulty: 'Easy',
        description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
        examples: {
          'n = 2': '2',
          'n = 3': '3'
        },
        providedCode: 'def climbStairs(self, n: int) -> int:'
      },
      {
        name: 'Min Cost Climbing Stairs',
        difficulty: 'Easy',
        description: 'You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps. You can either start from the step with index 0, or the step with index 1. Return the minimum cost to reach the top of the floor.',
        examples: {
          'cost = [10,15,20]': '15',
          'cost = [1,100,1,1,1,100,1,1,100,1]': '6'
        },
        providedCode: 'def minCostClimbingStairs(self, cost: List[int]) -> int:'
      },
      {
        name: 'House Robber',
        difficulty: 'Medium',
        description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.',
        examples: {
          'nums = [1,2,3,1]': '4',
          'nums = [2,7,9,3,1]': '12'
        },
        providedCode: 'def rob(self, nums: List[int]) -> int:'
      },
      {
        name: 'House Robber II',
        difficulty: 'Medium',
        description: 'You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night. Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.',
        examples: {
          'nums = [2,3,2]': '3',
          'nums = [1,2,3,1]': '4',
          'nums = [1,2,3]': '3'
        },
        providedCode: 'def rob(self, nums: List[int]) -> int:'
      },
      {
        name: 'Longest Palindromic Substring',
        difficulty: 'Medium',
        description: 'Given a string s, return the longest palindromic substring in s.',
        examples: {
          's = "babad"': '"bab"',
          's = "cbbd"': '"bb"'
        },
        providedCode: 'def longestPalindrome(self, s: str) -> str:'
      },
      {
        name: 'Palindromic Substrings',
        difficulty: 'Medium',
        description: 'Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward. A substring is a contiguous sequence of characters within the string.',
        examples: {
          's = "abc"': '3',
          's = "aaa"': '6'
        },
        providedCode: 'def countSubstrings(self, s: str) -> int:'
      },
      {
        name: 'Decode Ways',
        difficulty: 'Medium',
        description: 'A message containing letters from A-Z can be encoded into numbers using the following mapping: \'A\' -> "1", \'B\' -> "2", ..., \'Z\' -> "26". To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into: "AAJF" with the grouping (1 1 10 6), "KJF" with the grouping (11 10 6). Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into \'F\' since "6" is different from "06". Given a string s containing only digits, return the number of ways to decode it.',
        examples: {
          's = "12"': '2',
          's = "226"': '3',
          's = "06"': '0'
        },
        providedCode: 'def numDecodings(self, s: str) -> int:'
      },
      {
        name: 'Coin Change',
        difficulty: 'Medium',
        description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1. You may assume that you have an infinite number of each kind of coin.',
        examples: {
          'coins = [1,2,5], amount = 11': '3',
          'coins = [2], amount = 3': '-1',
          'coins = [1], amount = 0': '0'
        },
        providedCode: 'def coinChange(self, coins: List[int], amount: int) -> int:'
      },
      {
        name: 'Maximum Product Subarray',
        difficulty: 'Medium',
        description: 'Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product. The test cases are generated so that the answer will fit in a 32-bit integer. A subarray is a contiguous subsequence of the array.',
        examples: {
          'nums = [2,3,-2,4]': '6',
          'nums = [-2,0,-1]': '0'
        },
        providedCode: 'def maxProduct(self, nums: List[int]) -> int:'
      },
      {
        name: 'Word Break',
        difficulty: 'Medium',
        description: 'Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.',
        examples: {
          's = "leetcode", wordDict = ["leet","code"]': 'true',
          's = "applepenapple", wordDict = ["apple","pen"]': 'true',
          's = "catsandog", wordDict = ["cats","dog","sand","and","cat"]': 'false'
        },
        providedCode: 'def wordBreak(self, s: str, wordDict: List[str]) -> bool:'
      },
      {
        name: 'Longest Increasing Subsequence',
        difficulty: 'Medium',
        description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence. A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].',
        examples: {
          'nums = [10,9,2,5,3,7,101,18]': '4',
          'nums = [0,1,0,3,2,3]': '4',
          'nums = [7,7,7,7,7,7,7]': '1'
        },
        providedCode: 'def lengthOfLIS(self, nums: List[int]) -> int:'
      },
      {
        name: 'Partition Equal Subset Sum',
        difficulty: 'Medium',
        description: 'Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.',
        examples: {
          'nums = [1,5,11,5]': 'true',
          'nums = [1,2,3,5]': 'false'
        },
        providedCode: 'def canPartition(self, nums: List[int]) -> bool:'
      }
    ]
  },
  '2d_dynamic_programming': {
    name: '2D Dynamic Programming',
    problems: [
      {
        name: 'Unique Paths',
        difficulty: 'Medium',
        description: 'A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?',
        examples: {
          'm = 3, n = 7': '28',
          'm = 3, n = 2': '3'
        },
        providedCode: 'def uniquePaths(self, m: int, n: int) -> int:'
      },
      {
        name: 'Longest Common Subsequence',
        difficulty: 'Medium',
        description: 'Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0. A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. A common subsequence of two strings is a subsequence that is common to both strings.',
        examples: {
          'text1 = "abcde", text2 = "ace"': '3',
          'text1 = "abc", text2 = "abc"': '3',
          'text1 = "abc", text2 = "def"': '0'
        },
        providedCode: 'def longestCommonSubsequence(self, text1: str, text2: str) -> int:'
      },
      {
        name: 'Best Time to Buy and Sell Stock with Cooldown',
        difficulty: 'Medium',
        description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions: After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day). Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).',
        examples: {
          'prices = [1,2,3,0,2]': '3',
          'prices = [1]': '0'
        },
        providedCode: 'def maxProfit(self, prices: List[int]) -> int:'
      },
      {
        name: 'Coin Change II',
        difficulty: 'Medium',
        description: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0. You may assume that you have an infinite number of each kind of coin. The answer is guaranteed to fit into a signed 32-bit integer.',
        examples: {
          'amount = 5, coins = [1,2,5]': '4',
          'amount = 3, coins = [2]': '0',
          'amount = 10, coins = [10]': '1'
        },
        providedCode: 'def change(self, amount: int, coins: List[int]) -> int:'
      },
      {
        name: 'Target Sum',
        difficulty: 'Medium',
        description: 'You are given an integer array nums and an integer target. You want to build an expression out of nums by adding one of the symbols \'+\' and \'-\' before each integer in nums and then concatenate all the integers. For example, if nums = [2, 1], you can add a \'+\' before 2 and a \'-\' before 1 and concatenate them to build the expression "+2-1". Return the number of different expressions that you can build, which evaluates to target.',
        examples: {
          'nums = [1,1,1,1,1], target = 3': '5',
          'nums = [1], target = 1': '1'
        },
        providedCode: 'def findTargetSumWays(self, nums: List[int], target: int) -> int:'
      },
      {
        name: 'Interleaving String',
        difficulty: 'Medium',
        description: 'Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2. An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that: s = s1 + s2 + ... + sn, t = t1 + t2 + ... + tm, |n - m| <= 1, The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ... Note: a + b is the concatenation of strings a and b.',
        examples: {
          's1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"': 'true',
          's1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"': 'false',
          's1 = "", s2 = "", s3 = ""': 'true'
        },
        providedCode: 'def isInterleave(self, s1: str, s2: str, s3: str) -> bool:'
      },
      {
        name: 'Longest Increasing Path in a Matrix',
        difficulty: 'Hard',
        description: 'Given an m x n integers matrix, return the length of the longest increasing path in matrix. From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).',
        examples: {
          'matrix = [[9,9,4],[6,6,8],[2,1,1]]': '4',
          'matrix = [[3,4,5],[3,2,6],[2,2,1]]': '4',
          'matrix = [[1]]': '1'
        },
        providedCode: 'def longestIncreasingPath(self, matrix: List[List[int]]) -> int:'
      },
      {
        name: 'Distinct Subsequences',
        difficulty: 'Hard',
        description: 'Given two strings s and t, return the number of distinct subsequences of s which equals t. A string\'s subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters\' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not). The test cases are generated so that the answer fits on a 32-bit signed integer.',
        examples: {
          's = "rabbbit", t = "rabbit"': '3',
          's = "babgbag", t = "bag"': '5'
        },
        providedCode: 'def numDistinct(self, s: str, t: str) -> int:'
      },
      {
        name: 'Edit Distance',
        difficulty: 'Hard',
        description: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.',
        examples: {
          'word1 = "horse", word2 = "ros"': '3',
          'word1 = "intention", word2 = "execution"': '5'
        },
        providedCode: 'def minDistance(self, word1: str, word2: str) -> int:'
      },
      {
        name: 'Burst Balloons',
        difficulty: 'Hard',
        description: 'You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons. If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it. Return the maximum coins you can collect by bursting the balloons wisely.',
        examples: {
          'nums = [3,1,5,8]': '167',
          'nums = [1,5]': '10'
        },
        providedCode: 'def maxCoins(self, nums: List[int]) -> int:'
      },
      {
        name: 'Regular Expression Matching',
        difficulty: 'Hard',
        description: 'Given an input string s and a pattern p, implement regular expression matching with support for \'.\' and \'*\' where: \'.\' Matches any single character. \'*\' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial).',
        examples: {
          's = "aa", p = "a"': 'false',
          's = "aa", p = "a*"': 'true',
          's = "ab", p = ".*"': 'true'
        },
        providedCode: 'def isMatch(self, s: str, p: str) -> bool:'
      }
    ]
  },
  'greedy': {
    name: 'Greedy',
    problems: [
      {
        name: 'Maximum Subarray',
        difficulty: 'Medium',
        description: 'Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
        examples: {
          'nums = [-2,1,-3,4,-1,2,1,-5,4]': '6',
          'nums = [1]': '1',
          'nums = [5,4,-1,7,8]': '23'
        },
        providedCode: 'def maxSubArray(self, nums: List[int]) -> int:'
      },
      {
        name: 'Jump Game',
        difficulty: 'Medium',
        description: 'You are given an integer array nums. You are initially positioned at the array\'s first index, and each element in the array represents your maximum jump length at that position. Return true if you can reach the last index, or false otherwise.',
        examples: {
          'nums = [2,3,1,1,4]': 'true',
          'nums = [3,2,1,0,4]': 'false'
        },
        providedCode: 'def canJump(self, nums: List[int]) -> bool:'
      },
      {
        name: 'Jump Game II',
        difficulty: 'Medium',
        description: 'Given an array of non-negative integers nums, you are initially positioned at the first index of the array. Each element in the array represents your maximum jump length at that position. Your goal is to reach the last index in the minimum number of jumps. You can assume that you can always reach the last index.',
        examples: {
          'nums = [2,3,1,1,4]': '2',
          'nums = [2,3,0,1,4]': '2'
        },
        providedCode: 'def jump(self, nums: List[int]) -> int:'
      },
      {
        name: 'Gas Station',
        difficulty: 'Medium',
        description: 'There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i]. You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations. Given two integer arrays gas and cost, return the starting gas station\'s index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique',
        examples: {
          'gas = [1,2,3,4,5], cost = [3,4,5,1,2]': '3',
          'gas = [2,3,4], cost = [3,4,3]': '-1'
        },
        providedCode: 'def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:'
      },
      {
        name: 'Hand of Straights',
        difficulty: 'Medium',
        description: 'Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards. Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.',
        examples: {
          'hand = [1,2,3,6,2,3,4,7,8], groupSize = 3': 'true',
          'hand = [1,2,3,4,5], groupSize = 4': 'false'
        },
        providedCode: 'def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:'
      },
      {
        name: 'Merge Triplets to Form Target Triplet',
        difficulty: 'Medium',
        description: 'A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain. To obtain target, you may apply the following operation on triplets any number of times (possibly zero): Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)]. For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5]. Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.',
        examples: {
          'triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5]': 'true',
          'triplets = [[3,4,5],[4,5,6]], target = [3,2,5]': 'false',
          'triplets = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target = [5,5,5]': 'true'
        },
        providedCode: 'def mergeTriplets(self, triplets: List[List[int]], target: List[int]) -> bool:'
      },
      {
        name: 'Partition Labels',
        difficulty: 'Medium',
        description: 'You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s. Return a list of integers representing the size of these parts.',
        examples: {
          's = "ababcbacadefegdehijhklij"': '[9,7,8]',
          's = "eccbbbbdec"': '[10]'
        },
        providedCode: 'def partitionLabels(self, s: str) -> List[int]:'
      },
      {
        name: 'Valid Parenthesis String',
        difficulty: 'Medium',
        description: 'Given a string s containing only three types of characters: \'(\', \')\' and \'*\', return true if s is valid. The following rules define a valid string: Any left parenthesis \'(\' must have a corresponding right parenthesis \')\'. Any right parenthesis \')\' must have a corresponding left parenthesis \'(\'. Left parenthesis \'(\' must go before the corresponding right parenthesis \')\'. \'*\' could be treated as a single right parenthesis \')\' or a single left parenthesis \'(\' or an empty string "".',
        examples: {
          's = "()"': 'true',
          's = "(*)"': 'true',
          's = "(*))"': 'true'
        },
        providedCode: 'def checkValidString(self, s: str) -> bool:'
      }
    ]
  },
  'intervals': {
    name: 'Intervals',
    problems: [
      {
        name: 'Insert Interval',
        difficulty: 'Medium',
        description: 'You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval. Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary). Return intervals after the insertion.',
        examples: {
          'intervals = [[1,3],[6,9]], newInterval = [2,5]': '[[1,5],[6,9]]',
          'intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]': '[[1,2],[3,10],[12,16]]'
        },
        providedCode: 'def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:'
      },
      {
        name: 'Merge Intervals',
        difficulty: 'Medium',
        description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
        examples: {
          'intervals = [[1,3],[2,6],[8,10],[15,18]]': '[[1,6],[8,10],[15,18]]',
          'intervals = [[1,4],[4,5]]': '[[1,5]]'
        },
        providedCode: 'def merge(self, intervals: List[List[int]]) -> List[List[int]]:'
      },
      {
        name: 'Non-overlapping Intervals',
        difficulty: 'Medium',
        description: 'Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.',
        examples: {
          'intervals = [[1,2],[2,3],[3,4],[1,3]]': '1',
          'intervals = [[1,2],[1,2],[1,2]]': '2',
          'intervals = [[1,2],[2,3]]': '0'
        },
        providedCode: 'def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:'
      },
      {
        name: 'Meeting Rooms',
        difficulty: 'Easy',
        description: 'Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.',
        examples: {
          'intervals = [[0,30],[5,10],[15,20]]': 'false',
          'intervals = [[7,10],[2,4]]': 'true'
        },
        providedCode: 'def canAttendMeetings(self, intervals: List[List[int]]) -> bool:'
      },
      {
        name: 'Meeting Rooms II',
        difficulty: 'Medium',
        description: 'Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.',
        examples: {
          'intervals = [[0,30],[5,10],[15,20]]': '2',
          'intervals = [[7,10],[2,4]]': '1'
        },
        providedCode: 'def minMeetingRooms(self, intervals: List[List[int]]) -> int:'
      },
      {
        name: 'Minimum Interval to Include Each Query',
        difficulty: 'Hard',
        description: 'You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1. You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1. Return an array containing the answers to the queries.',
        examples: {
          'intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]': '[3,3,1,4]',
          'intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]': '[2,-1,4,6]'
        },
        providedCode: 'def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:'
      }
    ]
  },
  'math_and_geometry': {
    name: 'Math & Geometry',
    problems: [
      {
        name: 'Rotate Image',
        difficulty: 'Medium',
        description: 'You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.',
        examples: {
          'matrix = [[1,2,3],[4,5,6],[7,8,9]]': '[[7,4,1],[8,5,2],[9,6,3]]',
          'matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]': '[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]'
        },
        providedCode: 'def rotate(self, matrix: List[List[int]]) -> None:'
      },
      {
        name: 'Spiral Matrix',
        difficulty: 'Medium',
        description: 'Given an m x n matrix, return all elements of the matrix in spiral order.',
        examples: {
          'matrix = [[1,2,3],[4,5,6],[7,8,9]]': '[1,2,3,6,9,8,7,4,5]',
          'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]': '[1,2,3,4,8,12,11,10,9,5,6,7]'
        },
        providedCode: 'def spiralOrder(self, matrix: List[List[int]]) -> List[int]:'
      },
      {
        name: 'Set Matrix Zeroes',
        difficulty: 'Medium',
        description: 'Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0\'s. You must do it in place.',
        examples: {
          'matrix = [[1,1,1],[1,0,1],[1,1,1]]': '[[1,0,1],[0,0,0],[1,0,1]]',
          'matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]': '[[0,0,0,0],[0,4,5,0],[0,3,1,0]]'
        },
        providedCode: 'def setZeroes(self, matrix: List[List[int]]) -> None:'
      },
      {
        name: 'Happy Number',
        difficulty: 'Easy',
        description: 'Write an algorithm to determine if a number n is happy. A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.',
        examples: {
          'n = 19': 'true',
          'n = 2': 'false'
        },
        providedCode: 'def isHappy(self, n: int) -> bool:'
      },
      {
        name: 'Plus One',
        difficulty: 'Easy',
        description: 'You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0\'s. Increment the large integer by one and return the resulting array of digits.',
        examples: {
          'digits = [1,2,3]': '[1,2,4]',
          'digits = [4,3,2,1]': '[4,3,2,2]',
          'digits = [9]': '[1,0]'
        },
        providedCode: 'def plusOne(self, digits: List[int]) -> List[int]:'
      },
      {
        name: 'Pow(x, n)',
        difficulty: 'Medium',
        description: 'Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).',
        examples: {
          'x = 2.00000, n = 10': '1024.00000',
          'x = 2.10000, n = 3': '9.26100',
          'x = 2.00000, n = -2': '0.25000'
        },
        providedCode: 'def myPow(self, x: float, n: int) -> float:'
      },
      {
        name: 'Multiply Strings',
        difficulty: 'Medium',
        description: 'Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string. Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.',
        examples: {
          'num1 = "2", num2 = "3"': '"6"',
          'num1 = "123", num2 = "456"': '"56088"'
        },
        providedCode: 'def multiply(self, num1: str, num2: str) -> str:'
      },
      {
        name: 'Detect Squares',
        difficulty: 'Medium',
        description: 'You are given a stream of points on the X-Y plane. Design an algorithm that: Adds new points from the stream into a data structure. Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area. An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis. Implement the DetectSquares class: DetectSquares() Initializes the object with an empty data structure. void add(int[] point) Adds a new point point = [x, y] to the data structure. int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.',
        examples: {
          '["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]\n[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]': '[null, null, null, null, 1, 0, null, 2]'
        },
        providedCode: 'class DetectSquares:\n\n    def __init__(self):\n\n    def add(self, point: List[int]) -> None:\n\n    def count(self, point: List[int]) -> int:'
      }
    ]
  },
  'bit_manipulation': {
    name: 'Bit Manipulation',
    problems: [
      {
        name: 'Single Number',
        difficulty: 'Easy',
        description: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.',
        examples: {
          'nums = [2,2,1]': '1',
          'nums = [4,1,2,1,2]': '4',
          'nums = [1]': '1'
        },
        providedCode: 'def singleNumber(self, nums: List[int]) -> int:'
      },
      {
        name: 'Number of 1 Bits',
        difficulty: 'Easy',
        description: 'Write a function that takes an unsigned integer and returns the number of \'1\' bits it has (also known as the Hamming weight).',
        examples: {
          'n = 00000000000000000000000000001011': '3',
          'n = 00000000000000000000000010000000': '1',
          'n = 11111111111111111111111111111101': '31'
        },
        providedCode: 'def hammingWeight(self, n: int) -> int:'
      },
      {
        name: 'Counting Bits',
        difficulty: 'Easy',
        description: 'Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1\'s in the binary representation of i.',
        examples: {
          'n = 2': '[0,1,1]',
          'n = 5': '[0,1,1,2,1,2]'
        },
        providedCode: 'def countBits(self, n: int) -> List[int]:'
      },
      {
        name: 'Reverse Bits',
        difficulty: 'Easy',
        description: 'Reverse bits of a given 32 bits unsigned integer.',
        examples: {
          'n = 00000010100101000001111010011100': '964176192 (00111001011110000010100101000000)',
          'n = 11111111111111111111111111111101': '3221225471 (10111111111111111111111111111111)'
        },
        providedCode: 'def reverseBits(self, n: int) -> int:'
      },
      {
        name: 'Missing Number',
        difficulty: 'Easy',
        description: 'Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.',
        examples: {
          'nums = [3,0,1]': '2',
          'nums = [0,1]': '2',
          'nums = [9,6,4,2,3,5,7,0,1]': '8'
        },
        providedCode: 'def missingNumber(self, nums: List[int]) -> int:'
      },
      {
        name: 'Sum of Two Integers',
        difficulty: 'Medium',
        description: 'Given two integers a and b, return the sum of the two integers without using the operators + and -.',
        examples: {
          'a = 1, b = 2': '3',
          'a = 2, b = 3': '5'
        },
        providedCode: 'def getSum(self, a: int, b: int) -> int:'
      },
      {
        name: 'Reverse Integer',
        difficulty: 'Medium',
        description: 'Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0. Assume the environment does not allow you to store 64-bit integers (signed or unsigned).',
        examples: {
          'x = 123': '321',
          'x = -123': '-321',
          'x = 120': '21'
        },
        providedCode: 'def reverse(self, x: int) -> int:'
      }
    ]
  }
};

const uploadToFirestore = async () => {
  for (const [categoryId, category] of Object.entries(leetcodeData)) {
    console.log(`Uploading category: ${category.name}`);
    const categoryRef = db.collection('leetcodequestions').doc(categoryId);
    await categoryRef.set({ name: category.name });

    for (const problem of category.problems) {
      console.log(`Uploading problem: ${problem.name}`);
      const problemRef = categoryRef.collection('problems').doc(problem.name.toLowerCase().replace(/ /g, '_'));
      await problemRef.set({
        name: problem.name,
        difficulty: problem.difficulty,
        description: problem.description,
        examples: problem.examples,
        providedCode: problem.providedCode
      });
    }
  }
  console.log('Upload completed successfully.');
};

// Execute the upload function
uploadToFirestore().catch(error => {
  console.error('Error uploading data to Firestore:', error);
});