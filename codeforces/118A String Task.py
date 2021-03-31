def ateam(word):
    vowels = "aeiou"
    ans = ""
    for char in word:
        if char not in vowels and char.isalpha():
            ans += "." + char.lower()
    return ans


word = input()
print(ateam(word))