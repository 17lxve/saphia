from os import system as do
do('git add *')
message = input("Enter message: ")
do(f'git commit -m "{message}"')
do('git push -u origin dev')