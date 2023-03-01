#!/bin/sh

device="`ls /run/user/1000/gvfs | head -n 1`"
echo $device
target="/run/user/1000/gvfs/$device/Tablet/Download"

rm -rf "$target"/*build*

for i in MatchData MatchScouting SuperScouting; do
	cp -r "$i"/build "$target"/build-"$i"
done
