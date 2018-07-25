function telephoneCheck(str) {
  var validNum = /^1?[-. ]?(\(\d{3}\)|\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;
  return validNum.test(str);
}

telephoneCheck("555-555-5555");

// ^        # Assert position at the beginning of the string.
// 1        # Match a numeral 1
//   ?      #   between zero and one time.
// [-. ]    # Match one hyphen, dot, or space
//   ?      #   between zero and one time.
// (        # Capturing Opening Parentheses.
// \(       # Match a literal "("
//  [\d]    #   Match a digit
//   {3}    #     exactly three times in parentheses,
//     \)   # Match a literal ")"
//    |     #       or
//   [\d]   #        Match a digit
//     {3}  #         exactly three times without parentheses.
//        ) # Capturing Closing Parentheses.
// [-. ]    # Match one hyphen, dot, or space
//   ?      #   between zero and one time.
//  ⋯       # [Match the remaining digits and separator.]
// $        # Assert position at the end of the string.