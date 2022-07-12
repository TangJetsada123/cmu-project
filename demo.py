import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.
total = ""
char_count = [115, 104, 111, 119, 101, 114, 32, 116, 104, 111, 117, 103, 104, 116, 58, 32, 104, 117, 109, 97]
for i in char_count:
    
 total += chr(i).decode('utf-8')
   

# Write an answer using print
# To debug: print("Debug messages...", file=sys.stderr, flush=True)

print(total)
