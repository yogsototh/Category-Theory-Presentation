#!/usr/bin/env zsh

# get script directory
if [[ ${0[0]} = '/' ]]; then
    scriptdir="${0:h}"
else
    scriptdir="$PWD/${0:h}"
fi

cd $scriptdir

for rep in **/{??,???}_*(N/); do
    print "renaming html of $rep"
    cd $rep
    i=10
	for fic in *.html(.N); do
        title=$( <$fic grep h2 | sed 's/<[^>]*>//g;s/&[^;]*;//g;s/[^a-zA-Z0-9]/_/g;s/__*/_/g;s/^_//;s/_$//;')
        if ((i<100)); then
            num="0$i"
        else
            num="$i"
        fi
        ((i+=10))
        newfic=${num}_$title.${fic:e}
        [[ $fic == $newfic ]] && { continue }
        [[ -e $newfic ]] && {
                print -- "$newfic already exists!" >&2
                continue
            }
        mv $fic $newfic
        mdfic=${fic:r}.md
        newmdfic=${newfic:r}.md
        [[ -e $mdfic ]] && mv $mdfic $newmdfic
    done
    cd $scriptdir
done
