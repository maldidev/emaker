# EMaker
### wth is that ?!
ec - Thats a tool, inspired by Makefile.

## How to use?
1. Create file "EMake"



As your choice, you can add list of files and flags to CC 
```bash
# full example code:
CC=gcc
OUTPUT=program
FILE_LIST=file1.c file2.c file3.c file4.c file5.c
CFLAGS=-static -o

$CC $FILE_LIST $CFLAGS program
clean[
    sudo rm $OUTPUT
    sudo rm /usr/local/bin/$OUTPUT

install[
    sudo mv $OUTPUT /usr/local/bin
    w "Done!"
```

# Getting and usable state
```bash
git clone https://github.com/maldidev/emaker
cd emaker
./build
```
Using:
```bash
em -h
```
