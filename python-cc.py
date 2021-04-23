# Write a function called repeatStr which repeats the given string 
# string exactly n times.

# My Solution: 

def repeat_str(repeat, string):
    result = ""
    for line in range(repeat):
        
        result = result + string
       
    
    return (result)


# Sample tests:     
# import codewars_test as test
# from solution import repeat_str

# @test.describe('Fixed tests')
# def basic_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(repeat_str(4, 'a'), 'aaaa')
#         test.assert_equals(repeat_str(3, 'hello '), 'hello hello hello ')
#         test.assert_equals(repeat_str(2, 'abc'), 'abcabc')
    

    
# Evens times last

# Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

# If the sequence is empty, you should return 0.

def even_last(numbers): 
    print("input is", numbers)
    count = 0
    answer = []
    if numbers == []:
        return 0
    for number in numbers:
        if count%2 == 0:
            answer.append(number)
            print("Array before sums together", answer)
            
        count = count + 1
        
    findsum = sum(answer)
    print("The sum of array", findsum)
    x = findsum * numbers[-1]
    print('should be final', x)
    return x
    
        