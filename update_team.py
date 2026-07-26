import re

with open("index.html", "r") as f:
    content = f.read()

# Work directly on the escaped content - don't decode/re-encode
# Just find and remove the escaped team member blocks

# The content has escaped quotes like \" and escaped newlines like \n
# We need to match those patterns directly

# Remove Kai Williamson block (UPPER-RIGHT)
content = re.sub(
    r'<!-- UPPER-RIGHT[^K]*Kai Williamson[^>]*-->.*?<\\\/div>\\n        <\\\/div>\\n        <\\\/div>\\n\\n        ',
    '',
    content,
    flags=re.DOTALL
)

# Remove Jonathan Brooks block (LOWER-RIGHT)  
content = re.sub(
    r'<!-- LOWER-RIGHT[^J]*Jonathan Brooks[^>]*-->.*?<\\\/div>\\n        <\\\/div>\\n        <\\\/div>\\n\\n        ',
    '',
    content,
    flags=re.DOTALL
)

# Remove Joshua Nelson block (BOTTOM)
content = re.sub(
    r'<!-- BOTTOM[^J]*Joshua Nelson[^>]*-->.*?<\\\/div>\\n        <\\\/div>\\n        <\\\/div>\\n\\n        ',
    '',
    content,
    flags=re.DOTALL
)

# Remove Allan E. Rosales block (LOWER-LEFT)
content = re.sub(
    r'<!-- LOWER-LEFT[^A]*Allan E\. Rosales[^>]*-->.*?<\\\/div>\\n        <\\\/div>\\n        <\\\/div>\\n\\n        ',
    '',
    content,
    flags=re.DOTALL
)

with open("index.html", "w") as f:
    f.write(content)

print("Successfully updated team slide!")
print("- Removed: Kai Williamson, Jonathan Brooks, Joshua Nelson, Allan E. Rosales")
print("- Kept: Caston Boyd, Mihir Pathak")
