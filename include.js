function! RunTestjs(includenum, jquery, underscore)
  silent !testjs expand('%:p') a:includenum a:jquery a:underscore
endfunction

set makeprg=jstest\ %\ $*
function! RunTestjs(includenum, jquery, underscore)
  silent !testjs expand('%:p') a:includenum a:jquery a:underscore
endfunction

set makeprg=jstest\ %:p\ $*
function! RunTestjs(includenum, jquery, underscore)
  silent !testjs expand('%:p') a:includenum a:jquery a:underscore
endfunction

set makeprg=jstest\ %:p\ $*
function! RunTestjs(includenum, jquery, underscore)
  silent !testjs expand('%:p') a:includenum a:jquery a:underscore
endfunction

set makeprg=jstest\ %:p\ $*
