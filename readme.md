# git cat-file sha1
    1. -t Instead of the content, show the object type identified by <object>.
    2. -p Pretty-print the contents of <object> based on its type.

# git ls-files
view .git/index 

# git gc
 Cleanup unnecessary files and optimize the local repository

# git verify-pack
Reads given idx file for packed Git archive created with the git pack-objects command and verifies idx file and the corresponding pack file.

# git prune
This runs git fsck --unreachable using all the refs available in refs/

    1. new file
    2. git add (--unreachable sha1)
    3. update file
    4. git add (new sha1)
    5. git commit 

# git reflog
This command manages the information recorded in the reflogs.

    1.build a new branch
    2.update && commit
    3.switch to master
    4.delete new branch
    5.git reflog
    6.find the commit sha1