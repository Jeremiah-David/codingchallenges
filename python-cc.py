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
    