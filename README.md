# jssimplebuild
A simple build system for testing small scripts in the browser.  This was written for testing my course assessments, so it works best with simple, one-file scripts.  It can include jQuery or underscore if needed.

## Installation
1.  `cd ~/Public` and run `git clone https://github.com/willfulbard/jssimplebuild.git`
2.  If using Sublime Text:
  1.  Copy: `cp jssimplebuild.sublime-build ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/User/`
  3.  In Sublime: select jssimplebuild from `Tools -> Build System`
3.  If using vim, add the lines in javascript.vim to your .vimrc or copy it into your `~/.vim/ftplugins/javascript.vim` file.
4.  Enjoy using cmd-b or :make respectively!

## Tips
*  Since it creates a link to your file, you only need to build once then refresh the page after saving.
*  If you're using sublime, it includes jQuery and underscore by default.  To change this behavior you need to change the `jssimplebuild.sublime-build` and remove the keywords `jquery` or `underscore` from the file.

